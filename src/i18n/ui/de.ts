import type { Strings } from './types';
import { plural } from './plural';

/**
 * German chrome.
 *
 * Adjective frame: `country.adjective` holds the **strong nominative masculine**
 * form, capitalised — "Amerikanischer", "Britischer", "Japanischer" — because it
 * is almost always attributive in front of "Slang": *amerikanischer Slang*.
 * Every template below therefore places it in that one slot and nowhere else.
 * Where a sentence would need another case ("aus dem amerikanischen Slang"),
 * the German is restructured so the nominative still fits, rather than shipping
 * a wrong ending. Mid-sentence occurrences are lower-cased explicitly.
 */
export const de: Strings = {
  skipToContent: 'Zum Inhalt springen',
  mainNav: 'Hauptnavigation',
  countriesNav: 'Länder',
  sectionsNav: 'Bereiche',
  openMenu: 'Menü öffnen',
  breadcrumb: 'Brotkrumennavigation',
  home: 'Startseite',
  browse: 'Register A–Z',
  search: 'Suche',
  language: 'Sprache',
  jumpToLetter: 'Zu einem Buchstaben springen',
  termsBeginningWith: (letter: string) => `Begriffe mit ${letter}`,

  homeH1: 'Der weltweite Wegweiser durch den Slang',
  homeLead: (terms: number, countries: number) =>
    `${plural(terms, 'informelles Wort', 'informelle Wörter und Wendungen')} aus ${plural(countries, 'Land', 'Ländern')} – was sie bedeuten, wie man sie ausspricht und in welchen Situationen man sie besser nicht benutzt.`,
  searchPlaceholder: 'Slangwort oder Bedeutung suchen…',
  searchPlaceholderCompact: 'Slang suchen…',
  searchLabel: 'Slangbegriffe suchen',
  searchHint:
    'Die Treffer erscheinen beim Tippen darunter. Mit Enter geht es zur vollständigen Suchseite.',
  tryTerms: 'Probier',
  pickCountry: 'Land auswählen',
  pickCountryLead:
    'Slang gehört zu einem Ort, bevor er zu einer Sprache gehört. Fang dort an, wo die Wörter tatsächlich gesprochen werden.',
  termsCount: (n: number) => plural(n, 'Begriff', 'Begriffe'),
  popularTopics: 'Beliebte Themen',
  popularTopicsLead:
    'Die Seiten, nach denen wirklich gesucht wird: ein Land, ein Thema und jeder Begriff, den wir dazu haben.',
  oneWordEach: 'Ein Wort aus jedem Land',
  oneWordEachLead:
    'Eine Kostprobe davon, wie ein vollständiger Eintrag aussieht: Bedeutungen, ausgearbeitete Beispiele mit Übersetzung und die Herkunft, wo sie tatsächlich bekannt ist.',
  editorialH2: 'Jeder Eintrag ist geschrieben, nicht generiert',
  editorialBody:
    'Ein Slangwörterbuch taugt nur dann etwas, wenn es die Dinge sagt, die eine Übersetzungs-App nicht sagen kann: ob ein Wort liebevoll oder feindselig gemeint ist, zu wem man es sagen darf und ob die Herkunftsgeschichte, die alle nacherzählen, überhaupt stimmt. Wo etwas umstritten ist, schreiben wir, dass es umstritten ist. Wo ein Wort eine Beleidigung ist, schreiben wir auch das – und führen es trotzdem auf, weil man es immer noch verstehen muss, wenn man es hört.',
  startHere: 'Fang mit diesen an',
  startHereLead:
    'Die folgenden Begriffe tragen die meisten Angaben zum Gebrauch: Register, Herkunft und die Situationen, in denen sie schiefgehen. Sie lohnen sich als Erstes und in voller Länge.',
  byTopic: 'Nach Thema',
  byTopicLead: (adjective: string) =>
    `Auf jeder Seite unten steht ${adjective.toLowerCase()} Slang zu einem Thema – alle Begriffe, die wir dazu haben, nebeneinander.`,
  allTermsAz: (adjective: string) => `${adjective} Slang von A bis Z`,
  termsWithExamples: (n: number) =>
    `${plural(n, 'Begriff', 'Begriffe')}, jeweils mit Bedeutungen und ausgearbeiteten Beispielsätzen.`,
  slangFor: (adjective: string, topic: string) => `${adjective} Slang zum Thema ${topic}`,

  categoryLead: (n: number, adjective: string, topic: string) =>
    `${adjective} Slang zum Thema ${topic}: ${plural(n, 'Begriff', 'Begriffe')}, jeweils mit Bedeutung, Aussprache und einem Beispiel aus dem echten Gebrauch.`,
  otherTopicsIn: (adjective: string) => `${adjective} Slang: weitere Themen`,
  sameTopicElsewhere: (topic: string) => `${topic}: Slang aus anderen Ländern`,
  sameTopicElsewhereLead:
    'Dasselbe Thema in den anderen Ländern auf dieser Seite – der schnellste Weg zu sehen, wie verschieden vier Sprachen dieselbe Sache sagen.',

  aSlangTerm: (languageName: string) =>
    `${languageName.charAt(0).toLocaleUpperCase('de-DE')}${languageName.slice(1)}: ein Slangbegriff.`,
  countrySlangHeading: (adjective: string) => `${adjective} Slang`,
  moreSenses: (n: number) => `+${n} weitere ${n === 1 ? 'Bedeutung' : 'Bedeutungen'}`,
  useWithCare: 'Vorsicht beim Gebrauch',
  browseAll: (adjective: string) => `${adjective} Slang von A bis Z`,
  beforeYouUse: 'Bevor du dieses Wort benutzt',
  whatItMeans: 'Was es bedeutet',
  literally: 'Wörtlich:',
  inUse: 'Im Gebrauch',
  examplesWithTranslations: 'Beispiele mit Übersetzung',
  note: 'Hinweis:',
  whereItComesFrom: 'Woher es kommt',
  firstAttested: (when: string) => `Erstbeleg: ${when}`,
  otherForms: 'Andere Formen',
  spellingsAndVariants: 'Schreibweisen und Varianten:',
  similarTerms: 'Ähnliche Begriffe:',
  romanizedAs: 'Umschrift',
  nearbyTerms: 'Benachbarte Begriffe',
  previous: 'Zurück',
  next: 'Weiter',
  relatedTerms: 'Verwandte Begriffe',
  alsoUsedIn: 'Wird auch benutzt in',
  topics: 'Themen',
  moreTermsLikeThis: (adjective: string) => `Ähnlicher ${adjective.toLowerCase()} Slang`,
  reviewedBy: (who: string) => `Geprüft von ${who}.`,
  updatedOn: (date: string) => `Aktualisiert am ${date}.`,

  browseH1: 'Alle Begriffe, von A bis Z',
  browseLead: (terms: number, countries: number) =>
    `${plural(terms, 'Begriff', 'Begriffe')} aus ${plural(countries, 'Land', 'Ländern')} in einem einzigen alphabetischen Register. Sortiert wird ohne Rücksicht auf Akzente, güey steht also bei den Gs.`,

  searchH1: 'Suche',
  searchLead:
    'Suche nach Begriff oder nach Bedeutung: Wer „betrunken“ eingibt, findet die Wörter dafür in allen Sprachen dieser Seite.',
  startTyping: 'Tippen, um Treffer zu sehen.',
  resultCount: (n: number) => `${n} Treffer`,
  noMatches: (q: string) => `Nichts passt zu „${q}“.`,
  noMatchesTryBrowse: 'Probier ein kürzeres Wort, oder geh das Register A–Z durch.',

  notFoundKicker: '404',
  notFoundH1: 'Dieses Wort gibt es hier nicht',
  notFoundBody:
    'Diese Seite existiert nicht – der Begriff steht vielleicht noch nicht im Wörterbuch, oder der Link ist veraltet. Suchen geht meistens schneller, als die URL zu erraten.',
  orStartFromCountry: 'Oder fang bei einem Land an',

  footerTagline: 'Der weltweite Wegweiser durch Slang und informelle Ausdrücke',
  byCountry: 'Nach Land',
  thisSite: 'Diese Seite',
  footerNote:
    'Die Definitionen werden von Menschen geschrieben und geprüft. Wo eine Herkunft umstritten ist, sagen wir es.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective} Slang`,

};
