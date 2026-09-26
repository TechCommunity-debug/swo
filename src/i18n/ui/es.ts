import type { Strings } from './types';
import { plural } from './plural';

export const es: Strings = {
  skipToContent: 'Saltar al contenido',
  mainNav: 'Principal',
  countriesNav: 'Países',
  sectionsNav: 'Secciones',
  openMenu: 'Abrir menú',
  breadcrumb: 'Ruta de navegación',
  home: 'Inicio',
  browse: 'Índice A–Z',
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
  editorialH2: 'Contexto que no encontrarás en una app de diccionario',
  editorialBody:
    'Un diccionario de argot solo vale algo si te cuenta lo que un traductor automático no puede: si una palabra es cariñosa u hostil, a quién se la puedes decir y si la historia sobre su origen que todo el mundo repite es cierta. Cuando algo está en disputa, lo decimos. Cuando una palabra es un insulto discriminatorio, también lo decimos, y la incluimos igualmente, porque necesitas entenderla cuando la oigas.',
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
  countrySlangHeading: (adjective: string) => `Argot ${adjective}`,
  moreSenses: (n: number) => `+${n} ${n === 1 ? 'acepción más' : 'acepciones más'}`,
  useWithCare: 'Úsala con cuidado',
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
    'Las definiciones se basan en las fuentes disponibles. Cuando un origen está en disputa o es incierto, lo decimos.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `argot ${adjective.toLowerCase()}`,

  aboutUs: 'Sobre nosotros',
  contactUs: 'Contacto',
  privacyPolicy: 'Política de privacidad',
  termsConditions: 'Términos y condiciones',
};
