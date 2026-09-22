import { getCollection } from 'astro:content';
import {
  byTerm,
  countriesById,
  countryPath,
  categoryPath,
  entryPath,
  homePath,
  primaryCategorySlug,
  splitEntryId,
  type Country,
  type Entry,
} from './urls';
import { hasTranslation } from './localize';
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../data/locales';
import { CATEGORIES, CATEGORY_BY_ID, type CategoryId } from '../data/taxonomy';
import { SITE_URL } from './seo';

/**
 * The site graph: which pages exist, in which locales, and what their
 * equivalents are called in the others.
 *
 * Every route file builds its paths from here rather than filtering
 * `getCollection()` itself, for two reasons. The obvious one is that the
 * locale-availability rule ("a page exists only where its content is
 * translated") has to be identical in the route builder and in the hreflang
 * builder, or the site advertises alternates that 404. The less obvious one is
 * cost: this grouping runs once per route file instead of once per page, which
 * is the difference between a build that scales past ten thousand entries and
 * one that does not.
 */

export interface SiteData {
  countries: Country[];
  byId: Map<string, Country>;
  entries: Entry[];
  /** Published entries for one country, sorted the way a dictionary would. */
  entriesByCountry: Map<string, Entry[]>;
}

export async function loadSite(): Promise<SiteData> {
  const countries = (await getCollection('countries')).sort((a, b) => a.data.order - b.data.order);
  const entries = await getCollection('entries', (e) => e.data.status === 'published');

  const entriesByCountry = new Map<string, Entry[]>();
  for (const e of entries) {
    const [cid] = splitEntryId(e.id);
    const list = entriesByCountry.get(cid);
    if (list) list.push(e);
    else entriesByCountry.set(cid, [e]);
  }
  for (const list of entriesByCountry.values()) list.sort(byTerm);

  return { countries, byId: countriesById(countries), entries, entriesByCountry };
}

/** Entries in `country` that are readable in `locale`. */
export const entriesFor = (site: SiteData, countryId: string, locale: Locale) =>
  (site.entriesByCountry.get(countryId) ?? []).filter((e) => hasTranslation(e, locale));

/** Entries in `country` filed under `category` — in any position, not just first. */
export const entriesInCategory = (entries: Entry[], category: CategoryId) =>
  entries.filter((e) => e.data.categories.includes(category));

/** The categories a country actually has terms for, in taxonomy order. */
export function categoriesFor(entries: Entry[]) {
  const counts = new Map<CategoryId, number>();
  for (const e of entries) {
    for (const c of e.data.categories) counts.set(c, (counts.get(c) ?? 0) + 1);
  }
  return CATEGORIES.filter((c) => counts.has(c.id)).map((c) => ({
    category: c,
    count: counts.get(c.id)!,
  }));
}

/** Countries with at least one entry readable in `locale`. */
export const countriesFor = (site: SiteData, locale: Locale) =>
  site.countries.filter((c) => entriesFor(site, c.id, locale).length > 0);

// ------------------------------------------------------------------ hreflang

export interface Alternate {
  locale: Locale;
  hreflang: string;
  /** Absolute URL, for `<link rel="alternate" hreflang>` tags — Google requires these to be absolute. */
  href: string;
  /** Site-relative path, for in-page links (e.g. the locale switcher) so they stay on the current host. */
  path: string;
}

/**
 * Builds the `rel="alternate"` set for a page.
 *
 * `available` is the locales in which the page genuinely exists; `path` renders
 * its URL in one of them. A page with only one available locale gets an empty
 * set — a lone self-referential hreflang is noise, and Google ignores an
 * annotation that isn't reciprocated anyway.
 *
 * `x-default` points at the English URL, which is the right answer here because
 * English is the root locale and the fullest edition of every page.
 */
export function alternatesFor(
  available: Locale[],
  path: (locale: Locale) => string,
): Alternate[] {
  if (available.length < 2) return [];
  const out: Alternate[] = LOCALES.filter((l) => available.includes(l.code)).map((l) => ({
    locale: l.code,
    hreflang: l.hreflang,
    href: new URL(path(l.code), SITE_URL).href,
    path: path(l.code),
  }));
  if (available.includes(DEFAULT_LOCALE)) {
    out.push({
      locale: DEFAULT_LOCALE,
      hreflang: 'x-default',
      href: new URL(path(DEFAULT_LOCALE), SITE_URL).href,
      path: path(DEFAULT_LOCALE),
    });
  }
  return out;
}

const ALL_LOCALES = LOCALES.map((l) => l.code);

/** Chrome pages exist in every locale — they have no content to be missing. */
export const chromeAlternates = (path: (locale: Locale) => string) =>
  alternatesFor(ALL_LOCALES, path);

export const homeAlternates = () => chromeAlternates(homePath);

export function countryAlternates(site: SiteData, country: Country) {
  const available = ALL_LOCALES.filter((l) => entriesFor(site, country.id, l).length > 0);
  return alternatesFor(available, (l) => countryPath(country, l));
}

export function countryCategoryAlternates(
  site: SiteData,
  country: Country,
  category: CategoryId,
) {
  const slug = CATEGORY_BY_ID.get(category)!.urlSlug;
  const available = ALL_LOCALES.filter(
    (l) => entriesInCategory(entriesFor(site, country.id, l), category).length > 0,
  );
  return alternatesFor(available, (l) => categoryPath(country.data.urlSlug, slug, l));
}

export function entryAlternates(country: Country, entry: Entry) {
  const available = ALL_LOCALES.filter((l) => hasTranslation(entry, l));
  const [, termSlug] = splitEntryId(entry.id);
  const categorySlug = primaryCategorySlug(entry);
  return alternatesFor(available, (l) =>
    entryPath(country.data.urlSlug, categorySlug, termSlug, l),
  );
}
