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
  editorialH2: 'Kontext, den du in keiner Wörterbuch-App findest',
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
  pageNotFound: 'Seite nicht gefunden',
  goToHomepage: 'Zur Startseite',
  browseAllSlang: 'Alle Slang-Begriffe von A bis Z',
  suggestThisWord: 'Dieses Wort vorschlagen',
  searchByTermOrMeaning: 'Nach Begriff oder Bedeutung suchen',
  notFoundSearchLead: (count: number) =>
    `Gib einen Begriff oder eine Definition ein, um den Ausdruck in allen ${count} Ländern zu finden:`,

  // ------------------------------------------------------------------- 500
  serverErrorKicker: '500',
  serverError: 'Serverfehler',
  serverErrorH1: 'Etwas ist schiefgelaufen',
  serverErrorBody:
    'Auf unseren Servern ist beim Laden dieser Seite ein unerwarteter Fehler aufgetreten. Dies ist meist nur vorübergehend. Du kannst versuchen, die Seite neu zu laden, nach einem Begriff zu suchen oder von der Startseite aus zu stöbern.',
  reloadPage: 'Seite neu laden',
  reportError: 'Fehler melden',
  searchTheDictionary: 'Im Wörterbuch suchen',
  serverErrorSearchLead:
    'Suchst du nach einem bestimmten Slang-Begriff, einer Redewendung oder einem Ausdruck? Suche direkt hier:',


  footerTagline: 'Der weltweite Wegweiser durch Slang und informelle Ausdrücke',
  byCountry: 'Nach Land',
  thisSite: 'Diese Seite',
  footerNote:
    'Die Definitionen basieren auf den verfügbaren Quellen. Wo eine Herkunft umstritten oder unsicher ist, sagen wir es.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective} Slang`,

  // ---------------------------------------------------------------- about us
  aboutH1: 'Über Slang Words Online',
  aboutSubtitle:
    'Der weltweite Wegweiser für lebendige Sprache, Straßenjargon und kulturelle Umgangssprache.',
  aboutIntro:
    'Jede Sprache besitzt zwei Gesichter: die formelle Variante aus den Grammatikbüchern und die lebendige, dynamische Sprache, die auf der Straße, im Café, am Küchentisch, in Songs und in Gruppenchats gesprochen wird. <strong>Slang Words Online</strong> ist genau für Letzteres da.',
  aboutStatCountries: 'Länder & Dialekte',
  aboutStatTerms: 'Slang-Begriffe & Redewendungen',
  aboutStatCategories: 'Alltags-Kategorien',
  aboutStatLanguages: 'Unterstützte Sprachen',
  aboutWhyHeading: 'Warum wir Slang Words Online ins Leben gerufen haben',
  aboutWhyP1:
    'Hast du jemals ein Wort im Gespräch aufgeschnappt, eine internationale Serie mit Untertiteln geschaut oder einen Song gehört und dich gefragt: <em>„Was zum Teufel bedeutet das eigentlich?“</em>',
  aboutWhyP2:
    'Gibt man den Satz in ein herkömmliches Übersetzungstool ein, entsteht oft pure Verwirrung: Entweder wird jedes Wort stur wörtlich übersetzt (wobei aus dem spanischen „de una“ unsinnigerweise „von einem“ statt „sofort / auf jeden Fall“ wird) oder man erhält ein viel zu steifes Standardwörterbuch-Wort, das den Tonfall völlig verfehlt.',
  aboutWhyP3:
    'Wir haben Slang Words Online geschaffen, um den kulturellen Kontext, die Stilebene und die sozialen Feinheiten greifbar zu machen, die in Lehrbüchern und automatischen Übersetzern fehlen.',
  aboutPillarsHeading: 'Was unser Wörterbuch auszeichnet',
  aboutPillarsLead:
    'Ein Slang-Wörterbuch lohnt sich nur, wenn es genau das erklärt, was eine kurze Suchanfrage verschweigt:',
  aboutPillar1Title: '1. Stilebene & soziale Nuancen',
  aboutPillar1Body:
    'Ist ein Ausdruck ein liebevoller Scherz unter engen Freunden oder eine Beleidigung in höflicher Runde? Wir kennzeichnen Tonfall und Sprachebene klar, damit dir kein peinlicher Fehltritt unterläuft.',
  aboutPillar2Title: '2. Echte Anwendungsbeispiele aus dem Alltag',
  aboutPillar2Body:
    'Jeder Begriff enthält authentische Dialoge und Beispielsätze in der Originalsprache, inklusive präziser umgangssprachlicher und wörtlicher Übersetzungen.',
  aboutPillar3Title: '3. Diskutierte Herkunft & Etymologie',
  aboutPillar3Body:
    'Das Internet wimmelt von falschen Entstehungsgeschichten. Wenn eine Herkunft historisch belegt ist, nennen wir die Fakten; wenn es sich um moderne Mythen oder Volksetymologien handelt, sagen wir das offen.',
  aboutPillar4Title: '4. Umschrift & Aussprachehilfen',
  aboutPillar4Body:
    'Nicht-lateinische Schriften (Kyrillisch, japanische Kanji/Hiragana, koreanisches Hangeul) sind mit Umschriften, Lautschrift und Aussprachetipps versehen, damit du sie sicher lesen und aussprechen kannst.',
  aboutCulturesHeading: 'Abgedeckte Kulturen und Dialekte',
  aboutCulturesLead: (count: number) =>
    `Unser Verzeichnis umfasst ${count} eigenständige Sprach- und Regionalräume und spiegelt die Vielfalt informeller Sprache rund um den Globus wider:`,
  aboutEditorialHeading: 'Redaktionelle Philosophie & Community-Beiträge',
  aboutEditorialP1:
    'Slang wird nicht von Sprachwissenschaftlern im Elfenbeinturm erfunden; er entsteht auf Schulhöfen, in Comedy-Clubs, im Stadion, im Tonstudio und im Gruppenchat. Da sich Sprache ständig wandelt, ist Slang Words Online ein lebendiges Projekt.',
  aboutEditorialP2:
    'Wir freuen uns über Muttersprachler, Reisende und Sprachbegeisterte aus aller Welt, die neue Begriffe einreichen, regionale Nuancen teilen oder Korrekturen anregen.',
  aboutConnectHeading: 'Schreib uns',
  aboutConnectBody:
    'Kennst du einen Slang-Ausdruck aus deiner Heimat, der hier noch fehlt? Hast du eine regionale Nuance entdeckt? Wir freuen uns über deine Nachricht.',
  aboutContactBtn: 'Team kontaktieren',
  aboutBrowseBtn: 'Alle Slang-Wörter von A bis Z',

  aboutUs: 'Über uns',
  // ---------------------------------------------------------------- contact us
  contactKicker: 'Kontakt aufnehmen',
  contactSubtitle:
    'Wir freuen uns über Nachrichten von Sprachbegeisterten, Muttersprachlern und neugierigen Lernenden weltweit.',
  contactIntro:
    'Egal, ob du einen noch undokumentierten Slang-Ausdruck deiner Region vorschlagen, eine Bedeutungsnuance korrigieren, eine Kooperation anfragen oder einfach Hallo sagen möchtest — schreib direkt an unser Redaktionsteam.',
  contactOfficialEmail: 'Offizielle Kontaktadresse',
  contactEmailLead:
    'Unsere Redaktion prüft dieses Postfach regelmäßig. Sende deine Anfragen, Begriffserklärungen oder dein Feedback direkt an uns.',
  contactCopyEmail: 'E-Mail-Adresse kopieren',
  contactCopied: 'In die Zwischenablage kopiert!',
  contactCategoriesHeading: 'Wofür du uns kontaktieren kannst',
  contactCat1Title: 'Neuen Slang vorschlagen',
  contactCat1Body:
    'Kennst du einen Straßenausdruck, viralen Slang oder eine Redewendung, die noch fehlt? Teile das Wort, seine Bedeutung, Herkunft und Beispielsätze mit uns.',
  contactCat2Title: 'Regionale Nuancen & Korrekturen',
  contactCat2Body:
    'Wird ein Begriff in deiner Heimat anders verwendet? Haben wir eine strittige Herkunft aufgeführt? Wir legen großen Wert auf muttersprachliche Genauigkeit.',
  contactCat3Title: 'Funktionen & Feedback',
  contactCat3Body:
    'Ideen für neue Länder, Verbesserungen der Bedienung, Aussprachehilfen oder technische Fehlerberichte.',
  contactCat4Title: 'Kooperationen & Medien',
  contactCat4Body:
    'Linguistische Forschung, Bildungseinrichtungen, Übersetzungsanfragen und Presseauskünfte.',
  contactResponseTimeLabel: 'Antwortzeit:',
  contactResponseTimeText:
    'Unser ehrenamtliches Redaktionsteam sichtet Community-Nachrichten mehrfach pro Woche. In der Regel antworten wir innerhalb von 24 bis 48 Stunden.',

  contactUs: 'Kontakt',
  // ---------------------------------------------------------------- privacy policy
  privacyKicker: 'Rechtliches & Datenschutz',
  privacyLastUpdated: 'Zuletzt aktualisiert: September 2026',
  privacyIntro:
    'Bei Slang Words Online (<a href="/de/" class="text-primary hover:underline">slangwordsonline.com</a>) ist Datenschutz einfach und transparent. Wir sind überzeugt, dass ein sprachliches Bildungsangebot offen, sicher und respektvoll gegenüber jedem Besucher sein muss.',
  privacyPrinciplesHeading: 'Unsere Datenschutz-Grundsätze',
  privacyPrinciple1Title: '1. Kein Benutzerkonto & freier Zugriff',
  privacyPrinciple1Body:
    'Du kannst sämtliche Slang-Einträge frei durchstöbern, Länder erkunden und im Wörterbuch suchen, ohne ein Konto anzulegen oder persönliche Daten anzugeben.',
  privacyPrinciple2Title: '2. Kein Verkauf von Daten',
  privacyPrinciple2Body:
    'Wir monetarisieren, vermitteln oder verkaufen zu keinem Zeitpunkt Daten unserer Besucher an Dritte, Datenhändler oder Werbenetzwerke.',
  privacyPrinciple3Title: '3. Direkte & transparente Kommunikation',
  privacyPrinciple3Body:
    'Wenn du uns per E-Mail kontaktierst, nutzen wir deine Nachricht ausschließlich zur Beantwortung deiner Fragen oder zur Prüfung von Begriffsvorschlägen.',
  privacyCollectHeading: 'Informationen, die wir erfassen',
  privacyCollectLead:
    'Wir erfassen nur das absolute Minimum an technischen Informationen, das für Bereitstellung, Schutz und Wartung der Website erforderlich ist:',
  privacyCollectA_Title: 'A. Anonyme Protokoll- und Serverdaten',
  privacyCollectA_Body:
    'Beim Aufruf unserer Website speichert unsere Server-Infrastruktur automatisch nicht-personenbezogene Diagnoseprotokolle (wie Zugriffszeitpunkte, Browsertyp, Betriebssystem, angeforderte URLs und anonymisierte IP-Adressen). Diese Daten dienen ausschließlich der Serversicherheit, Fehleranalyse und Schutz vor Daten-Scraping.',
  privacyCollectB_Title: 'B. Lokale Einstellungen im Browser',
  privacyCollectB_Body:
    'Wenn du zwischen hellem und dunklem Design wechselst, wird deine Auswahl lokal im <code>localStorage</code> deines Browsers hinterlegt. Diese Information verbleibt auf deinem Gerät und wird nicht an unsere Server übertragen.',
  privacyCollectC_Title: 'C. Direkter E-Mail-Kontakt',
  privacyCollectC_Body:
    'Wenn du unserem Team schreibst, erhalten wir deine E-Mail-Adresse, deinen Namen (falls angegeben) und den Inhalt deiner Nachricht. Wir behalten diese Korrespondenz nur so lange, wie es zur Klärung deines Anliegens erforderlich ist.',
  privacyCookiesHeading: 'Cookies und Tracking-Technologien',
  privacyCookiesLead:
    'Slang Words Online ist von Grund auf nach dem Grundsatz der Datensparsamkeit aufgebaut:',
  privacyCookiesB1:
    '<strong>Keine Werbe- oder Tracking-Cookies:</strong> Wir verwenden weder Tracking-Cookies von Drittanbietern noch Zählpixel oder seitenübergreifende Analyse-Tools.',
  privacyCookiesB2:
    '<strong>Kein Profiling oder Fingerprinting:</strong> Wir erstellen keine Profile über dein Surfverhalten und versuchen nicht, einzelne Besucher wiederzuerkennen.',
  privacyCookiesB3:
    '<strong>Ausschließlich funktionaler Webspeicher:</strong> Wir nutzen lediglich minimalen Browserspeicher, um deine Wahl des Farbschemas (Hell- oder Dunkelmodus) beizubehalten.',
  privacyUpdatesHeading: 'Aktualisierungen dieser Richtlinie',
  privacyUpdatesBody:
    'Wir können diese Datenschutzerklärung gelegentlich anpassen, um kleinere Verbesserungen oder technische Änderungen abzubilden. Alle Änderungen werden direkt auf dieser Seite mit aktualisiertem Datum veröffentlicht.',
  privacyContactBody:
    'Bei Fragen oder Anregungen zu unseren Datenschutzpraktiken kannst du dich jederzeit direkt an uns wenden:',
  privacyContactEmailLabel: 'E-Mail:',

  privacyPolicy: 'Datenschutzerklärung',
  termsConditions: 'Nutzungsbedingungen',
};
