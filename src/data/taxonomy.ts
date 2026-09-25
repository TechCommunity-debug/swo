/**
 * Closed vocabularies shared by the content schema and the UI.
 *
 * These are dev-edited sets, so they live as typed constants rather than a
 * content collection: `z.enum` gives the same validation with no per-page
 * `getEntries()` round-trip. Promote `CATEGORIES` to a collection the day a
 * non-developer needs to edit it.
 *
 * Categories are *not* a top-level section of the site. They only ever appear
 * nested under a country — `/mexican-slang/people/` — because "Mexican slang
 * for people" is a search someone actually makes and "people slang" is not.
 * `topic` is the noun phrase that slots into that heading.
 *
 * Only the *ids and slugs* live here. Every display string — category names,
 * part-of-speech labels, register labels, usage warnings, region groups — lives
 * in `src/i18n/taxonomy/<locale>.ts`, one file per locale, because there are
 * nine of them and the English copy is not more privileged than the rest.
 */

import type { Locale } from './locales';
import { TAXONOMY } from '../i18n/taxonomy';

export const CATEGORIES = [
  { id: 'approval', urlSlug: 'approval' },
  { id: 'greetings', urlSlug: 'greetings' },
  { id: 'insults', urlSlug: 'insults' },
  { id: 'people', urlSlug: 'people' },
  { id: 'money', urlSlug: 'money' },
  { id: 'food-drink', urlSlug: 'food-drink' },
  { id: 'partying', urlSlug: 'partying' },
  { id: 'romance', urlSlug: 'romance' },
  { id: 'emotion', urlSlug: 'emotion' },
  { id: 'discourse', urlSlug: 'discourse' },
  { id: 'everyday', urlSlug: 'everyday' },
] as const;

export type Category = (typeof CATEGORIES)[number];
export type CategoryId = Category['id'];

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id) as unknown as [
  CategoryId,
  ...CategoryId[],
];

export const CATEGORY_BY_ID = new Map(CATEGORIES.map((c) => [c.id, c]));
export const CATEGORY_BY_SLUG = new Map(CATEGORIES.map((c) => [c.urlSlug, c]));

/** The name, topic phrase and description in the requested locale. */
export function localizeCategory(category: Category, locale: Locale) {
  const t = TAXONOMY[locale].categories[category.id];
  return {
    id: category.id,
    urlSlug: category.urlSlug,
    name: t.name,
    topic: t.topic,
    description: t.description,
  };
}

export type LocalizedCategory = ReturnType<typeof localizeCategory>;

export const PARTS_OF_SPEECH = [
  'noun',
  'verb',
  'adjective',
  'adverb',
  'interjection',
  'phrase',
  'idiom',
] as const;

export type PartOfSpeech = (typeof PARTS_OF_SPEECH)[number];

export const PART_OF_SPEECH_LABEL = (locale: Locale, pos: PartOfSpeech) =>
  TAXONOMY[locale].partOfSpeech[pos];

/** How formal the term is, and who you can safely say it to. */
export const REGISTERS = [
  'informal',
  'colloquial',
  'vulgar',
  'taboo',
  'dated',
  'regional',
] as const;

export type Register = (typeof REGISTERS)[number];

export const REGISTER_LABEL = (locale: Locale, register: Register) =>
  TAXONOMY[locale].register[register];

/** Explicit caution flags. Rendered as a visible notice on the entry page. */
export const USAGE_WARNINGS = [
  'vulgar',
  'offensive',
  'sexual',
  'slur',
  'context-dependent',
] as const;

export type UsageWarning = (typeof USAGE_WARNINGS)[number];

export const USAGE_WARNING_LABEL = (locale: Locale, warning: UsageWarning) =>
  TAXONOMY[locale].usageWarning[warning];

/** Region groupings used on the home page country launcher. */
export const REGION_GROUPS = [
  { id: 'anglosphere' },
  { id: 'europe' },
  { id: 'latin-america' },
  { id: 'east-asia' },
] as const;

export type RegionGroupId = (typeof REGION_GROUPS)[number]['id'];

export const regionGroupName = (group: { id: RegionGroupId }, locale: Locale) =>
  TAXONOMY[locale].regionGroup[group.id];
