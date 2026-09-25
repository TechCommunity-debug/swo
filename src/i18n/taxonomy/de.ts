import type { TaxonomyStrings } from './types';

/**
 * German taxonomy labels.
 *
 * `topic` lands in "…{Adjektiv} Slang zum Thema {topic}", so every topic is a
 * bare noun phrase that needs no case ending of its own.
 */
export const de: TaxonomyStrings = {
  categories: {
    'approval': {
      name: 'Lob und Zustimmung',
      topic: 'Lob und Zustimmung',
      description:
        'Wörter dafür, dass etwas gut ist, beeindruckt oder genau ins Schwarze trifft. Fast jede Sprache baut hier einen großen Wortschatz auf, und er wechselt schnell: Das Kompliment von gestern ist dieses Jahr peinlich.',
    },
    'greetings': {
      name: 'Begrüßung und Anrede',
      topic: 'Begrüßung und Anrede',
      description:
        'Wie man ein Gespräch eröffnet und wie man einander nennt. Diese Begriffe tragen mehr soziale Information als jede andere Slangkategorie: Eine falsche Wahl weist dich als Außenstehenden aus oder, schlimmer, als unhöflich.',
    },
    'insults': {
      name: 'Beleidigungen und Beschwerden',
      topic: 'Beleidigungen und Beschwerden',
      description:
        'Wörter für Dummköpfe, Ärgernisse und Dinge, die schiefgegangen sind. Das Register entscheidet hier alles: Mehrere dieser Wörter sind unter Freunden liebevoll und unter Fremden ein Anlass für Streit.',
    },
    'people': {
      name: 'Menschen und Typen',
      topic: 'Menschen',
      description:
        'Etiketten für soziale Typen: der Angeber, der Vetter vom Land, der Großstadtkenner, der Schnorrer. Diese Wörter verraten, was einer Kultur an ihren eigenen Leuten auffällt.',
    },
    'money': {
      name: 'Geld und Arbeit',
      topic: 'Geld und Arbeit',
      description:
        'Slang für Bargeld, Preise, Beschäftigung und Mühe. Geldwörter gehören in jeder Sprache zum ältesten und haltbarsten Slang – und oft zum regional engsten.',
    },
    'food-drink': {
      name: 'Essen und Trinken',
      topic: 'Essen und Trinken',
      description:
        'Informelle Wörter fürs Essen, fürs Trinken und für den Zustand, von beidem zu viel gehabt zu haben. Sie wandern häufig über Grenzen, und ebenso häufig werden sie falsch übersetzt.',
    },
    'partying': {
      name: 'Ausgehen und Feiern',
      topic: 'Ausgehen und Feiern',
      description:
        'Nächte draußen, Trinken, Tanzen und der Morgen danach. Eine Kategorie, in der sich der Slang alle paar Jahre erneuert, weil jede Generation dieselben Aktivitäten neu benennt.',
    },
    'romance': {
      name: 'Romantik und Anziehung',
      topic: 'Flirten und Romantik',
      description:
        'Flirten, Dates, Anziehung und Abfuhr. Reich an Beschönigungen – und die Kategorie, in der eine wörtliche Übersetzung am ehesten peinlich wird.',
    },
    'emotion': {
      name: 'Gefühl und Reaktion',
      topic: 'Gefühl und Reaktion',
      description:
        'Überraschung, Genervtheit, Freude, Unglauben. Oft eher Ausrufe als Substantive: Wörter, die etwas tun, statt etwas zu benennen.',
    },
    'discourse': {
      name: 'Füllwörter und Gesprächspartikeln',
      topic: 'Füllwörter',
      description:
        'Die kleinen Wörter, die das Gesprochene zusammenhalten: Abtönungen, Anhängsel, Verstärker und Pausenfüller. Für Muttersprachler fast unsichtbar und für Lernende fast unmöglich.',
    },
    'everyday': {
      name: 'Alltagsdinge und Alltagshandlungen',
      topic: 'Alltagsdinge',
      description:
        'Informelle Namen für gewöhnliche Dinge und gewöhnliche Tätigkeiten – die häusliche Schicht des Slangs, die es selten in Sprachführer schafft und ständig vorkommt.',
    },
  },

  partOfSpeech: {
    noun: 'Substantiv',
    verb: 'Verb',
    adjective: 'Adjektiv',
    adverb: 'Adverb',
    interjection: 'Interjektion',
    phrase: 'Wendung',
    idiom: 'Redewendung',
  },

  register: {
    informal: 'Informell',
    colloquial: 'Umgangssprachlich',
    vulgar: 'Vulgär',
    taboo: 'Tabu',
    dated: 'Veraltet',
    regional: 'Regional',
  },

  usageWarning: {
    vulgar: 'Vulgär – im förmlichen oder beruflichen Umfeld vermeiden',
    offensive: 'Kann verletzen – verstehen ja, benutzen lieber nicht',
    sexual: 'Sexuelle Nebenbedeutung',
    slur: 'Wird als Schimpfwort gegen eine Gruppe benutzt – hier nur zum Verstehen aufgeführt',
    'context-dependent': 'Freundlich oder feindselig, je nachdem, wer es sagt',
  },

  regionGroup: {
    'anglosphere': 'Englischsprachige Welt',
    'europe': 'Europa',
    'latin-america': 'Lateinamerika',
    'east-asia': 'Ostasien',
  },
};
