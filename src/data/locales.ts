/**
 * Site locales.
 *
 * English is the *root* locale: its pages live at `/`, not `/en/`. Every other
 * locale is prefixed (`/es/...`). This is the shape Astro calls
 * `prefixDefaultLocale: false`, and it is the reason `pathPrefix` is `''` for
 * English rather than `/en` — never concatenate `/${code}` to build a path.
 *
 * Country/region stays the primary taxonomy at every locale: the URL segment is
 * `mexican-slang` under both `/` and `/es/`. The locale prefix says what
 * language the *explanation* is written in, not whose slang is being explained.
 */

export const LOCALES = [
  {
    code: 'en',
    /** URL prefix, '' for the root locale. Never derived from `code`. */
    pathPrefix: '',
    /** The `lang` attribute and the hreflang annotation value. */
    hreflang: 'en',
    /** Name in its own language, for the language switcher. */
    endonym: 'English',
    dir: 'ltr',
  },
  {
    code: 'es',
    pathPrefix: '/es',
    hreflang: 'es',
    endonym: 'Español',
    dir: 'ltr',
  },
] as const;

export type Locale = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_CODES = LOCALES.map((l) => l.code) as unknown as [Locale, ...Locale[]];

export const LOCALE_BY_CODE = new Map(LOCALES.map((l) => [l.code, l]));

export const localeConfig = (locale: Locale) => LOCALE_BY_CODE.get(locale)!;

/** `''` for English, `/es` for Spanish. The one place prefixes are produced. */
export const localePrefix = (locale: Locale) => localeConfig(locale).pathPrefix;

/**
 * The locale a pathname belongs to. Used by the header to highlight the current
 * language and by the switcher to swap it.
 */
export function localeFromPath(pathname: string): Locale {
  for (const l of LOCALES) {
    if (l.pathPrefix && (pathname === l.pathPrefix || pathname.startsWith(`${l.pathPrefix}/`))) {
      return l.code;
    }
  }
  return DEFAULT_LOCALE;
}
