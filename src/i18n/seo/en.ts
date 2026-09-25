import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

export const en: SeoStrings = {
  tagline: 'The Global Guide to Slang & Informal Expressions',

  home: (countries) => ({
    title: `${SITE_NAME} — The Global Guide to Slang & Informal Expressions`,
    description: truncate(
      `A global slang dictionary covering ${countries.join(', ')} slang. Real definitions, pronunciation and example sentences for every entry.`,
    ),
  }),

  country: (country, count) => ({
    title:
      country.metaTitle ??
      `${country.adjective} Slang: ${count} Words & Phrases Explained | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `${country.adjective} Slang for ${category.topic}: ${count} Terms | ${SITE_NAME}`,
    description: truncate(
      `${count} ${country.adjective} slang words for ${category.topic.toLowerCase()} — what each one means, how it is pronounced and how it is actually used in a sentence.`,
    ),
  }),

  entry: (entry, firstDefinition, country) => {
    const parts = ['Meaning'];
    if (entry.pronunciation?.respelling) parts.push('Pronunciation');
    parts.push('Examples');
    return {
      title: `${titleCase(head(entry))} — ${parts.join(', ')} | ${country.adjective} Slang`,
      description: truncate(
        `${titleCase(head(entry))} in ${country.adjective} slang: ${firstDefinition}`,
      ),
    };
  },

  browse: (count, countries) => ({
    title: `Browse All Slang Terms A–Z | ${SITE_NAME}`,
    description: `An alphabetical index of all ${count} slang terms on ${SITE_NAME}, from ${countries} countries.`,
  }),

  search: {
    title: `Search Slang Terms | ${SITE_NAME}`,
    description: 'Search the full Slang Words Online dictionary by term, meaning or country.',
  },

  about: {
    title: `How We Source and Review Definitions | ${SITE_NAME}`,
    description:
      'Our editorial approach: where these definitions come from, how register and usage warnings are decided, and what we do when the origin of a word is genuinely unknown.',
  },

  notFound: {
    title: `Page not found | ${SITE_NAME}`,
    description: "That page doesn't exist. Search the dictionary or pick a country to browse.",
  },
};
