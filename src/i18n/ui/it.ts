import type { Strings } from './types';
import { plural } from './plural';

export const it: Strings = {
  skipToContent: 'Vai al contenuto',
  mainNav: 'Principale',
  countriesNav: 'Paesi',
  sectionsNav: 'Sezioni',
  openMenu: 'Apri il menu',
  breadcrumb: 'Percorso di navigazione',
  home: 'Home',
  browse: 'Indice A–Z',
  search: 'Cerca',
  language: 'Lingua',
  jumpToLetter: 'Vai a una lettera',
  termsBeginningWith: (letter: string) => `Termini che iniziano per ${letter}`,

  homeH1: 'La guida globale allo slang',
  homeLead: (terms: number, countries: number) =>
    `${plural(terms, 'parola o espressione informale', 'parole ed espressioni informali')} da ${plural(countries, 'paese', 'paesi')}: cosa significano, come si pronunciano e in quali situazioni usarle sarebbe un errore.`,
  searchPlaceholder: 'Cerca una parola di slang, o un significato…',
  searchPlaceholderCompact: 'Cerca nello slang…',
  searchLabel: 'Cerca termini di slang',
  searchHint:
    'I risultati compaiono qui sotto mentre scrivi. Premi Invio per aprire la pagina di ricerca.',
  tryTerms: 'Prova con',
  pickCountry: 'Scegli un paese',
  pickCountryLead:
    'Lo slang appartiene a un luogo prima che a una lingua. Parti da dove queste parole si dicono davvero.',
  termsCount: (n: number) => plural(n, 'termine', 'termini'),
  popularTopics: 'Temi più cercati',
  popularTopicsLead:
    'Le pagine che la gente cerca davvero: un paese, un tema e tutti i termini che abbiamo su quel tema.',
  oneWordEach: 'Una parola per ogni paese',
  oneWordEachLead:
    'Un assaggio di com’è fatta una scheda completa: accezioni, frasi di esempio con traduzione e l’origine dove è davvero nota.',
  editorialH2: 'Il contesto che non troverai in un’app di dizionario',
  editorialBody:
    'Un dizionario di slang vale qualcosa solo se ti dice quello che un traduttore automatico non può dirti: se una parola è affettuosa o ostile, a chi puoi rivolgerla e se la storia sulla sua origine che ripetono tutti sia poi vera. Quando una cosa è controversa, lo scriviamo. Quando una parola è un insulto discriminatorio, scriviamo anche quello, e la includiamo lo stesso, perché devi comunque capirla quando la senti.',
  startHere: 'Parti da questi',
  startHereLead:
    'I termini qui sotto sono quelli con più dettagli d’uso: registro, origine e le situazioni in cui vanno storti. Conviene leggerli per intero prima di tutti gli altri.',
  byTopic: 'Per tema',
  byTopicLead: (adjective: string) =>
    `Ogni pagina qui sotto raccoglie tutti i termini di slang ${adjective.toLowerCase()} che abbiamo su uno stesso tema, uno accanto all’altro.`,
  allTermsAz: (adjective: string) => `Tutto lo slang ${adjective.toLowerCase()} dalla A alla Z`,
  termsWithExamples: (n: number) =>
    `${plural(n, 'termine', 'termini')}, ciascuno con accezioni e frasi di esempio.`,
  slangFor: (adjective: string, topic: string) =>
    `Slang ${adjective.toLowerCase()} per ${topic}`,

  categoryLead: (n: number, adjective: string, topic: string) =>
    `${plural(n, 'termine di slang', 'termini di slang')} ${adjective.toLowerCase()} per ${topic}, ciascuno con il suo significato, la sua pronuncia e un esempio d’uso.`,
  otherTopicsIn: (adjective: string) => `Altri temi dello slang ${adjective.toLowerCase()}`,
  sameTopicElsewhere: (topic: string) => `Slang per ${topic} negli altri paesi`,
  sameTopicElsewhereLead:
    'Lo stesso tema negli altri paesi del sito: il modo più rapido per vedere quanto diversamente quattro lingue dicono la stessa cosa.',

  aSlangTerm: (languageName: string) => `Un termine dello slang in ${languageName.toLowerCase()}.`,
  countrySlangHeading: (adjective: string) => `Slang ${adjective.toLowerCase()}`,
  moreSenses: (n: number) => `+${n} ${n === 1 ? 'altra accezione' : 'altre accezioni'}`,
  useWithCare: 'Usala con cautela',
  browseAll: (adjective: string) => `Vedi tutto lo slang ${adjective.toLowerCase()}`,
  beforeYouUse: 'Prima di usarla',
  whatItMeans: 'Che cosa significa',
  literally: 'Letteralmente:',
  inUse: 'In uso',
  examplesWithTranslations: 'Esempi con traduzione',
  note: 'Nota:',
  whereItComesFrom: 'Da dove viene',
  firstAttested: (when: string) => `Prima attestazione: ${when}`,
  otherForms: 'Altre forme',
  spellingsAndVariants: 'Grafie e varianti:',
  similarTerms: 'Termini simili:',
  romanizedAs: 'Romanizzazione',
  nearbyTerms: 'Termini vicini',
  previous: 'Precedente',
  next: 'Successivo',
  relatedTerms: 'Termini correlati',
  alsoUsedIn: 'Si usa anche in',
  topics: 'Temi',
  moreTermsLikeThis: (adjective: string) =>
    `Altri termini di slang ${adjective.toLowerCase()} come questo`,
  updatedOn: (date: string) => `Aggiornato il ${date}.`,

  browseH1: 'Tutti i termini, dalla A alla Z',
  browseLead: (terms: number, countries: number) =>
    `${plural(terms, 'termine del sito', 'termini del sito')} in un unico indice alfabetico, da ${plural(countries, 'paese', 'paesi')}. L’ordinamento ignora gli accenti, così güey sta insieme alle G.`,

  searchH1: 'Cerca',
  searchLead:
    'Cerca per termine o per significato: scrivere “ubriaco” trova le parole che lo dicono in tutte le lingue del sito.',
  startTyping: 'Inizia a scrivere per vedere i risultati.',
  resultCount: (n: number) => `${n} ${n === 1 ? 'risultato' : 'risultati'}`,
  noMatches: (q: string) => `Nessun risultato per “${q}”.`,
  noMatchesTryBrowse: 'Prova con una parola più corta, oppure consulta l’indice A–Z.',

  notFoundKicker: '404',
  notFoundH1: 'Qui questa parola non c’è',
  notFoundBody:
    'Questa pagina non esiste: può darsi che il termine non sia ancora nel dizionario, o che il link sia vecchio. Cercare di solito è più rapido che indovinare l’URL.',
  orStartFromCountry: 'Oppure parti da un paese',

  footerTagline: 'La guida globale allo slang e alle espressioni informali',
  byCountry: 'Per paese',
  thisSite: 'Questo sito',
  footerNote:
    'Le definizioni si basano sulle fonti disponibili. Quando un’origine è controversa o incerta, lo diciamo.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `slang ${adjective.toLowerCase()}`,

  aboutUs: 'Chi siamo',
  contactUs: 'Contatti',
  privacyPolicy: 'Informativa sulla privacy',
  termsConditions: 'Termini e condizioni',
};
