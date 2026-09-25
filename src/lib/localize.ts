import type { Entry, Country } from './urls';
import { DEFAULT_LOCALE, type Locale } from '../data/locales';

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
 * drop a JSON file in `src/data/i18n/<locale>/entries/`, and the pages, the
 * alternates and the internal links appear on the next build.
 *
 * The files are discovered with `import.meta.glob`, eagerly, rather than listed
 * as ~150 import statements. That is what makes "purely additive" literally
 * true: nine locales × sixteen countries is past the point where a hand-kept
 * import list stays correct, and a forgotten line there fails silently as a
 * locale quietly missing a country rather than as a build error.
 */

// ---------------------------------------------------------------- countries

interface CountryOverride {
  name: string;
  adjective: string;
  languageName: string;
  intro: string;
  metaDescription: string;
}

/** `src/data/i18n/<locale>/countries.json` → `{ [countryId]: override }`. */
const COUNTRY_FILES = import.meta.glob<Record<string, CountryOverride>>(
  '../data/i18n/*/countries.json',
  { eager: true, import: 'default' },
);

const COUNTRY_OVERRIDES = Object.fromEntries(
  Object.entries(COUNTRY_FILES).map(([path, mod]) => [localeOf(path), mod]),
) as Record<Locale, Record<string, CountryOverride> | undefined>;

/** `../data/i18n/pt/entries/mexican.json` → `pt`. */
function localeOf(path: string): Locale {
  return path.split('/data/i18n/')[1].split('/')[0] as Locale;
}

/** A country's display strings in `locale`, falling back to the English data. */
export function localizeCountry(country: Country, locale: Locale) {
  const o = COUNTRY_OVERRIDES[locale]?.[country.id];
  const d = country.data;
  return {
    id: country.id,
    urlSlug: d.urlSlug,
    flagEmoji: d.flagEmoji,
    flagCode: d.flagCode,
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

/** `src/data/i18n/<locale>/entries/<countryId>.json` → `{ [slug]: override }`. */
const ENTRY_FILES = import.meta.glob<Record<string, EntryOverride>>(
  '../data/i18n/*/entries/*.json',
  { eager: true, import: 'default' },
);

const ENTRY_OVERRIDES: Record<string, Record<string, Record<string, EntryOverride>>> = {};
for (const [path, mod] of Object.entries(ENTRY_FILES)) {
  const locale = localeOf(path);
  const countryId = path.slice(path.lastIndexOf('/') + 1, -'.json'.length);
  (ENTRY_OVERRIDES[locale] ??= {})[countryId] = mod;
}

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
