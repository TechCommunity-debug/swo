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
  homeH1: 'Slang Words Dictionary: Meanings, Examples & More',
  homeLead: (terms: number, countries: number) =>
    `Discover the meaning of slang words, phrases, acronyms and expressions from around the world. Search our slang dictionary to find definitions, example sentences, pronunciation, origins and the context behind popular slang.`,
  searchPlaceholder: 'Search slang words…',
  searchPlaceholderCompact: 'Search slang…',
  searchLabel: 'Search slang terms',
  searchHint: 'Results appear below as you type. Press Enter to open the full search page.',
  tryTerms: 'Try',
  pickCountry: 'Explore Slang by Country',
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


  // ----------------------------------------- home — FAQ section
  faqH2: 'Frequently Asked Questions About Slang',
  faqQ1: 'What are slang words?',
  faqA1:
    'Slang words are informal words or phrases that are more common in spoken language than in writing. They often originate within specific social groups, subcultures, or regions and may carry meanings that differ from their standard dictionary definitions. Slang can express identity, humor, or attitude and tends to evolve much faster than formal vocabulary — words that were edgy a decade ago can feel dated today.',
  faqQ2: 'What is the newest slang?',
  faqA2:
    'Slang evolves constantly, with new terms emerging from social media platforms like TikTok, Twitter/X, and Instagram every week. Some recent examples include “delulu” (delusionally optimistic), “rizz” (charisma, especially in flirting), “slay” (to do something exceptionally well), and “ate” (nailed it, did an amazing job). The fastest way to stay current is to follow trending conversations online — or browse our regularly updated collection by country.',
  faqQ3: 'How does slang differ from formal language?',
  faqA3:
    'Formal language follows standard grammar and vocabulary rules and is used in professional, academic, or official settings. Slang, by contrast, is casual, often breaks grammatical conventions, and is tied to specific communities or generations. A word like “cool” is understood everywhere, but slang terms like “chuffed” (British for pleased) or “naco” (Mexican for tacky) only make full sense when you know the culture behind them.',
  faqQ4: 'Why do different countries have different slang?',
  faqA4:
    'Slang is shaped by local culture, history, and social dynamics. Even countries that share the same language — like the US, UK, and Australia for English, or Mexico, Spain, and Colombia for Spanish — develop completely different slang vocabularies. This happens because slang reflects lived experience: local food, music, humor, class structures, and media all leave their fingerprints on informal speech.',
  faqQ5: 'Is it okay to use slang in everyday conversation?',
  faqA5:
    'Absolutely — slang is a natural part of how people communicate, and using it appropriately shows social awareness and fluency. The key is context: slang fits perfectly in casual conversation, texting, and social media, but may be out of place in a job interview, academic paper, or formal email. Knowing when to switch registers is itself a language skill.',
  faqQ6: 'How can I learn slang from other countries?',
  faqA6:
    'Immersion is the best teacher — watching local TV shows, following social media creators from that country, and talking with native speakers all help. A curated resource like Slang Words Online also gives you the context dictionaries miss: who uses the word, whether it is friendly or offensive, and how it actually sounds in a sentence. We cover sixteen countries and thousands of terms, each with definitions, pronunciation guides, and real-world examples.',
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
  countrySlangHeading: (adjective: string) => `${adjective} Slang: Words & Phrases Explained`,
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
  pageNotFound: 'Page Not Found',
  goToHomepage: 'Go to Homepage',
  browseAllSlang: 'Browse All Slang A\u2013Z',
  suggestThisWord: 'Suggest This Word',
  searchByTermOrMeaning: 'Search by term or meaning',
  notFoundSearchLead: (count: number) =>
    `Try typing a term or a definition to locate the expression across all ${count} countries:`,

  // ------------------------------------------------------------------- 500
  serverErrorKicker: '500',
  serverError: 'Server Error',
  serverErrorH1: 'Something went wrong',
  serverErrorBody:
    'Our servers encountered an unexpected issue while assembling this page. This is usually temporary. You can try refreshing the page, searching for a term, or browsing from our home page.',
  reloadPage: 'Reload Page',
  reportError: 'Report Error',
  searchTheDictionary: 'Search the dictionary',
  serverErrorSearchLead:
    'Looking for a specific slang term, idiom, or expression? Search directly below:',


  // ---------------------------------------------------------------- footer
  footerTagline: 'The Global Guide to Slang & Informal Expressions',
  byCountry: 'By country',
  thisSite: 'This site',
  footerNote:
    'Definitions are based on available sources. Where an origin is disputed or uncertain, we say so.',
  copyright: (year: number) => `\u00A9 ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective} slang`,

  // ---------------------------------------------------------------- about us
  aboutH1: 'About Slang Words Online',
  aboutSubtitle:
    'The global guide to living language, street vocabulary, and cultural colloquialisms.',
  aboutIntro:
    'Every language has two lives: the formal version found in grammar textbooks, and the living, dynamic version that actually gets spoken on the street, in cafes, across dinner tables, in songs, and across group chats. <strong>Slang Words Online</strong> exists for the second one.',
  aboutStatCountries: 'Countries & Dialects',
  aboutStatTerms: 'Slang Terms & Phrases',
  aboutStatCategories: 'Everyday Categories',
  aboutStatLanguages: 'Supported Languages',
  aboutWhyHeading: 'Why We Built Slang Words Online',
  aboutWhyP1:
    'Have you ever overheard a phrase in conversation, watched an international series with subtitles, or listened to a song and wondered: <em>“What on earth does that actually mean?”</em>',
  aboutWhyP2:
    'Plugging the phrase into a standard translation tool often yields confusion: translations either translate each word literally (producing nonsense like translating Spanish “de una” as “of one” instead of “right away / absolutely”) or provide an overly polite dictionary substitute that misses the emotional weight.',
  aboutWhyP3:
    'We built Slang Words Online to provide the cultural context, tone, register, and social nuance that textbooks and automated translators leave behind.',
  aboutPillarsHeading: 'What Sets Our Dictionary Apart',
  aboutPillarsLead:
    'A slang dictionary is only worthwhile if it tells you the things a simple search query cannot:',
  aboutPillar1Title: '1. Register & Social Nuance',
  aboutPillar1Body:
    'Is a term affectionate banter between close friends or offensive in polite company? We clearly label register and tone so you never make an awkward faux pas.',
  aboutPillar2Title: '2. Worked, Real-Life Examples',
  aboutPillar2Body:
    'Every term includes natural dialogue and contextual sentences in the original tongue, paired with accurate colloquial and literal translations.',
  aboutPillar3Title: '3. Disputed Origins & Etymology',
  aboutPillar3Body:
    'Internet folklore is full of false etymologies. When an origin story is verified, we cite historical evidence; where it is disputed or folk legend, we explicitly say so.',
  aboutPillar4Title: '4. Romanization & Phonetics',
  aboutPillar4Body:
    'Non-Latin scripts (Cyrillic, Japanese Kanji/Hiragana, Korean Hangul) carry clear romanizations, pronunciation guides, and phonetic tips so you can read and pronounce them with confidence.',
  aboutCulturesHeading: 'Cultures and Dialects Covered',
  aboutCulturesLead: (count: number) =>
    `Our library spans ${count} distinct linguistic and regional hubs, reflecting the rich diversity of informal speech around the world:`,
  aboutEditorialHeading: 'Editorial Philosophy & Community Contributions',
  aboutEditorialP1:
    'Slang is not invented by lexicographers in ivory towers; it is born in schoolyards, comedy clubs, sporting matches, recording studios, and internet chat rooms. Because slang is constantly morphing, Slang Words Online is a living project.',
  aboutEditorialP2:
    'We welcome native speakers, travelers, and linguistics enthusiasts from everywhere to suggest new expressions, report dialect nuances, or provide corrections.',
  aboutConnectHeading: 'Connect With Us',
  aboutConnectBody:
    'Got a slang term from your hometown we haven’t documented yet? Found a regional nuance that deserves mention? We would love to hear from you.',
  aboutContactBtn: 'Contact the Team',
  aboutBrowseBtn: 'Browse All Terms A–Z',

  aboutUs: 'About Us',
  // ---------------------------------------------------------------- contact us
  contactKicker: 'Get in Touch',
  contactSubtitle:
    'We love hearing from language lovers, native speakers, and curious learners worldwide.',
  contactIntro:
    'Whether you want to suggest an undocumented slang expression from your region, suggest a nuance correction, propose an academic partnership, or just say hello — reach out directly to our editorial and development team.',
  contactOfficialEmail: 'Official Contact Email',
  contactEmailLead:
    'Our editorial desk actively monitors this inbox. Send your inquiries, term definitions, or feedback directly.',
  contactCopyEmail: 'Copy Email Address',
  contactCopied: 'Copied to Clipboard!',
  contactCategoriesHeading: 'What You Can Contact Us For',
  contactCat1Title: 'Submit New Slang',
  contactCat1Body:
    'Know a popular street term, viral slang, or regional idiom we haven’t covered? Share the word, meaning, region, and sample sentences.',
  contactCat2Title: 'Dialect Nuance & Corrections',
  contactCat2Body:
    'Is a term used differently in your hometown? Did we list a disputed origin? We prioritize local native accuracy and update entries rapidly.',
  contactCat3Title: 'Features & Feedback',
  contactCat3Body:
    'Ideas for new countries, UI improvements, audio pronunciation suggestions, or technical bug reports.',
  contactCat4Title: 'Partnerships & Media',
  contactCat4Body:
    'Linguistics research, educational institutions, translation inquiries, and press questions.',
  contactResponseTimeLabel: 'Response Time:',
  contactResponseTimeText:
    'Our volunteer editorial team reviews community emails several times weekly. We typically answer inquiries within 24–48 hours.',

  contactUs: 'Contact Us',
  // ---------------------------------------------------------------- privacy policy
  privacyKicker: 'Legal & Privacy',
  privacyLastUpdated: 'Last Updated: September 2026',
  privacyIntro:
    'At Slang Words Online (<a href="/" class="text-primary hover:underline">slangwordsonline.com</a>), your privacy is straightforward. We believe an educational language resource should be transparent, safe, and respectful of everyone who explores it.',
  privacyPrinciplesHeading: 'Our Privacy Principles',
  privacyPrinciple1Title: '1. No Account Required & Free Access',
  privacyPrinciple1Body:
    'You can freely browse all slang entries, explore countries, and search the dictionary without creating an account or providing personal details.',
  privacyPrinciple2Title: '2. We Never Sell Your Data',
  privacyPrinciple2Body:
    'We never monetize, broker, or sell personal visitor data to third parties, data brokers, or advertising networks.',
  privacyPrinciple3Title: '3. Direct & Transparent Communication',
  privacyPrinciple3Body:
    'If you reach out to us by email, your message is used solely to answer your questions or review term suggestions.',
  privacyCollectHeading: 'Information We Collect',
  privacyCollectLead:
    'We collect only the bare minimum information required to deliver, secure, and maintain the website:',
  privacyCollectA_Title: 'A. Anonymous Technical & Log Data',
  privacyCollectA_Body:
    'When you visit our site, our hosting infrastructure automatically records non-identifying technical diagnostic logs (such as request timestamps, browser user agent, operating system, requested page URLs, and anonymized IP addresses). This data is strictly used for server performance monitoring, debugging, and blocking malicious scraping.',
  privacyCollectB_Title: 'B. Client-Side Preferences',
  privacyCollectB_Body:
    'When you toggle between light and dark theme, your selection is stored locally in your browser’s <code>localStorage</code>. This data remains on your personal device and is never transmitted to our servers.',
  privacyCollectC_Title: 'C. Direct Email Correspondence',
  privacyCollectC_Body:
    'If you email our team, we receive your email address, name (if provided), and message details. We retain this communication only as long as needed to address your feedback or update our dictionary.',
  privacyCookiesHeading: 'Cookies and Tracking Technologies',
  privacyCookiesLead:
    'Slang Words Online is designed with a strict privacy-first architecture:',
  privacyCookiesB1:
    '<strong>No Advertising or Tracking Cookies:</strong> We do not use third-party tracking cookies, behavioral tracking pixels, or cross-site tracking tools.',
  privacyCookiesB2:
    '<strong>No Fingerprinting or Profiling:</strong> We do not profile your browsing habits across other websites or attempt to identify individual visitors.',
  privacyCookiesB3:
    '<strong>Functional Local Storage:</strong> We use minimal client-side browser storage solely to preserve your visual theme preference (light or dark mode) so the site remains comfortable to read.',
  privacyUpdatesHeading: 'Policy Updates',
  privacyUpdatesBody:
    'We may revise this Privacy Policy periodically to reflect minor website improvements or operational changes. Any updates will always be published directly on this page with an updated “Last Updated” date.',
  privacyContactBody:
    'If you have any questions, feedback, or concerns regarding our privacy practices, please contact our team directly:',
  privacyContactEmailLabel: 'Email:',

  privacyPolicy: 'Privacy Policy',
  // ---------------------------------------------------------------- terms & conditions
  termsKicker: 'Terms of Service',
  termsLastUpdated: 'Last Updated: September 2026',
  termsIntro:
    'Welcome to Slang Words Online (<a href="/" class="text-primary hover:underline">slangwordsonline.com</a>). By visiting, browsing, or referencing content on our website, you signify your agreement to these Terms & Conditions. Please review them carefully.',
  termsSummaryHeading: 'Important Summary',
  termsSummaryP1Title: 'Descriptive Linguistic Purpose:',
  termsSummaryP1Body:
    'We document how people actually speak. Inclusion of coarse, offensive, or controversial slang is strictly lexicographical and does not indicate endorsement.',
  termsSummaryP2Title: 'Educational Fair Use:',
  termsSummaryP2Body:
    'Content is free to read and cite for personal learning, scholarship, and cultural study. Automated mass scraping and commercial replication are prohibited.',
  termsSummaryP3Title: 'Informational “As Is” Basis:',
  termsSummaryP3Body:
    'Language changes rapidly across regions and generations. Always exercise social judgment when using informal terms.',
  termsSection1Heading: '1. Acceptance of Terms',
  termsSection1Body:
    'By accessing or using Slang Words Online (the “Service” or “Site”), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and our Privacy Policy. If you do not agree to these terms, please do not use the Site.',
  termsSection2Heading: '2. Linguistic Disclaimer & Nature of Content',
  termsSection2Lead:
    'Slang is an organic, raw reflection of human culture and emotion. Consequently, our dictionary contains expressions that encompass:',
  termsSection2B1: 'Mild, moderate, and vulgar profanities.',
  termsSection2B2: 'Intimate, romantic, or sexually colloquial phrases.',
  termsSection2B3: 'Insults, street banter, and provocative slang.',
  termsSection2B4: 'Culturally sensitive, controversial, or reclaimed terminology.',
  termsEditorialStanceLabel: 'Editorial Stance:',
  termsEditorialStanceBody:
    'Slang Words Online documents language descriptively rather than prescriptively. Listing a word does not mean we endorse hostility, prejudice, harassment, or derogatory behavior. We provide register guidance, literal translations, and contextual warnings so readers understand what words mean when encountered in dialogue, media, literature, or conversation.',
  termsSection3Heading: '3. Intellectual Property Rights',
  termsSection3Body:
    'All original textual explanations, contextual annotations, pronunciation breakdowns, curated worked examples, site architecture, and distinctive design elements are the intellectual property of Slang Words Online.',
  termsPermittedUseLabel: 'Permitted Use:',
  termsPermittedUseBody:
    'You are granted a limited, revocable license to access and read the site for personal, non-commercial, academic, and educational purposes. You may quote short definitions with clear attribution and a link back to the corresponding page on <code>slangwordsonline.com</code>.',
  termsProhibitedReproLabel: 'Prohibited Reproduction:',
  termsProhibitedReproBody:
    'You may not systematically scrape, harvest, reproduce, clone, or mirror our dictionary database, entries, or search indexes for inclusion in competing databases, commercial services, or machine learning training sets without prior written authorization.',
  termsSection4Heading: '4. Acceptable Use Policy',
  termsSection4Lead: 'When using the Site, you agree not to:',
  termsSection4B1:
    'Engage in automated attacks, bot crawling that overburdens server capacity, or denial-of-service attempts.',
  termsSection4B2:
    'Probe, scan, or test the vulnerability of the system or network.',
  termsSection4B3:
    'Use the Site or its contact mechanisms to transmit unsolicited spam, advertising, or malicious payloads.',
  termsSection4B4:
    'Misrepresent your identity or impersonate our editorial team.',
  termsSection5Heading: '5. Third-Party Links & External References',
  termsSection5Body:
    'Our website may occasionally link to external websites, academic sources, or language references for etymological attribution. We have no control over the content, security, or privacy policies of third-party platforms and assume no liability for them.',
  termsSection6Heading: '6. Disclaimer of Warranties',
  termsSection6Body1:
    'The Service is provided strictly on an <strong>“AS IS”</strong> and <strong>“AS AVAILABLE”</strong> basis without warranties of any kind, whether express, implied, or statutory.',
  termsSection6Body2:
    'While our editorial team rigorously checks definitions against authentic native speech and historical records, language varies dramatically across towns, generations, social circles, and contexts. Slang Words Online makes no guarantee that using any colloquial term will be appropriate, polite, or well-received in any given social or professional setting.',
  termsSection7Heading: '7. Limitation of Liability',
  termsSection7Body:
    'To the maximum extent permitted by applicable law, Slang Words Online, its creators, editors, and contributors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or inability to use the Service, or from any linguistic misunderstandings, social missteps, or errors contained within the dictionary.',
  termsSection8Heading: '8. Modifications to Terms',
  termsSection8Body:
    'We reserve the right to revise or update these Terms & Conditions at our sole discretion. Any modifications will be posted to this page with an updated “Last Updated” date. Your continued use of the website constitutes acceptance of the modified Terms.',
  termsSection9Heading: '9. Contact Information',
  termsSection9Body:
    'For legal inquiries, copyright notices, terms clarification, or general questions regarding these Terms & Conditions, please reach out to us at:',
  termsContactEmailLabel: 'Email:',

  termsConditions: 'Terms & Conditions',
};
