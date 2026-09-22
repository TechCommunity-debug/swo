import type { Entry, Country } from './urls';
import { DEFAULT_LOCALE, type Locale } from '../data/locales';
import esCountries from '../data/i18n/es/countries.json';
import esMexican from '../data/i18n/es/entries/mexican.json';
import esAmerican from '../data/i18n/es/entries/american.json';
import esBritish from '../data/i18n/es/entries/british.json';
import esAustralian from '../data/i18n/es/entries/australian.json';
import esCanadian from '../data/i18n/es/entries/canadian.json';
import esFrench from '../data/i18n/es/entries/french.json';
import esItalian from '../data/i18n/es/entries/italian.json';
import esSpanish from '../data/i18n/es/entries/spanish.json';

/**
 * Overlays translated content onto an entry or a country.
 *
 * The rule the whole i18n layer turns on: **a localized page exists only where
 * translated content exists.** There is no fallback to English. A `/es/` page
 * carrying English definitions would be a near-duplicate of its English
 * original, and shipping hreflang between two substantially identical pages is
 * exactly the case Google's canonicalization guidance tells you not to create.
 *
 * So `translatedEntry()` returns `null` when an entry has no translation, and
 * the route builders drop that entry from the locale entirely — no page, no
 * hreflang annotation, no sitemap row. Adding a locale is then purely additive:
 * drop a JSON file in `src/data/i18n/<locale>/entries/`, and the pages,
 * the alternates and the internal links appear on the next build.
 */

// ---------------------------------------------------------------- countries

interface CountryOverride {
  name: string;
  adjective: string;
  languageName: string;
  intro: string;
  metaDescription: string;
}

const COUNTRY_OVERRIDES: Record<Locale, Record<string, CountryOverride>> = {
  en: {},
  es: esCountries,
};

/** A country's display strings in `locale`, falling back to the English data. */
export function localizeCountry(country: Country, locale: Locale) {
  const o = COUNTRY_OVERRIDES[locale]?.[country.id];
  const d = country.data;
  return {
    id: country.id,
    urlSlug: d.urlSlug,
    flagEmoji: d.flagEmoji,
    languageCode: d.languageCode,
    regionGroup: d.regionGroup,
    order: d.order,
    updatedDate: d.updatedDate,
    name: o?.name ?? d.name,
    adjective: o?.adjective ?? d.adjective,
    languageName: o?.languageName ?? d.languageName,
    intro: o?.intro ?? d.intro,
    metaDescription: o?.metaDescription ?? d.metaDescription,
    metaTitle: locale === DEFAULT_LOCALE ? d.metaTitle : undefined,
  };
}

export type LocalizedCountry = ReturnType<typeof localizeCountry>;

// ------------------------------------------------------------------ entries

interface EntryOverride {
  /** Required, and must be the same length as the English `definitions`. */
  definitions: { text: string; note?: string }[];
  /** Sparse, keyed by index into the English `examples`. */
  examples?: Record<string, { translation?: string; context?: string }>;
  literalMeaning?: string;
  origin?: { etymology?: string; firstAttested?: string };
}

const ENTRY_OVERRIDES: Record<Locale, Record<string, Record<string, EntryOverride>>> = {
  en: {},
  es: {
    mexican: esMexican as Record<string, EntryOverride>,
    american: esAmerican as Record<string, EntryOverride>,
    british: esBritish as Record<string, EntryOverride>,
    australian: esAustralian as Record<string, EntryOverride>,
    canadian: esCanadian as Record<string, EntryOverride>,
    french: esFrench as Record<string, EntryOverride>,
    italian: esItalian as Record<string, EntryOverride>,
    spanish: esSpanish as Record<string, EntryOverride>,
  },
};

/** Whether a locale has a full translation of this entry, and therefore a page. */
export function hasTranslation(entry: Entry, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  const [countryId, slug] = entry.id.split('/');
  const o = ENTRY_OVERRIDES[locale]?.[countryId]?.[slug];
  return Boolean(o && o.definitions.length === entry.data.definitions.length);
}

/**
 * The entry's prose in `locale`, or `null` if it isn't translated.
 *
 * Only prose is overlaid. The term itself, its romanization, pronunciation,
 * register, categories and the example sentences in the source language are the
 * same facts in every locale and are read straight off the entry.
 */
export function translatedEntry(entry: Entry, locale: Locale) {
  if (!hasTranslation(entry, locale)) return null;
  const d = entry.data;
  if (locale === DEFAULT_LOCALE) {
    return {
      definitions: d.definitions,
      examples: d.examples,
      literalMeaning: d.literalMeaning,
      origin: d.origin,
    };
  }

  const [countryId, slug] = entry.id.split('/');
  const o = ENTRY_OVERRIDES[locale][countryId][slug];

  return {
    definitions: d.definitions.map((def, i) => ({
      ...def,
      text: o.definitions[i].text,
      note: o.definitions[i].note,
    })),
    examples: d.examples.map((ex, i) => {
      const x = o.examples?.[String(i)];
      return { ...ex, translation: x?.translation ?? ex.translation, context: x?.context };
    }),
    literalMeaning: o.literalMeaning ?? d.literalMeaning,
    origin: d.origin && {
      ...d.origin,
      etymology: o.origin?.etymology ?? d.origin.etymology,
      firstAttested: o.origin?.firstAttested ?? d.origin.firstAttested,
    },
  };
}

export type LocalizedEntryContent = NonNullable<ReturnType<typeof translatedEntry>>;

/**
 * Whether the example sentences need a translation line shown beneath them.
 *
 * On `/es/mexican-slang/...` the examples are already in Spanish and the reader
 * is reading Spanish, so the English gloss underneath is noise. Compare the
 * base language, not the full tag: `es-MX` content serves an `es` reader.
 */
export const needsGloss = (languageCode: string, locale: Locale) =>
  languageCode.split('-')[0] !== locale;
