import {
  byTerm,
  categoryPath,
  countryPath,
  entryUrl,
  primaryCategory,
  primaryCategorySlug,
  splitEntryId,
  type Country,
  type Entry,
} from './urls';
import {
  categoriesFor,
  countriesFor,
  countryAlternates,
  countryCategoryAlternates,
  entriesFor,
  entriesInCategory,
  entryAlternates,
  loadSite,
  type Alternate,
} from './site';
import {
  hasTranslation,
  localizeCountry,
  translatedEntry,
  type LocalizedCountry,
} from './localize';
import {
  CATEGORY_BY_ID,
  localizeCategory,
  type CategoryId,
  type LocalizedCategory,
} from '../data/taxonomy';
import type { Locale } from '../data/locales';

/**
 * `getStaticPaths()` bodies for the three dynamic route levels, written once
 * and called once per locale from the matching route file.
 *
 * Everything each page needs is computed here and handed over as props: the
 * page bodies never call `getCollection()`. At ten thousand entries the
 * alternative is ten thousand full-collection scans, and it is not something
 * that can be retrofitted once the page templates have grown used to reaching
 * for the whole collection.
 */

export interface TermLink {
  term: string;
  romanization?: string;
  href: string;
  lang: string;
}

export interface EntryListItem {
  entry: Entry;
  href: string;
  gloss: string;
  senseCount: number;
}

const termLink = (entry: Entry, href: string, lang: string): TermLink => ({
  term: entry.data.term,
  romanization: entry.data.romanization,
  href,
  lang,
});

/**
 * Editorial depth, used to pick what to surface first.
 *
 * Deliberately not randomness and not alphabetical order: the first thing a
 * reader sees on a country page should be the entry that best demonstrates what
 * a full entry looks like, and that choice should be stable between builds.
 */
export const depth = (e: Entry) =>
  e.data.definitions.length +
  e.data.examples.length +
  (e.data.origin ? 2 : 0) +
  e.data.relatedTerms.length;

// ------------------------------------------------------------ country hub

export interface CountryPageProps {
  locale: Locale;
  country: LocalizedCountry;
  entries: EntryListItem[];
  topics: { category: LocalizedCategory; count: number; href: string }[];
  starters: TermLink[];
  alternates: Alternate[];
}

export async function buildCountryRoutes(locale: Locale) {
  const site = await loadSite();

  return countriesFor(site, locale).map((country) => {
    const entries = entriesFor(site, country.id, locale);
    const c = localizeCountry(country, locale);

    return {
      params: { country: c.urlSlug },
      props: {
        locale,
        country: c,
        entries: entries.map((e) => listItem(e, site.byId, locale)),
        topics: categoriesFor(entries).map(({ category, count }) => ({
          category: localizeCategory(category, locale),
          count,
          href: categoryPath(c.urlSlug, category.urlSlug, locale),
        })),
        starters: [...entries]
          .sort((a, b) => depth(b) - depth(a))
          .slice(0, 8)
          .map((e) => termLink(e, entryUrl(e, site.byId, locale), c.languageCode)),
        alternates: countryAlternates(site, country),
      } satisfies CountryPageProps,
    };
  });
}

// ------------------------------------------------------ country × category

export interface CountryCategoryPageProps {
  locale: Locale;
  country: LocalizedCountry;
  category: LocalizedCategory;
  entries: EntryListItem[];
  otherTopics: { category: LocalizedCategory; count: number; href: string }[];
  /** The same topic in the other countries — a lateral crawl path. */
  elsewhere: { country: LocalizedCountry; count: number; href: string }[];
  countryHref: string;
  alternates: Alternate[];
}

export async function buildCategoryRoutes(locale: Locale) {
  const site = await loadSite();
  const countries = countriesFor(site, locale);

  // Precomputed once for the whole route file: for each category, which
  // countries have terms in it. The `elsewhere` band needs this on every page,
  // and recomputing it per page is a quadratic scan over the collection.
  const byCategory = new Map<CategoryId, { country: Country; count: number }[]>();
  for (const country of countries) {
    for (const { category, count } of categoriesFor(entriesFor(site, country.id, locale))) {
      const list = byCategory.get(category.id);
      if (list) list.push({ country, count });
      else byCategory.set(category.id, [{ country, count }]);
    }
  }

  return countries.flatMap((country) => {
    const all = entriesFor(site, country.id, locale);
    const c = localizeCountry(country, locale);
    const topics = categoriesFor(all);

    return topics.map(({ category }) => ({
      params: { country: c.urlSlug, category: category.urlSlug },
      props: {
        locale,
        country: c,
        category: localizeCategory(category, locale),
        entries: entriesInCategory(all, category.id).map((e) =>
          listItem(e, site.byId, locale),
        ),
        otherTopics: topics
          .filter((t) => t.category.id !== category.id)
          .sort((a, b) => b.count - a.count)
          .slice(0, 6)
          .map((t) => ({
            category: localizeCategory(t.category, locale),
            count: t.count,
            href: categoryPath(c.urlSlug, t.category.urlSlug, locale),
          })),
        elsewhere: (byCategory.get(category.id) ?? [])
          .filter((x) => x.country.id !== country.id)
          .map((x) => ({
            country: localizeCountry(x.country, locale),
            count: x.count,
            href: categoryPath(x.country.data.urlSlug, category.urlSlug, locale),
          })),
        countryHref: countryPath(country, locale),
        alternates: countryCategoryAlternates(site, country, category.id),
      } satisfies CountryCategoryPageProps,
    }));
  });
}

