/**
 * The English chrome dictionary — the shape every other locale must satisfy.
 *
 * `Strings` is inferred from this object (see `./types`), so a key added here
 * is a type error in all eight other locales until they add it too. That is the
 * whole enforcement mechanism: there is no runtime fallback to English.
 */

import { plural } from './plural';

export const en = {
  // ----------------------------------------------------------------- chrome
  skipToContent: 'Skip to content',
  mainNav: 'Main',
  countriesNav: 'Countries',
  sectionsNav: 'Sections',
  openMenu: 'Open menu',
  breadcrumb: 'Breadcrumb',
  home: 'Home',
  browse: 'Browse A–Z',
  about: 'About',
  search: 'Search',
  language: 'Language',
  jumpToLetter: 'Jump to letter',
  termsBeginningWith: (letter: string) => `Terms beginning with ${letter}`,

  // ------------------------------------------------------------------ home
  homeH1: 'The global guide to slang',
  homeLead: (terms: number, countries: number) =>
    `${plural(terms, 'informal word and phrase', 'informal words and phrases')} from ${plural(countries, 'country', 'countries')} — what they mean, how to say them, and the situations where using them would be a mistake.`,
  searchPlaceholder: 'Search a slang word, or a meaning…',
  searchPlaceholderCompact: 'Search slang…',
  searchLabel: 'Search slang terms',
  searchHint: 'Results appear below as you type. Press Enter to open the full search page.',
  tryTerms: 'Try',
  pickCountry: 'Pick a country',
  pickCountryLead:
    'Slang belongs to a place before it belongs to a language. Start where the words are actually spoken.',
  termsCount: (n: number) => plural(n, 'term', 'terms'),
  popularTopics: 'Popular topics',
  popularTopicsLead:
    'The pages people actually search for: one country, one subject, every term we have on it.',
  oneWordEach: 'One word from each country',
  oneWordEachLead:
    'A sample of what a full entry looks like — definitions, worked examples with translations, and the origin where it is actually known.',
  editorialH2: 'Every entry is written, not generated',
  editorialBody:
    'A slang dictionary is only worth anything if it tells you the things a translation app cannot: whether a word is affectionate or hostile, who you can say it to, and whether the origin story everyone repeats is actually true. Where something is disputed, we say it is disputed. Where a word is a slur, we say that too, and list it anyway — because you still need to understand it when you hear it.',
  howWeSource: 'How we source definitions',

  // --------------------------------------------------------------- country
  startHere: 'Start with these',
  startHereLead:
    'The terms below carry the most usage detail — register, origin and the situations where they go wrong. They are the ones worth reading in full before the rest.',
  byTopic: 'By topic',
  byTopicLead: (adjective: string) =>
    `Each page below collects every ${adjective} term we have on one subject, side by side.`,
  allTermsAz: (adjective: string) => `All ${adjective} slang A–Z`,
  termsWithExamples: (n: number) =>
    `${plural(n, 'term', 'terms')}, each with definitions and worked examples.`,
  slangFor: (adjective: string, topic: string) => `${adjective} Slang for ${topic}`,

  // ------------------------------------------------ country × category page
  categoryLead: (n: number, adjective: string, topic: string) =>
    `${plural(n, `${adjective} slang term`, `${adjective} slang terms`)} for ${topic.toLowerCase()}, each with its meaning, how it is pronounced and an example of it in use.`,
  otherTopicsIn: (adjective: string) => `Other ${adjective} topics`,
  sameTopicElsewhere: (topic: string) => `${topic} slang elsewhere`,
  sameTopicElsewhereLead:
    'The same subject in the other countries on this site — the quickest way to see how differently four languages say one thing.',

  // ----------------------------------------------------------------- entry
  aSlangTerm: (languageName: string) => `A ${languageName} slang term.`,
  /** The country hub <h1>, e.g. "Mexican Slang". */
  countrySlangHeading: (adjective: string) => `${adjective} Slang`,
  /** The "+2 more senses" line on an entry card. */
  moreSenses: (n: number) => `+${n} more ${n === 1 ? 'sense' : 'senses'}`,
  useWithCare: 'Use with care',
  browseAll: (adjective: string) => `Browse all ${adjective} slang`,
  beforeYouUse: 'Before you use this one',
  whatItMeans: 'What it means',
  literally: 'Literally:',
  inUse: 'In use',
  examplesWithTranslations: 'Examples with translations',
  note: 'Note:',
  whereItComesFrom: 'Where it comes from',
  firstAttested: (when: string) => `First attested: ${when}`,
  otherForms: 'Other forms',
  spellingsAndVariants: 'Spellings and variants:',
  similarTerms: 'Similar terms:',
  romanizedAs: 'Romanised as',
  nearbyTerms: 'Nearby terms',
  previous: 'Previous',
  next: 'Next',
  relatedTerms: 'Related terms',
  alsoUsedIn: 'Also used in',
  topics: 'Topics',
  moreTermsLikeThis: (adjective: string) => `More ${adjective} terms like this`,
  reviewedBy: (who: string) => `Reviewed by ${who}.`,
  updatedOn: (date: string) => `Updated ${date}.`,

  // ---------------------------------------------------------------- browse
  browseH1: 'Every term, A to Z',
  browseLead: (terms: number, countries: number) =>
    `All ${plural(terms, 'term', 'terms')} on the site in one alphabetical index, across ${plural(countries, 'country', 'countries')}. Terms are sorted ignoring accents, so güey sits with the Gs.`,

  // ---------------------------------------------------------------- search
  searchH1: 'Search',
  searchLead:
    'Search by term or by meaning — typing “drunk” will find the words for it in every language on the site.',
  startTyping: 'Start typing to see results.',
  resultCount: (n: number) => `${n} result${n === 1 ? '' : 's'}`,
  noMatches: (q: string) => `Nothing matches “${q}”.`,
  noMatchesTryBrowse: 'Try a shorter word, or browse A–Z.',

  // ------------------------------------------------------------------- 404
  notFoundKicker: '404',
  notFoundH1: 'No such word here',
  notFoundBody:
    'That page doesn’t exist — the term may not be in the dictionary yet, or the link may be out of date. Searching is usually faster than guessing the URL.',
  orStartFromCountry: 'Or start from a country',

  // ---------------------------------------------------------------- footer
  footerTagline: 'The Global Guide to Slang & Informal Expressions',
  byCountry: 'By country',
  thisSite: 'This site',
  footerNote:
    'Definitions are written and reviewed by people. Where an origin is disputed, we say so.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective} slang`,

};
