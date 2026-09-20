import type { CollectionEntry } from 'astro:content';

/**
 * The only place site paths are constructed.
 *
 * The `-slang` suffix lives exclusively in `countries.json.urlSlug`. Never
 * build it by concatenating onto a country id — the first section that isn't a
 * country (`internet-slang`, `nigerian-pidgin`) would break every link.
 */

export type Country = CollectionEntry<'countries'>;
export type Entry = CollectionEntry<'entries'>;

export const countryPath = (country: Country) => `/${country.data.urlSlug}/`;

export const entryPath = (urlSlug: string, termSlug: string) => `/${urlSlug}/${termSlug}/`;

export const categoryPath = (categorySlug: string) => `/categories/${categorySlug}/`;

/** Split a namespaced entry id (`mexican/chido`) into its two halves. */
export function splitEntryId(id: string): [countryId: string, termSlug: string] {
  const i = id.indexOf('/');
  return [id.slice(0, i), id.slice(i + 1)];
}

/** Resolve an entry id to its URL, given a country lookup keyed by country id. */
export function entryPathFromId(id: string, countriesById: Map<string, Country>): string {
  const [countryId, termSlug] = splitEntryId(id);
  const country = countriesById.get(countryId);
  if (!country) throw new Error(`Unknown country "${countryId}" in entry id "${id}"`);
  return entryPath(country.data.urlSlug, termSlug);
}

export function countriesById(countries: Country[]): Map<string, Country> {
  return new Map(countries.map((c) => [c.id, c]));
}

/** The bucket an entry falls into on an A–Z index. Non-letters group under #. */
export function alphaKey(term: string): string {
  const first = term
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/^[^\p{L}\p{N}]+/u, '')
    .charAt(0)
    .toUpperCase();
  return /[A-Z]/.test(first) ? first : '#';
}

export const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

/** Sort terms the way a dictionary would: accent- and case-insensitive. */
export const byTerm = (a: { data: { term: string } }, b: { data: { term: string } }) =>
  a.data.term.localeCompare(b.data.term, 'en', { sensitivity: 'base' });
