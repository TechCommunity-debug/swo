import type { LocalizedCategory } from '../../data/taxonomy';
import type { LocalizedCountry } from '../../lib/localize';

export interface Seo {
  title: string;
  description: string;
}

/** The term as it heads a title: "ヤバい (yabai)" where there is a romanization. */
export interface EntryHead {
  term: string;
  romanization?: string;
  pronunciation?: { respelling?: string };
}

/**
 * Every page title and meta description template, for one locale.
 *
 * Titles are the one place where a loose translation is actively harmful: the
 * title has to be the phrase people type. So each locale writes its own
 * templates rather than filling slots in an English sentence shape — "Mexican
 * Slang for People" and "Argot mexicano para personas" are not the same
 * sentence with the words swapped.
 */
export interface SeoStrings {
  tagline: string;
  home: (countries: string[]) => Seo;
  country: (country: LocalizedCountry, count: number) => Seo;
  countryCategory: (
    country: LocalizedCountry,
    category: LocalizedCategory,
    count: number,
  ) => Seo;
  entry: (entry: EntryHead, firstDefinition: string, country: LocalizedCountry) => Seo;
  browse: (count: number, countries: number) => Seo;
  search: Seo;
  notFound: Seo;
}
