import { entryUrl } from './urls';
import { countriesFor, entriesFor, loadSite } from './site';
import { localizeCountry, translatedEntry } from './localize';
import type { Locale } from '../data/locales';

/**
 * The client-side search index, one per locale.
 *
 * Deliberately a strict minimal projection stored as a tuple array rather than
 * objects: term, country adjective, flag, href, one-line gloss, romanization.
 * Keeping it this narrow is what makes swapping in per-country shards or
 * Pagefind later a two-file change — as soon as the result card renders a field
 * that only exists in a fat index, that door shuts.
 *
 * Splitting it per locale rather than tagging rows with a language is what
 * keeps a Spanish reader's search from returning pages they cannot read.
 */
export type SearchRow = [
  term: string,
  countryAdjective: string,
  flag: string,
  href: string,
  gloss: string,
  romanization?: string,
];

export async function buildSearchIndex(locale: Locale): Promise<SearchRow[]> {
  const site = await loadSite();

  const rows = countriesFor(site, locale).flatMap((country) => {
    const c = localizeCountry(country, locale);
    return entriesFor(site, country.id, locale).map((entry): SearchRow => {
      const gloss = translatedEntry(entry, locale)!.definitions[0].text;
      const row: SearchRow = [
        entry.data.term,
        c.adjective,
        c.flagEmoji,
        entryUrl(entry, site.byId, locale),
        gloss.length > 110 ? `${gloss.slice(0, 109).trimEnd()}…` : gloss,
      ];
      // Only carried when there is one — an undefined tail element would add a
      // null to every row in the JSON for the sake of eight entries.
      if (entry.data.romanization) row[5] = entry.data.romanization;
      return row;
    });
  });

  return rows.sort((a, b) =>
    (a[5] ?? a[0]).localeCompare(b[5] ?? b[0], 'en', { sensitivity: 'base' }),
  );
}
