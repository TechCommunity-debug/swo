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
    /** `og:locale` wants an underscore form, and it is not derivable. */
    ogLocale: 'en_US',
    /** Tag passed to `toLocaleDateString` for the "Updated" line. */
    dateLocale: 'en-GB',
    /**
     * Flags shown in the language switcher, as lowercase ISO 3166-1 alpha-2
     * codes (SVGs at `public/flags/<code>.svg`). A language spoken across
     * several of the site's countries gets its two best-known flags plus
     * `moreCount`, the number of additional country pages in that language
     * left unrepresented — English also covers `australian`, `canadian` and
     * `irish` slang, beyond the US and UK shown here.
     */
    flagCodes: ['us', 'gb'],
    moreCount: 3,
  },
  {
    code: 'es',
    pathPrefix: '/es',
    hreflang: 'es',
    endonym: 'Español',
    dir: 'ltr',
    ogLocale: 'es_ES',
    dateLocale: 'es-ES',
    /** Also covers `colombian`, `cuban` and `dominican` slang. */
    flagCodes: ['es', 'mx'],
    moreCount: 3,
  },
  {
    code: 'pt',
    pathPrefix: '/pt',
    hreflang: 'pt',
    endonym: 'Português',
    dir: 'ltr',
    ogLocale: 'pt_BR',
    dateLocale: 'pt-BR',
    /** No Portugal-specific content on the site, so Brazil alone represents it. */
    flagCodes: ['br'],
    moreCount: 0,
  },
  {
    code: 'fr',
    pathPrefix: '/fr',
    hreflang: 'fr',
    endonym: 'Français',
    dir: 'ltr',
    ogLocale: 'fr_FR',
    dateLocale: 'fr-FR',
    flagCodes: ['fr'],
    moreCount: 0,
  },
  {
    code: 'de',
    pathPrefix: '/de',
    hreflang: 'de',
    endonym: 'Deutsch',
    dir: 'ltr',
    ogLocale: 'de_DE',
    dateLocale: 'de-DE',
    flagCodes: ['de'],
    moreCount: 0,
  },
  {
    code: 'it',
    pathPrefix: '/it',
    hreflang: 'it',
    endonym: 'Italiano',
    dir: 'ltr',
    ogLocale: 'it_IT',
    dateLocale: 'it-IT',
    flagCodes: ['it'],
    moreCount: 0,
  },
  {
    code: 'ru',
    pathPrefix: '/ru',
    hreflang: 'ru',
    endonym: 'Русский',
    dir: 'ltr',
    ogLocale: 'ru_RU',
    dateLocale: 'ru-RU',
    flagCodes: ['ru'],
    moreCount: 0,
  },
  {
    code: 'ja',
    pathPrefix: '/ja',
    hreflang: 'ja',
    endonym: '日本語',
    dir: 'ltr',
    ogLocale: 'ja_JP',
    dateLocale: 'ja-JP',
    flagCodes: ['jp'],
    moreCount: 0,
  },
  {
    code: 'ko',
    pathPrefix: '/ko',
    hreflang: 'ko',
    endonym: '한국어',
    dir: 'ltr',
    ogLocale: 'ko_KR',
    dateLocale: 'ko-KR',
    flagCodes: ['kr'],
    moreCount: 0,
  },
] as const;

export type Locale = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: Locale = 'en';

/** Every locale but the root one — the set that has translation files. */
export type TranslatedLocale = Exclude<Locale, 'en'>;

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
