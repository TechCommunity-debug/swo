import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

export const en: SeoStrings = {
  tagline: 'Your Slang Words Hub — British, American, Australian & Global Slang Library',

  home: (countries) => ({
    title: `Slang Words Dictionary – Meanings, Examples & Slang by Country`,
    description: truncate(
      `Discover slang words and phrases from around the world. Find meanings, examples, pronunciation, origins and slang by country with our online slang dictionary.`,
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
    title: `Browse All Slang Words A–Z | ${SITE_NAME}`,
    description: `An alphabetical index of all ${count} slang terms on ${SITE_NAME}, from ${countries} countries. Your complete slang words library.`,
  }),

  search: {
    title: `Search Slang Words | ${SITE_NAME}`,
    description: 'Search the full Slang Words Online dictionary by term, meaning or country — the fastest way to find any slang word.',
  },

  notFound: {
    title: `Page not found | ${SITE_NAME}`,
    description: "That page doesn't exist. Search the dictionary or pick a country to browse.",
  },
  serverError: {
    title: `500 — Server Error | ${SITE_NAME}`,
    description:
      'An unexpected server error occurred on Slang Words Online. Please refresh the page or return to the dictionary homepage.',
  },
  about: (countriesCount, languagesCount) => ({
    title: `About Us — Global Slang & Colloquialisms Guide | ${SITE_NAME}`,
    description: `Learn about Slang Words Online, the global guide to living slang, colloquial speech, idioms, and informal expressions across ${countriesCount} countries and ${languagesCount} languages.`,
  }),
  contact: (email) => ({
    title: `Contact Us — Questions, Feedback & Submissions | ${SITE_NAME}`,
    description: `Contact the Slang Words Online team. Send slang submissions, dialect corrections, cultural feedback, or partnership inquiries to ${email}.`,
  }),
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: 'Read the Privacy Policy for Slang Words Online. Learn how we handle data, cookies, and visitor privacy across our global slang dictionary.',
  },
  terms: {
    title: `Terms & Conditions | ${SITE_NAME}`,
    description: 'Read the Terms and Conditions for using Slang Words Online. Understand user guidelines, linguistic disclaimers, educational fair use, and intellectual property terms.',
  },
};
