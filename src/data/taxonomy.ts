/**
 * Closed vocabularies shared by the content schema and the UI.
 *
 * These are dev-edited sets, so they live as typed constants rather than a
 * content collection: `z.enum` gives the same validation with no per-page
 * `getEntries()` round-trip. Promote `CATEGORIES` to a collection the day a
 * non-developer needs to edit it.
 */

export const CATEGORIES = [
  {
    id: 'approval',
    name: 'Approval & Praise',
    urlSlug: 'approval',
    description:
      'Words for saying something is good, impressive or exactly right. Nearly every language builds a large vocabulary here, and the words turn over fast — yesterday’s compliment is this year’s cringe.',
  },
  {
    id: 'greetings',
    name: 'Greetings & Address',
    urlSlug: 'greetings',
    description:
      'How people open a conversation and what they call each other. These terms carry the most social information of any slang category: one wrong choice marks you as an outsider, or worse, as rude.',
  },
  {
    id: 'insults',
    name: 'Insults & Complaints',
    urlSlug: 'insults',
    description:
      'Terms for fools, annoyances and things gone wrong. Register matters enormously here — several of these words are affectionate between friends and fighting words between strangers.',
  },
  {
    id: 'people',
    name: 'People & Types',
    urlSlug: 'people',
    description:
      'Labels for social types: the show-off, the country cousin, the city sophisticate, the freeloader. These words tell you what a culture notices about its own members.',
  },
  {
    id: 'money',
    name: 'Money & Work',
    urlSlug: 'money',
    description:
      'Slang for cash, cost, employment and effort. Money terms are among the oldest and most durable slang in any language, and often the most regionally specific.',
  },
  {
    id: 'food-drink',
    name: 'Food & Drink',
    urlSlug: 'food-drink',
    description:
      'Informal words for eating, drinking and the state of having done too much of either. Frequently borrowed across borders, and frequently mistranslated.',
  },
  {
    id: 'partying',
    name: 'Going Out & Partying',
    urlSlug: 'partying',
    description:
      'Nights out, drinking, dancing and the aftermath. A category where slang renews itself every few years as each generation renames the same activities.',
  },
  {
    id: 'romance',
    name: 'Romance & Attraction',
    urlSlug: 'romance',
    description:
      'Flirting, dating, attraction and rejection. Rich in euphemism, and the category where a literal translation is most likely to embarrass you.',
  },
  {
    id: 'emotion',
    name: 'Emotion & Reaction',
    urlSlug: 'emotion',
    description:
      'Surprise, exasperation, delight, disbelief. Often interjections rather than nouns — words that do something rather than name something.',
  },
  {
    id: 'discourse',
    name: 'Fillers & Discourse',
    urlSlug: 'discourse',
    description:
      'The small words that hold speech together: hedges, tags, intensifiers and pause-fillers. Almost invisible to native speakers and almost impossible for learners.',
  },
  {
    id: 'everyday',
    name: 'Everyday Objects & Actions',
    urlSlug: 'everyday',
    description:
      'Informal names for ordinary things and ordinary activities — the domestic layer of slang that rarely makes phrasebooks but comes up constantly.',
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id) as unknown as [
  CategoryId,
  ...CategoryId[],
];

export const CATEGORY_BY_ID = new Map(CATEGORIES.map((c) => [c.id, c]));

export const PARTS_OF_SPEECH = [
  'noun',
  'verb',
  'adjective',
  'adverb',
  'interjection',
  'phrase',
  'idiom',
] as const;

/** How formal the term is, and who you can safely say it to. */
export const REGISTERS = [
  'informal',
  'colloquial',
  'vulgar',
  'taboo',
  'dated',
  'regional',
] as const;

export const REGISTER_LABEL: Record<(typeof REGISTERS)[number], string> = {
  informal: 'Informal',
  colloquial: 'Colloquial',
  vulgar: 'Vulgar',
  taboo: 'Taboo',
  dated: 'Dated',
  regional: 'Regional',
};

/** Explicit caution flags. Rendered as a visible notice on the entry page. */
export const USAGE_WARNINGS = [
  'vulgar',
  'offensive',
  'sexual',
  'slur',
  'context-dependent',
] as const;

export const USAGE_WARNING_LABEL: Record<(typeof USAGE_WARNINGS)[number], string> = {
  vulgar: 'Vulgar — avoid in formal or professional settings',
  offensive: 'Can cause offence — understand it, think twice before using it',
  sexual: 'Sexual connotation',
  slur: 'Used as a slur — listed for comprehension only',
  'context-dependent': 'Friendly or hostile depending entirely on who is speaking',
};

/** Region groupings used on the home page country launcher. */
export const REGION_GROUPS = [
  { id: 'anglosphere', name: 'English-Speaking World' },
  { id: 'europe', name: 'Europe' },
  { id: 'latin-america', name: 'Latin America' },
] as const;

export type RegionGroupId = (typeof REGION_GROUPS)[number]['id'];
