import type { CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, localePrefix, type Locale } from '../data/locales';
import { CATEGORY_BY_ID, type CategoryId } from '../data/taxonomy';

/**
 * The only place site paths are constructed.
 *
 * The shape is locale → country → category → term:
 *
 *     /mexican-slang/                     country hub
 *     /mexican-slang/people/              country × category
 *     /mexican-slang/people/guey/         term
 *     /es/mexican-slang/people/guey/      the same term, explained in Spanish
 *
 * Two rules keep it from rotting:
 *
 * 1. The `-slang` suffix lives exclusively in `countries.json.urlSlug`. Never
 *    build it by concatenating onto a country id — the first section that isn't
 *    a country (`internet-slang`, `nigerian-pidgin`) would break every link.
 * 2. The locale prefix comes from `localePrefix()`, which returns `''` for
 *    English. Never write `/${locale}` — English lives at the root.
 *
 * Country and category slugs are *not* translated. They are the site's stable
 * identifiers and the thing hreflang pairs two URLs on; translating them would
 * mean every locale had a different URL for the same entry and no way to line
 * them up again.
 */

export type Country = CollectionEntry<'countries'>;
export type Entry = CollectionEntry<'entries'>;

const join = (locale: Locale, ...segments: string[]) =>
  `${localePrefix(locale)}/${segments.map((s) => `${s}/`).join('')}`;

export const homePath = (locale: Locale = DEFAULT_LOCALE) => join(locale);

export const countryPath = (country: Country, locale: Locale = DEFAULT_LOCALE) =>
  join(locale, country.data.urlSlug);

export const categoryPath = (
  countryUrlSlug: string,
  categoryUrlSlug: string,
  locale: Locale = DEFAULT_LOCALE,
) => join(locale, countryUrlSlug, categoryUrlSlug);

export const entryPath = (
  countryUrlSlug: string,
  categoryUrlSlug: string,
  termSlug: string,
  locale: Locale = DEFAULT_LOCALE,
) => join(locale, countryUrlSlug, categoryUrlSlug, termSlug);

export const browsePath = (locale: Locale = DEFAULT_LOCALE) => join(locale, 'browse');
export const searchPath = (locale: Locale = DEFAULT_LOCALE) => join(locale, 'search');
export const aboutPath = (locale: Locale = DEFAULT_LOCALE) => join(locale, 'about');
export const contactPath = (locale: Locale = DEFAULT_LOCALE) => join(locale, 'contact');
export const privacyPath = (locale: Locale = DEFAULT_LOCALE) => join(locale, 'privacy');
export const termsPath = (locale: Locale = DEFAULT_LOCALE) => join(locale, 'terms');
export const notFoundPath = (locale: Locale = DEFAULT_LOCALE) => join(locale, '404');
export const serverErrorPath = (locale: Locale = DEFAULT_LOCALE) => join(locale, '500');

/**
 * The category segment of an entry's canonical URL.
 *
 * An entry may sit in several categories but has exactly one address, and it is
 * always the first — see the note on `categories` in `content.config.ts`.
 */
export const primaryCategory = (entry: Entry): CategoryId => entry.data.categories[0];

export const primaryCategorySlug = (entry: Entry) =>
  CATEGORY_BY_ID.get(primaryCategory(entry))!.urlSlug;

/** Split a namespaced entry id (`mexican/chido`) into its two halves. */
export function splitEntryId(id: string): [countryId: string, termSlug: string] {
  const i = id.indexOf('/');
  return [id.slice(0, i), id.slice(i + 1)];
}

/** Resolve an entry to its canonical URL, given a country lookup by country id. */
export function entryUrl(
  entry: Entry,
  countries: Map<string, Country>,
  locale: Locale = DEFAULT_LOCALE,
): string {
  const [countryId, termSlug] = splitEntryId(entry.id);
  const country = countries.get(countryId);
  if (!country) throw new Error(`Unknown country "${countryId}" in entry id "${entry.id}"`);
  return entryPath(country.data.urlSlug, primaryCategorySlug(entry), termSlug, locale);
}

export function countriesById(countries: Country[]): Map<string, Country> {
  return new Map(countries.map((c) => [c.id, c]));
}

/**
 * The bucket an entry falls into on an A–Z index.
 *
 * Sorts on the romanization where there is one, so a Cyrillic or Japanese term
 * files under the letter a reader would look for it under rather than all
 * collapsing into `#`.
 */
export function alphaKey(entry: { data: { term: string; romanization?: string } }): string {
  const first = (entry.data.romanization ?? entry.data.term)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/^[^\p{L}\p{N}]+/u, '')
    .charAt(0)
    .toUpperCase();
  return /[A-Z]/.test(first) ? first : '#';
}

export const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

/** Sort terms the way a dictionary would: accent-, case- and script-insensitive. */
export const byTerm = (
  a: { data: { term: string; romanization?: string } },
  b: { data: { term: string; romanization?: string } },
) =>
  (a.data.romanization ?? a.data.term).localeCompare(b.data.romanization ?? b.data.term, 'en', {
    sensitivity: 'base',
  });
