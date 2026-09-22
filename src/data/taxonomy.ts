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
 */

import type { Locale } from './locales';

export const CATEGORIES = [
  {
    id: 'approval',
    urlSlug: 'approval',
    name: 'Approval & Praise',
    /** Slots into "{Adjective} Slang for {topic}". Keep it a bare noun phrase. */
    topic: 'Approval & Praise',
    description:
      'Words for saying something is good, impressive or exactly right. Nearly every language builds a large vocabulary here, and the words turn over fast — yesterday’s compliment is this year’s cringe.',
    es: {
      name: 'Aprobación y elogio',
      topic: 'aprobación y elogio',
      description:
        'Palabras para decir que algo está bien, que impresiona o que da justo en el clavo. Casi todos los idiomas acumulan mucho vocabulario aquí, y se renueva rápido: el halago de ayer da vergüenza hoy.',
    },
  },
  {
    id: 'greetings',
    urlSlug: 'greetings',
    name: 'Greetings & Address',
    topic: 'Greetings & Address',
    description:
      'How people open a conversation and what they call each other. These terms carry the most social information of any slang category: one wrong choice marks you as an outsider, or worse, as rude.',
    es: {
      name: 'Saludos y tratamiento',
      topic: 'saludos y tratamiento',
      description:
        'Cómo se abre una conversación y cómo se llaman entre sí los hablantes. Son los términos con más carga social de todo el argot: una sola elección equivocada te delata como extranjero o, peor, como maleducado.',
    },
  },
  {
    id: 'insults',
    urlSlug: 'insults',
    name: 'Insults & Complaints',
    topic: 'Insults & Complaints',
    description:
      'Terms for fools, annoyances and things gone wrong. Register matters enormously here — several of these words are affectionate between friends and fighting words between strangers.',
    es: {
      name: 'Insultos y quejas',
      topic: 'insultos y quejas',
      description:
        'Términos para tontos, molestias y cosas que salieron mal. Aquí el registro lo es todo: varias de estas palabras son cariñosas entre amigos y motivo de pelea entre desconocidos.',
    },
  },
  {
    id: 'people',
    urlSlug: 'people',
    name: 'People & Types',
    topic: 'People',
    description:
      'Labels for social types: the show-off, the country cousin, the city sophisticate, the freeloader. These words tell you what a culture notices about its own members.',
    es: {
      name: 'Personas y tipos',
      topic: 'personas',
      description:
        'Etiquetas para tipos sociales: el presumido, el primo de pueblo, el urbanita, el gorrón. Estas palabras revelan en qué se fija una cultura cuando mira a los suyos.',
    },
  },
  {
    id: 'money',
    urlSlug: 'money',
    name: 'Money & Work',
    topic: 'Money & Work',
    description:
      'Slang for cash, cost, employment and effort. Money terms are among the oldest and most durable slang in any language, and often the most regionally specific.',
    es: {
      name: 'Dinero y trabajo',
      topic: 'dinero y trabajo',
      description:
        'Argot para el efectivo, el precio, el empleo y el esfuerzo. Los términos de dinero están entre los más viejos y duraderos de cualquier idioma, y a menudo entre los más locales.',
    },
  },
  {
    id: 'food-drink',
    urlSlug: 'food-drink',
    name: 'Food & Drink',
    topic: 'Food & Drink',
    description:
      'Informal words for eating, drinking and the state of having done too much of either. Frequently borrowed across borders, and frequently mistranslated.',
    es: {
      name: 'Comida y bebida',
      topic: 'comida y bebida',
      description:
        'Palabras informales para comer, beber y el estado de haberse pasado con cualquiera de las dos. Se prestan mucho entre países, y se traducen mal con la misma frecuencia.',
    },
  },
  {
    id: 'partying',
    urlSlug: 'partying',
    name: 'Going Out & Partying',
    topic: 'Going Out & Partying',
    description:
      'Nights out, drinking, dancing and the aftermath. A category where slang renews itself every few years as each generation renames the same activities.',
    es: {
      name: 'Salir de fiesta',
      topic: 'salir de fiesta',
      description:
        'Noches fuera, copas, baile y la resaca posterior. Una categoría donde el argot se renueva cada pocos años, porque cada generación rebautiza las mismas actividades.',
    },
  },
  {
    id: 'romance',
    urlSlug: 'romance',
    name: 'Romance & Attraction',
    topic: 'Romance & Flirting',
    description:
      'Flirting, dating, attraction and rejection. Rich in euphemism, and the category where a literal translation is most likely to embarrass you.',
    es: {
      name: 'Amor y ligue',
      topic: 'amor y ligue',
      description:
        'Coqueteo, citas, atracción y rechazo. Llena de eufemismos, y la categoría donde una traducción literal tiene más papeletas de dejarte en ridículo.',
    },
  },
  {
    id: 'emotion',
    urlSlug: 'emotion',
    name: 'Emotion & Reaction',
    topic: 'Emotion & Reaction',
    description:
      'Surprise, exasperation, delight, disbelief. Often interjections rather than nouns — words that do something rather than name something.',
    es: {
      name: 'Emoción y reacción',
      topic: 'emoción y reacción',
      description:
        'Sorpresa, hartazgo, alegría, incredulidad. Suelen ser interjecciones más que sustantivos: palabras que hacen algo en vez de nombrar algo.',
    },
  },
  {
    id: 'discourse',
    urlSlug: 'discourse',
    name: 'Fillers & Discourse',
    topic: 'Filler Words',
    description:
      'The small words that hold speech together: hedges, tags, intensifiers and pause-fillers. Almost invisible to native speakers and almost impossible for learners.',
    es: {
      name: 'Muletillas y marcadores',
      topic: 'muletillas',
      description:
        'Las palabras pequeñas que sostienen el habla: atenuadores, coletillas, intensificadores y rellenos de pausa. Casi invisibles para los nativos y casi imposibles para quien aprende.',
    },
  },
  {
    id: 'everyday',
    urlSlug: 'everyday',
    name: 'Everyday Objects & Actions',
    topic: 'Everyday Things',
    description:
      'Informal names for ordinary things and ordinary activities — the domestic layer of slang that rarely makes phrasebooks but comes up constantly.',
    es: {
      name: 'Objetos y acciones cotidianas',
      topic: 'cosas cotidianas',
      description:
        'Nombres informales para cosas y actividades corrientes: la capa doméstica del argot, la que casi nunca llega a las guías de conversación y sale en cada conversación.',
    },
  },
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
  const t = locale === 'en' ? category : category[locale];
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

export const PART_OF_SPEECH_LABEL: Record<Locale, Record<PartOfSpeech, string>> = {
  en: {
    noun: 'noun',
    verb: 'verb',
    adjective: 'adjective',
    adverb: 'adverb',
    interjection: 'interjection',
    phrase: 'phrase',
    idiom: 'idiom',
  },
  es: {
    noun: 'sustantivo',
    verb: 'verbo',
    adjective: 'adjetivo',
    adverb: 'adverbio',
    interjection: 'interjección',
    phrase: 'locución',
    idiom: 'modismo',
  },
};

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

export const REGISTER_LABEL: Record<Locale, Record<Register, string>> = {
  en: {
    informal: 'Informal',
    colloquial: 'Colloquial',
    vulgar: 'Vulgar',
    taboo: 'Taboo',
    dated: 'Dated',
    regional: 'Regional',
  },
  es: {
    informal: 'Informal',
    colloquial: 'Coloquial',
    vulgar: 'Vulgar',
    taboo: 'Tabú',
    dated: 'Anticuado',
    regional: 'Regional',
  },
};

/** Explicit caution flags. Rendered as a visible notice on the entry page. */
export const USAGE_WARNINGS = [
  'vulgar',
  'offensive',
  'sexual',
  'slur',
  'context-dependent',
] as const;

export type UsageWarning = (typeof USAGE_WARNINGS)[number];

export const USAGE_WARNING_LABEL: Record<Locale, Record<UsageWarning, string>> = {
  en: {
    vulgar: 'Vulgar — avoid in formal or professional settings',
    offensive: 'Can cause offence — understand it, think twice before using it',
    sexual: 'Sexual connotation',
    slur: 'Used as a slur — listed for comprehension only',
    'context-dependent': 'Friendly or hostile depending entirely on who is speaking',
  },
  es: {
    vulgar: 'Vulgar: evítala en contextos formales o profesionales',
    offensive: 'Puede ofender: entiéndela, pero piénsatelo dos veces antes de usarla',
    sexual: 'Connotación sexual',
    slur: 'Se usa como insulto discriminatorio: aparece solo para que la reconozcas',
    'context-dependent': 'Amistosa u hostil según quién la diga',
  },
};

/** Region groupings used on the home page country launcher. */
export const REGION_GROUPS = [
  { id: 'anglosphere', name: 'English-Speaking World', es: 'Mundo anglosajón' },
  { id: 'europe', name: 'Europe', es: 'Europa' },
  { id: 'latin-america', name: 'Latin America', es: 'América Latina' },
  { id: 'east-asia', name: 'East Asia', es: 'Asia Oriental' },
] as const;

export type RegionGroupId = (typeof REGION_GROUPS)[number]['id'];

export const regionGroupName = (group: (typeof REGION_GROUPS)[number], locale: Locale) =>
  locale === 'en' ? group.name : group[locale];
