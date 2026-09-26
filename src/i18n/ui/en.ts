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
  search: 'Search',
  language: 'Language',
  jumpToLetter: 'Jump to letter',
  termsBeginningWith: (letter: string) => `Terms beginning with ${letter}`,

  // ------------------------------------------------------------------ home
  homeH1: 'The global guide to slang words',
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
  editorialH2: "Context you won't find in a dictionary app",
  editorialBody:
    'A slang dictionary is only worth anything if it tells you the things a translation app cannot: whether a word is affectionate or hostile, who you can say it to, and whether the origin story everyone repeats is actually true. Where something is disputed, we say it is disputed. Where a word is a slur, we say that too, and list it anyway — because you still need to understand it when you hear it.',

  // ------------------------------------------- home — SEO about section
  aboutH2: 'About Slang Words Online — Your Global Slang Words Hub',
  aboutP1:
    'Every language has two lives: the version that shows up in textbooks, and the version that actually gets spoken on the street, in group chats, and across bar counters. Slang Words Online exists for the second one. We built this site as a slang words hub for anyone who has ever overheard a word in conversation, in a song lyric, or in a subtitle and thought: what on earth does that mean? Whether you are trying to decode British slang picked up from a London pub, American slang that keeps showing up on social media, or Australian slang your co-worker drops without a second thought — the answer is here, explained with the kind of context a translation app will never give you.',
  aboutP2:
    'Our slang words library currently covers sixteen countries and eleven topic categories. You can browse British Slang and American Slang alongside Australian Slang, Canadian Slang, and Irish Slang — the big branches of the English-speaking world. Then there are the Romance-language collections: Mexican Slang, Spanish Slang, Italian Slang, French Slang, Colombian Slang, Cuban Slang, and Dominican Slang, each reflecting a distinct dialect with its own rhythm and attitude. We also cover German Slang, Russian Slang, Japanese Slang, and Korean Slang — four vocabularies where the distance from the textbook version is large enough that slang almost functions as a separate register.',
  aboutP3:
    'What makes this collection different from a quick Google translate? Depth, mostly. Every entry includes the definition — often more than one, because slang words rarely mean just one thing — alongside a pronunciation guide that covers how the word actually sounds, not how it ought to sound. We provide worked examples: full sentences in the original language, translated line by line, so you can see the word doing its job in a real context. And we tell you the things that matter most and that dictionaries usually leave out: whether the word is affectionate or hostile, whether it is safe for mixed company, and whether the cute origin story everyone shares on the internet is actually true.',
  aboutP4:
    'The topics are organized the way people actually search. Instead of dumping hundreds of entries on one page, we split them into categories that reflect what slang is for: Slang for Approval & Praise, Slang for Greetings & Address, Slang for Insults & Complaints, Slang for People, Slang for Money & Work, Slang for Food & Drink, Slang for Going Out & Partying, Slang for Romance & Flirting, Slang for Emotion & Reaction, Slang for Filler Words, and Slang for Everyday Things. Each of those lives under a specific country, because the same subject — money, say, or insults — produces completely different vocabulary depending on who is speaking and where.',
  aboutP5:
    'This site is free to use, regularly updated, and available in nine languages so non-English speakers can navigate the whole library in their own language too. Think of Slang Words Online as the slang words library you always wished existed: thorough, honest, and written by people who actually care whether you embarrass yourself at the wrong moment. Dive in — pick a country, pick a topic, or just search for the word you heard.',

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
  updatedOn: (date: string) => `Updated ${date}.`,

  // ---------------------------------------------------------------- browse
  browseH1: 'Every term, A to Z',
  browseLead: (terms: number, countries: number) =>
    `All ${plural(terms, 'term', 'terms')} on the site in one alphabetical index, across ${plural(countries, 'country', 'countries')}. Terms are sorted ignoring accents, so güey sits with the Gs.`,

  // ---------------------------------------------------------------- search
  searchH1: 'Search',
  searchLead:
    'Search by term or by meaning — typing "drunk" will find the words for it in every language on the site.',
  startTyping: 'Start typing to see results.',
  resultCount: (n: number) => `${n} result${n === 1 ? '' : 's'}`,
  noMatches: (q: string) => `Nothing matches "${q}".`,
  noMatchesTryBrowse: 'Try a shorter word, or browse A–Z.',

  // ------------------------------------------------------------------- 404
  notFoundKicker: '404',
  notFoundH1: 'No such word here',
  notFoundBody:
    'That page doesn\u2019t exist \u2014 the term may not be in the dictionary yet, or the link may be out of date. Searching is usually faster than guessing the URL.',
  orStartFromCountry: 'Or start from a country',

  // ---------------------------------------------------------------- footer
  footerTagline: 'The Global Guide to Slang & Informal Expressions',
  byCountry: 'By country',
  thisSite: 'This site',
  footerNote:
    'Definitions are based on available sources. Where an origin is disputed or uncertain, we say so.',
  copyright: (year: number) => `\u00A9 ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective} slang`,

};
