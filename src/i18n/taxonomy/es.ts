import type { TaxonomyStrings } from './types';

export const es: TaxonomyStrings = {
  categories: {
    'approval': {
      name: 'Aprobación y elogio',
      topic: 'aprobación y elogio',
      description:
        'Palabras para decir que algo está bien, que impresiona o que da justo en el clavo. Casi todos los idiomas acumulan mucho vocabulario aquí, y se renueva rápido: el halago de ayer da vergüenza hoy.',
    },
    'greetings': {
      name: 'Saludos y tratamiento',
      topic: 'saludos y tratamiento',
      description:
        'Cómo se abre una conversación y cómo se llaman entre sí los hablantes. Son los términos con más carga social de todo el argot: una sola elección equivocada te delata como extranjero o, peor, como maleducado.',
    },
    'insults': {
      name: 'Insultos y quejas',
      topic: 'insultos y quejas',
      description:
        'Términos para tontos, molestias y cosas que salieron mal. Aquí el registro lo es todo: varias de estas palabras son cariñosas entre amigos y motivo de pelea entre desconocidos.',
    },
    'people': {
      name: 'Personas y tipos',
      topic: 'personas',
      description:
        'Etiquetas para tipos sociales: el presumido, el primo de pueblo, el urbanita, el gorrón. Estas palabras revelan en qué se fija una cultura cuando mira a los suyos.',
    },
    'money': {
      name: 'Dinero y trabajo',
      topic: 'dinero y trabajo',
      description:
        'Argot para el efectivo, el precio, el empleo y el esfuerzo. Los términos de dinero están entre los más viejos y duraderos de cualquier idioma, y a menudo entre los más locales.',
    },
    'food-drink': {
      name: 'Comida y bebida',
      topic: 'comida y bebida',
      description:
        'Palabras informales para comer, beber y el estado de haberse pasado con cualquiera de las dos. Se prestan mucho entre países, y se traducen mal con la misma frecuencia.',
    },
    'partying': {
      name: 'Salir de fiesta',
      topic: 'salir de fiesta',
      description:
        'Noches fuera, copas, baile y la resaca posterior. Una categoría donde el argot se renueva cada pocos años, porque cada generación rebautiza las mismas actividades.',
    },
    'romance': {
      name: 'Amor y ligue',
      topic: 'amor y ligue',
      description:
        'Coqueteo, citas, atracción y rechazo. Llena de eufemismos, y la categoría donde una traducción literal tiene más papeletas de dejarte en ridículo.',
    },
    'emotion': {
      name: 'Emoción y reacción',
      topic: 'emoción y reacción',
      description:
        'Sorpresa, hartazgo, alegría, incredulidad. Suelen ser interjecciones más que sustantivos: palabras que hacen algo en vez de nombrar algo.',
    },
    'discourse': {
      name: 'Muletillas y marcadores',
      topic: 'muletillas',
      description:
        'Las palabras pequeñas que sostienen el habla: atenuadores, coletillas, intensificadores y rellenos de pausa. Casi invisibles para los nativos y casi imposibles para quien aprende.',
    },
    'everyday': {
      name: 'Objetos y acciones cotidianas',
      topic: 'cosas cotidianas',
      description:
        'Nombres informales para cosas y actividades corrientes: la capa doméstica del argot, la que casi nunca llega a las guías de conversación y sale en cada conversación.',
    },
  },

  partOfSpeech: {
    noun: 'sustantivo',
    verb: 'verbo',
    adjective: 'adjetivo',
    adverb: 'adverbio',
    interjection: 'interjección',
    phrase: 'locución',
    idiom: 'modismo',
  },

  register: {
    informal: 'Informal',
    colloquial: 'Coloquial',
    vulgar: 'Vulgar',
    taboo: 'Tabú',
    dated: 'Anticuado',
    regional: 'Regional',
  },

  usageWarning: {
    vulgar: 'Vulgar: evítala en contextos formales o profesionales',
    offensive: 'Puede ofender: entiéndela, pero piénsatelo dos veces antes de usarla',
    sexual: 'Connotación sexual',
    slur: 'Se usa como insulto discriminatorio: aparece solo para que la reconozcas',
    'context-dependent': 'Amistosa u hostil según quién la diga',
  },

  regionGroup: {
    'anglosphere': 'Mundo anglosajón',
    'europe': 'Europa',
    'latin-america': 'América Latina',
    'east-asia': 'Asia Oriental',
  },
};
