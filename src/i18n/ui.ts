/**
 * Every user-facing chrome string on the site, in every locale.
 *
 * Entry *content* is not translated here — that lives beside the entries in
 * `src/data/i18n/<locale>/`, because a missing translation there has to be able
 * to remove a page from the locale entirely. A missing string here is only ever
 * a typo, so the type does the work: `Strings` is inferred from the English
 * dictionary, and every other locale must satisfy it exactly.
 */

import type { Locale } from '../data/locales';

/**
 * Counts are interpolated into prose all over the chrome, and a locale's page
 * count can legitimately be 1 while another's is 8 — the Spanish edition starts
 * with one country. Every count that lands in a sentence goes through here so
 * that "1 países" cannot ship.
 */
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

const en = {
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

export type Strings = typeof en;

const es: Strings = {
  skipToContent: 'Saltar al contenido',
  mainNav: 'Principal',
  countriesNav: 'Países',
  sectionsNav: 'Secciones',
  openMenu: 'Abrir menú',
  breadcrumb: 'Ruta de navegación',
  home: 'Inicio',
  browse: 'Índice A–Z',
  about: 'Quiénes somos',
  search: 'Buscar',
  language: 'Idioma',
  jumpToLetter: 'Ir a una letra',
  termsBeginningWith: (letter: string) => `Términos que empiezan por ${letter}`,

  homeH1: 'La guía global del argot',
  homeLead: (terms: number, countries: number) =>
    `${plural(terms, 'palabra o expresión informal', 'palabras y expresiones informales')} de ${plural(countries, 'país', 'países')}: qué significan, cómo se pronuncian y en qué situaciones sería un error usarlas.`,
  searchPlaceholder: 'Busca una palabra de argot, o un significado…',
  searchPlaceholderCompact: 'Buscar argot…',
  searchLabel: 'Buscar términos de argot',
  searchHint:
    'Los resultados aparecen abajo según escribes. Pulsa Intro para abrir la página de búsqueda.',
  tryTerms: 'Prueba con',
  pickCountry: 'Elige un país',
  pickCountryLead:
    'El argot pertenece a un lugar antes que a un idioma. Empieza por donde se hablan de verdad estas palabras.',
  termsCount: (n: number) => plural(n, 'término', 'términos'),
  popularTopics: 'Temas populares',
  popularTopicsLead:
    'Las páginas que la gente busca de verdad: un país, un tema y todos los términos que tenemos sobre él.',
  oneWordEach: 'Una palabra de cada país',
  oneWordEachLead:
    'Una muestra de cómo es una entrada completa: acepciones, ejemplos reales con traducción y el origen cuando de verdad se conoce.',
  editorialH2: 'Cada entrada está escrita, no generada',
  editorialBody:
    'Un diccionario de argot solo vale algo si te cuenta lo que un traductor automático no puede: si una palabra es cariñosa u hostil, a quién se la puedes decir y si la historia sobre su origen que todo el mundo repite es cierta. Cuando algo está en disputa, lo decimos. Cuando una palabra es un insulto discriminatorio, también lo decimos, y la incluimos igualmente, porque necesitas entenderla cuando la oigas.',
  howWeSource: 'Cómo documentamos las definiciones',

  startHere: 'Empieza por estas',
  startHereLead:
    'Los términos de abajo son los que llevan más detalle de uso: registro, origen y las situaciones en las que se tuercen. Conviene leerlos enteros antes que el resto.',
  byTopic: 'Por tema',
  byTopicLead: (adjective: string) =>
    `Cada página reúne todos los términos ${adjective.toLowerCase()} que tenemos sobre un mismo tema, uno junto a otro.`,
  allTermsAz: (adjective: string) => `Todo el argot ${adjective.toLowerCase()} de la A a la Z`,
  termsWithExamples: (n: number) =>
    `${plural(n, 'término', 'términos')}, cada uno con acepciones y ejemplos reales.`,
  slangFor: (adjective: string, topic: string) => `Argot ${adjective.toLowerCase()} para ${topic}`,

  categoryLead: (n: number, adjective: string, topic: string) =>
    `${plural(n, 'término', 'términos')} del argot ${adjective.toLowerCase()} sobre ${topic}, cada uno con su significado, su pronunciación y un ejemplo de uso.`,
  otherTopicsIn: (adjective: string) => `Otros temas del argot ${adjective.toLowerCase()}`,
  sameTopicElsewhere: (topic: string) => `${topic} en otros países`,
  sameTopicElsewhereLead:
    'El mismo tema en los demás países de este sitio: la forma más rápida de ver lo distinto que dicen una misma cosa cuatro idiomas.',

  aSlangTerm: (languageName: string) => `Un término del argot en ${languageName.toLowerCase()}.`,
  browseAll: (adjective: string) => `Ver todo el argot ${adjective.toLowerCase()}`,
  beforeYouUse: 'Antes de usarla',
  whatItMeans: 'Qué significa',
  literally: 'Literalmente:',
  inUse: 'En uso',
  examplesWithTranslations: 'Ejemplos con traducción',
  note: 'Nota:',
  whereItComesFrom: 'De dónde viene',
  firstAttested: (when: string) => `Primer registro: ${when}`,
  otherForms: 'Otras formas',
  spellingsAndVariants: 'Grafías y variantes:',
  similarTerms: 'Términos similares:',
  romanizedAs: 'Romanización',
  nearbyTerms: 'Términos cercanos',
  previous: 'Anterior',
  next: 'Siguiente',
  relatedTerms: 'Términos relacionados',
  alsoUsedIn: 'También se usa en',
  topics: 'Temas',
  moreTermsLikeThis: (adjective: string) => `Más argot ${adjective.toLowerCase()} como este`,
  reviewedBy: (who: string) => `Revisado por ${who}.`,
  updatedOn: (date: string) => `Actualizado el ${date}.`,

  browseH1: 'Todos los términos, de la A a la Z',
  browseLead: (terms: number, countries: number) =>
    `${plural(terms, 'término del sitio', 'términos del sitio')} en un único índice alfabético, de ${plural(countries, 'país', 'países')}. Se ordenan ignorando los acentos, así que güey va con las ges.`,

  searchH1: 'Buscar',
  searchLead:
    'Busca por término o por significado: escribir “borracho” encuentra las palabras para eso en todos los idiomas del sitio.',
  startTyping: 'Empieza a escribir para ver resultados.',
  resultCount: (n: number) => `${n} resultado${n === 1 ? '' : 's'}`,
  noMatches: (q: string) => `No hay nada que coincida con «${q}».`,
  noMatchesTryBrowse: 'Prueba con una palabra más corta, o consulta el índice A–Z.',

  notFoundKicker: '404',
  notFoundH1: 'Aquí no hay esa palabra',
  notFoundBody:
    'Esta página no existe: puede que el término todavía no esté en el diccionario, o que el enlace esté desactualizado. Buscar suele ser más rápido que adivinar la URL.',
  orStartFromCountry: 'O empieza por un país',

  footerTagline: 'La guía global del argot y las expresiones informales',
  byCountry: 'Por país',
  thisSite: 'Este sitio',
  footerNote:
    'Las definiciones las escriben y revisan personas. Cuando un origen está en disputa, lo decimos.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `argot ${adjective.toLowerCase()}`,

};

const DICTIONARIES: Record<Locale, Strings> = { en, es };

export const t = (locale: Locale): Strings => DICTIONARIES[locale];
