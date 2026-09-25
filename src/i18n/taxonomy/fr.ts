import type { TaxonomyStrings } from './types';

export const fr: TaxonomyStrings = {
  categories: {
    'approval': {
      name: 'Approbation et éloges',
      topic: 'l’approbation et les éloges',
      description:
        'Les mots pour dire qu’une chose est bonne, impressionnante ou exactement comme il faut. Presque toutes les langues accumulent ici un vocabulaire énorme, et il se renouvelle vite : le compliment d’hier fait honte cette année.',
    },
    'greetings': {
      name: 'Salutations et appellatifs',
      topic: 'les salutations et les appellatifs',
      description:
        'Comment on ouvre une conversation et comment on s’appelle entre soi. Ce sont les termes les plus chargés socialement de tout l’argot : un seul mauvais choix vous désigne comme étranger ou, pire, comme mal élevé.',
    },
    'insults': {
      name: 'Insultes et râleries',
      topic: 'les insultes et les râleries',
      description:
        'Les mots pour les imbéciles, les agacements et ce qui a mal tourné. Ici le registre pèse énormément : plusieurs de ces mots sont affectueux entre amis et cherchent la bagarre entre inconnus.',
    },
    'people': {
      name: 'Personnes et types',
      topic: 'les gens',
      description:
        'Les étiquettes des types sociaux : le frimeur, le cousin de la campagne, le citadin raffiné, le pique-assiette. Ces mots disent ce qu’une culture remarque chez les siens.',
    },
    'money': {
      name: 'Argent et travail',
      topic: 'l’argent et le travail',
      description:
        'L’argot du fric, du prix, de l’emploi et de l’effort. Les mots de l’argent comptent parmi les plus anciens et les plus durables de toutes les langues, et souvent parmi les plus locaux.',
    },
    'food-drink': {
      name: 'Nourriture et boisson',
      topic: 'la nourriture et la boisson',
      description:
        'Les mots familiers pour manger, boire et l’état où l’on se retrouve quand on a forcé sur l’un ou l’autre. Souvent empruntés d’un pays à l’autre, et tout aussi souvent mal traduits.',
    },
    'partying': {
      name: 'Sorties et fête',
      topic: 'les sorties et la fête',
      description:
        'Les soirées, les verres, la danse et le lendemain. Une catégorie où l’argot se refait tous les cinq ans, parce que chaque génération rebaptise les mêmes activités.',
    },
    'romance': {
      name: 'Amour et séduction',
      topic: 'la drague et l’amour',
      description:
        'La drague, les rendez-vous, l’attirance et les râteaux. Pleine d’euphémismes, et la catégorie où une traduction littérale a le plus de chances de vous ridiculiser.',
    },
    'emotion': {
      name: 'Émotion et réaction',
      topic: 'l’émotion et la réaction',
      description:
        'La surprise, l’exaspération, la joie, l’incrédulité. Ce sont souvent des interjections plutôt que des noms : des mots qui font quelque chose au lieu de nommer quelque chose.',
    },
    'discourse': {
      name: 'Tics de langage et discours',
      topic: 'les tics de langage',
      description:
        'Les petits mots qui tiennent la parole ensemble : atténuateurs, particules finales, intensifieurs et bouche-trous. Presque invisibles pour les natifs et presque impossibles pour qui apprend.',
    },
    'everyday': {
      name: 'Objets et gestes du quotidien',
      topic: 'le quotidien',
      description:
        'Les noms familiers des choses et des gestes ordinaires : la couche domestique de l’argot, celle qui n’arrive presque jamais dans les guides de conversation et qui revient sans arrêt.',
    },
  },

  partOfSpeech: {
    noun: 'nom',
    verb: 'verbe',
    adjective: 'adjectif',
    adverb: 'adverbe',
    interjection: 'interjection',
    phrase: 'locution',
    idiom: 'expression idiomatique',
  },

  register: {
    informal: 'Familier',
    colloquial: 'Courant familier',
    vulgar: 'Vulgaire',
    taboo: 'Tabou',
    dated: 'Vieilli',
    regional: 'Régional',
  },

  usageWarning: {
    vulgar: 'Vulgaire : à éviter en contexte formel ou professionnel',
    offensive: 'Peut blesser : comprenez-le, réfléchissez à deux fois avant de l’employer',
    sexual: 'Connotation sexuelle',
    slur: 'Employé comme insulte discriminatoire : référencé pour la compréhension seulement',
    'context-dependent': 'Amical ou hostile selon qui parle, et rien d’autre',
  },

  regionGroup: {
    'anglosphere': 'Monde anglophone',
    'europe': 'Europe',
    'latin-america': 'Amérique latine',
    'east-asia': 'Asie de l’Est',
  },
};
