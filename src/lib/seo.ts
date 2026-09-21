/**
 * Every page title and meta description template on the site, in every locale.
 *
 * Keeping them here rather than inline in each page is what stops the titles
 * from drifting into eight slightly different shapes — and, now that the same
 * page exists in two languages, what stops the Spanish titles from being a
 * looser translation of whatever the English one happened to say that week.
 *
 * The country × category titles are deliberately literal: "Mexican Slang for
 * People" is the phrase people type, so it is the phrase in the <title>.
 */

import type { Locale } from '../data/locales';
import type { LocalizedCategory } from '../data/taxonomy';
import type { LocalizedCountry } from './localize';

export const SITE_NAME = 'Slang Words Online';
export const SITE_URL = 'https://slangwordsonline.com';

export const SITE_TAGLINE: Record<Locale, string> = {
  en: 'The Global Guide to Slang & Informal Expressions',
  es: 'La guía global del argot y las expresiones informales',
};

type Seo = { title: string; description: string };

/** Capitalise for a title without touching terms that are deliberately cased. */
const titleCase = (term: string) => term.charAt(0).toLocaleUpperCase() + term.slice(1);

function truncate(text: string, max = 158) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

// --------------------------------------------------------------------- home

export const homeSeo = (locale: Locale, countries: string[]): Seo =>
  locale === 'en'
    ? {
        title: `${SITE_NAME} — ${SITE_TAGLINE.en}`,
        description: truncate(
          `A global slang dictionary covering ${countries.join(', ')} slang. Real definitions, pronunciation and example sentences for every entry.`,
        ),
      }
    : {
        title: `${SITE_NAME} — ${SITE_TAGLINE.es}`,
        description: truncate(
          'Diccionario de argot en español: significados reales, pronunciación y frases de ejemplo para cada término, empezando por el argot mexicano.',
        ),
      };

// ------------------------------------------------------------------ country

export const countrySeo = (country: LocalizedCountry, count: number, locale: Locale): Seo =>
  locale === 'en'
    ? {
        title:
          country.metaTitle ??
          `${country.adjective} Slang: ${count} Words & Phrases Explained | ${SITE_NAME}`,
        description: country.metaDescription,
      }
    : {
        title: `Argot ${country.adjective}: ${count} palabras y expresiones explicadas | ${SITE_NAME}`,
        description: country.metaDescription,
      };

// -------------------------------------------------------- country × category

/**
 * The long-tail workhorse. "Mexican Slang for People" is a query; "People" is
 * not, which is why categories no longer have a page of their own.
 */
export const countryCategorySeo = (
  country: LocalizedCountry,
  category: LocalizedCategory,
  count: number,
  locale: Locale,
): Seo =>
  locale === 'en'
    ? {
        title: `${country.adjective} Slang for ${category.topic}: ${count} Terms | ${SITE_NAME}`,
        description: truncate(
          `${count} ${country.adjective} slang words for ${category.topic.toLowerCase()} — what each one means, how it is pronounced and how it is actually used in a sentence.`,
        ),
      }
    : {
        title: `Argot ${country.adjective} para ${category.topic}: ${count} términos | ${SITE_NAME}`,
        description: truncate(
          `${count} palabras del argot ${country.adjective} sobre ${category.topic}: qué significa cada una, cómo se pronuncia y cómo se usa de verdad en una frase.`,
        ),
      };

// -------------------------------------------------------------------- entry

/**
 * Entry titles lead with the term and, for a non-Latin script, its
 * romanization — because "ヤバい (yabai) meaning" is what gets typed, and a
 * title in a script the searcher cannot type matches nothing.
 */
export const entrySeo = (
  entry: {
    term: string;
    romanization?: string;
    pronunciation?: { respelling?: string };
  },
  firstDefinition: string,
  country: LocalizedCountry,
  locale: Locale,
): Seo => {
  const head = entry.romanization ? `${entry.term} (${entry.romanization})` : entry.term;
  if (locale === 'en') {
    const parts = ['Meaning'];
    if (entry.pronunciation?.respelling) parts.push('Pronunciation');
    parts.push('Examples');
    return {
      title: `${titleCase(head)} — ${parts.join(', ')} | ${country.adjective} Slang`,
      description: truncate(
        `${titleCase(head)} in ${country.adjective} slang: ${firstDefinition}`,
      ),
    };
  }
  const parts = ['Significado'];
  if (entry.pronunciation?.respelling) parts.push('pronunciación');
  parts.push('ejemplos');
  return {
    title: `${titleCase(head)} — ${parts.join(', ')} | Argot ${country.adjective}`,
    description: truncate(
      `${titleCase(head)} en el argot ${country.adjective}: ${firstDefinition}`,
    ),
  };
};

// ---------------------------------------------------------------- utilities

export const browseSeo = (count: number, countries: number, locale: Locale): Seo =>
  locale === 'en'
    ? {
        title: `Browse All Slang Terms A–Z | ${SITE_NAME}`,
        description: `An alphabetical index of all ${count} slang terms on ${SITE_NAME}, from ${countries} countries.`,
      }
    : {
        title: `Índice A–Z de todo el argot | ${SITE_NAME}`,
        description: `Índice alfabético de los ${count} términos de argot de ${SITE_NAME}, de ${countries} países.`,
      };

export const searchSeo = (locale: Locale): Seo =>
  locale === 'en'
    ? {
        title: `Search Slang Terms | ${SITE_NAME}`,
        description: 'Search the full Slang Words Online dictionary by term, meaning or country.',
      }
    : {
        title: `Buscar términos de argot | ${SITE_NAME}`,
        description:
          'Busca en todo el diccionario de Slang Words Online por término, significado o país.',
      };

export const aboutSeo = (locale: Locale): Seo =>
  locale === 'en'
    ? {
        title: `How We Source and Review Definitions | ${SITE_NAME}`,
        description:
          'Our editorial approach: where these definitions come from, how register and usage warnings are decided, and what we do when the origin of a word is genuinely unknown.',
      }
    : {
        title: `Cómo documentamos y revisamos las definiciones | ${SITE_NAME}`,
        description:
          'Nuestro método editorial: de dónde salen estas definiciones, cómo se decide el registro y los avisos de uso, y qué hacemos cuando el origen de una palabra se desconoce de verdad.',
      };

export const notFoundSeo = (locale: Locale): Seo =>
  locale === 'en'
    ? {
        title: `Page not found | ${SITE_NAME}`,
        description: "That page doesn't exist. Search the dictionary or pick a country to browse.",
      }
    : {
        title: `Página no encontrada | ${SITE_NAME}`,
        description: 'Esta página no existe. Busca en el diccionario o elige un país.',
      };
