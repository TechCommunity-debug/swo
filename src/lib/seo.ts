/**
 * Every page title and meta description template on the site, in every locale.
 *
 * Keeping them behind one interface rather than inline in each page is what
 * stops the titles from drifting into eight slightly different shapes — and,
 * now that the same page exists in nine languages, what stops a locale's titles
 * from being a looser translation of whatever the English one happened to say
 * that week.
 *
 * The templates themselves live one file per locale in `src/i18n/seo/`; this
 * module is the dispatch layer the pages import.
 */

import type { Locale } from '../data/locales';
import type { LocalizedCategory } from '../data/taxonomy';
import type { LocalizedCountry } from './localize';
import type { EntryHead, Seo, SeoStrings } from '../i18n/seo/types';
import { en } from '../i18n/seo/en';
import { es } from '../i18n/seo/es';
import { pt } from '../i18n/seo/pt';
import { fr } from '../i18n/seo/fr';
import { de } from '../i18n/seo/de';
import { it } from '../i18n/seo/it';
import { ru } from '../i18n/seo/ru';
import { ja } from '../i18n/seo/ja';
import { ko } from '../i18n/seo/ko';

export { SITE_NAME, SITE_URL } from '../i18n/seo/helpers';
export type { Seo };

const SEO: Record<Locale, SeoStrings> = { en, es, pt, fr, de, it, ru, ja, ko };

export const SITE_TAGLINE = Object.fromEntries(
  Object.entries(SEO).map(([code, s]) => [code, s.tagline]),
) as Record<Locale, string>;

export const homeSeo = (locale: Locale, countries: string[]): Seo => SEO[locale].home(countries);

export const countrySeo = (country: LocalizedCountry, count: number, locale: Locale): Seo =>
  SEO[locale].country(country, count);

/**
 * The long-tail workhorse. "Mexican Slang for People" is a query; "People" is
 * not, which is why categories no longer have a page of their own.
 */
export const countryCategorySeo = (
  country: LocalizedCountry,
  category: LocalizedCategory,
  count: number,
  locale: Locale,
): Seo => SEO[locale].countryCategory(country, category, count);

/**
 * Entry titles lead with the term and, for a non-Latin script, its
 * romanization — because "ヤバい (yabai) meaning" is what gets typed, and a
 * title in a script the searcher cannot type matches nothing.
 */
export const entrySeo = (
  entry: EntryHead,
  firstDefinition: string,
  country: LocalizedCountry,
  locale: Locale,
): Seo => SEO[locale].entry(entry, firstDefinition, country);

export const browseSeo = (count: number, countries: number, locale: Locale): Seo =>
  SEO[locale].browse(count, countries);

export const searchSeo = (locale: Locale): Seo => SEO[locale].search;

export const notFoundSeo = (locale: Locale): Seo => SEO[locale].notFound;

export const serverErrorSeo = (locale: Locale): Seo => SEO[locale].serverError;

export const aboutSeo = (
  locale: Locale,
  countriesCount: number,
  languagesCount: number,
): Seo => SEO[locale].about(countriesCount, languagesCount);