// ------------------------------------------------------------------- entry

export interface EntryPageProps {
  locale: Locale;
  entry: Entry;
  country: LocalizedCountry;
  category: LocalizedCategory;
  content: NonNullable<ReturnType<typeof translatedEntry>>;
  categories: { category: LocalizedCategory; href: string }[];
  prev: TermLink | null;
  next: TermLink | null;
  related: TermLink[];
  moreInCategory: TermLink[];
  alsoUsedIn: { adjective: string; flag: string; href: string }[];
  countryHref: string;
  categoryHref: string;
  alternates: Alternate[];
}

export async function buildEntryRoutes(locale: Locale) {
  const site = await loadSite();
  const entryById = new Map(site.entries.map((e) => [e.id, e]));

  return countriesFor(site, locale).flatMap((country) => {
    const all = entriesFor(site, country.id, locale);
    const c = localizeCountry(country, locale);

    // Neighbours run within the *category*, not the whole country, so that
    // "previous / next" walks the same cluster the breadcrumb just named.
    const byCategory = new Map<CategoryId, Entry[]>();
    for (const e of all) {
      const id = primaryCategory(e);
      const list = byCategory.get(id);
      if (list) list.push(e);
      else byCategory.set(id, [e]);
    }
    for (const list of byCategory.values()) list.sort(byTerm);

    return all.map((entry) => {
      const [, termSlug] = splitEntryId(entry.id);
      const categoryId = primaryCategory(entry);
      const category = CATEGORY_BY_ID.get(categoryId)!;
      const siblings = byCategory.get(categoryId)!;
      const i = siblings.indexOf(entry);

      const href = (e: Entry) => entryUrl(e, site.byId, locale);
      const langOf = (e: Entry) => site.byId.get(splitEntryId(e.id)[0])!.data.languageCode;

      // Curated related terms only, capped at six, never backfilled — and
      // dropped entirely when the target isn't readable in this locale.
      const relatedEntries: Entry[] = [];
      for (const ref of entry.data.relatedTerms) {
        const target = entryById.get(ref.id);
        if (target && hasTranslation(target, locale)) relatedEntries.push(target);
        if (relatedEntries.length === 6) break;
      }
      const related = relatedEntries.map((e) => termLink(e, href(e), langOf(e)));

      const relatedIds = new Set(entry.data.relatedTerms.map((r) => r.id));
      const moreInCategory = siblings
        .filter((e) => e.id !== entry.id && !relatedIds.has(e.id))
        .sort((a, b) => depth(b) - depth(a))
        .slice(0, 5)
        .map((e) => termLink(e, href(e), c.languageCode));

      return {
        params: { country: c.urlSlug, category: category.urlSlug, entry: termSlug },
        props: {
          locale,
          entry,
          country: c,
          category: localizeCategory(category, locale),
          content: translatedEntry(entry, locale)!,
          categories: entry.data.categories.map((id) => {
            const cat = CATEGORY_BY_ID.get(id)!;
            return {
              category: localizeCategory(cat, locale),
              href: categoryPath(c.urlSlug, cat.urlSlug, locale),
            };
          }),
          prev: siblings[i - 1]
            ? termLink(siblings[i - 1]!, href(siblings[i - 1]!), c.languageCode)
            : null,
          next: siblings[i + 1]
            ? termLink(siblings[i + 1]!, href(siblings[i + 1]!), c.languageCode)
            : null,
          related,
          moreInCategory,
          alsoUsedIn: entry.data.alsoUsedIn
            .map((ref) => site.byId.get(ref.id))
            .filter((x): x is Country => Boolean(x))
            .filter((x) => entriesFor(site, x.id, locale).length > 0)
            .map((x) => {
              const lc = localizeCountry(x, locale);
              return { adjective: lc.adjective, flag: lc.flagEmoji, href: countryPath(x, locale) };
            }),
          countryHref: countryPath(country, locale),
          categoryHref: categoryPath(c.urlSlug, category.urlSlug, locale),
          alternates: entryAlternates(country, entry),
        } satisfies EntryPageProps,
      };
    });
  });
}

// ---------------------------------------------------------------- helpers

function listItem(
  entry: Entry,
  countries: Map<string, Country>,
  locale: Locale,
): EntryListItem {
  const content = translatedEntry(entry, locale)!;
  return {
    entry,
    href: entryUrl(entry, countries, locale),
    gloss: content.definitions[0].text,
    senseCount: content.definitions.length,
  };
}

export { primaryCategorySlug };
