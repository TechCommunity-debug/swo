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

  // ------------------------------------------- home — SEO about section
  aboutH2: 'Informazioni su Slang Words Online — Il tuo hub globale dello slang',
  aboutP1:
    'Ogni lingua ha due vite: la versione che compare nei libri di testo e quella che si parla davvero per strada, nelle chat di gruppo e al bancone di un bar. Slang Words Online nasce per la seconda. Abbiamo creato questo sito come punto di riferimento sullo slang per chiunque abbia mai colto una parola in una conversazione, nel testo di una canzone o nei sottotitoli e abbia pensato: «Ma cosa diavolo significa?». Che tu stia cercando di decifrare lo slang britannico ascoltato in un pub di Londra, lo slang americano che spopola sui social o le espressioni australiane che un collega usa con disinvoltura, la risposta è qui, spiegata con quel contesto che un traduttore automatico non potrà mai offrirti.',
  aboutP2:
    'Il nostro archivio di espressioni gergali copre attualmente sedici paesi e undici categorie tematiche. Puoi esplorare lo slang britannico e lo slang americano accanto a quello australiano, canadese e irlandese: i rami principali del mondo anglofono. Ci sono poi le raccolte delle lingue romanze: slang messicano, spagnolo, italiano, francese, colombiano, cubano e dominicano, ognuno specchio di un dialetto distinto con il suo ritmo e il suo carattere. Trattiamo inoltre lo slang tedesco, russo, giapponese e coreano: quattro universi linguistici in cui la distanza dalla lingua accademica è tale che lo slang agisce quasi come un registro indipendente.',
  aboutP3:
    'Cosa distingue questa raccolta da una rapida traduzione su Google? Soprattutto la profondità. Ogni voce include la definizione — spesso più di una, perché le parole gergali raramente hanno un solo significato — accompagnata da una guida alla pronuncia reale, ovvero come suonano davvero nella voce viva delle persone. Forniamo esempi pratici: frasi complete nella lingua originale con traduzione riga per riga, per farti vedere la parola all’opera in un contesto autentico. E ti diciamo le cose che contano di più e che i dizionari trascurano: se un termine è affettuoso o aggressivo, se si può usare in pubblico e se la simpatica etimologia che circola su internet è reale o una leggenda.',
  aboutP4:
    'I temi sono organizzati esattamente come le persone cercano. Invece di riversare centinaia di termini su una sola pagina, li abbiamo suddivisi in categorie che riflettono gli scopi pratici dello slang: Slang per approvazione e complimenti, Slang per saluti e appellativi, Slang per insulti e lamentele, Slang per descrivere le persone, Slang per denaro e lavoro, Slang per cibo e bevande, Slang per feste e serate, Slang per amore e flirt, Slang per emozioni e reazioni, Parole riempitive e intercalari, e Slang per le cose di ogni giorno. Ognuna vive sotto un paese specifico, perché lo stesso argomento — il denaro o gli insulti — produce un lessico radicalmente diverso a seconda di chi parla e dove si trova.',
  aboutP5:
    'Questo sito è completamente gratuito, aggiornato di frequente e disponibile in nove lingue affinché chi non parla inglese possa consultare l’intero repertorio nella propria lingua madre. Considera Slang Words Online come il dizionario di slang che hai sempre desiderato: approfondito, sincero e curato da persone a cui importa davvero che tu non faccia brutte figure al momento sbagliato. Inizia subito: scegli un paese, scegli un tema o cerca direttamente la parola che hai appena sentito.',

  // ----------------------------------------- home — FAQ section
  faqH2: 'Domande frequenti sullo slang',
  faqQ1: 'Che cosa sono le parole gergali o di slang?',
  faqA1:
    'Le parole di slang sono espressioni informali o idiomatiche molto più diffuse nella lingua parlata che in quella scritta. Spesso nascono all’interno di specifici gruppi sociali, sottoculture o aree geografiche e assumono significati differenti rispetto a quelli riportati nei dizionari convenzionali. Lo slang esprime identità, ironia o atteggiamento e tende a evolversi molto più in fretta del lessico formale: un’espressione di tendenza dieci anni fa oggi può sembrare superata.',
  faqQ2: 'Qual è lo slang più recente?',
  faqA2:
    'Lo slang si trasforma senza sosta, con nuovi vocaboli che spuntano ogni settimana su piattaforme come TikTok, Twitter/X e Instagram. Tra gli esempi recenti spiccano «delulu» (ottimista in modo irrealistico), «rizz» (carisma e fascino nel corteggiare), «slay» (fare qualcosa alla perfezione) e «ate» (aver spaccato, aver fatto faville). Il modo più veloce per tenersi aggiornati è seguire le tendenze online o esplorare le nostre schede per paese regolarmente aggiornate.',
  faqQ3: 'In cosa differisce lo slang dal linguaggio formale?',
  faqA3:
    'Il linguaggio formale segue regole grammaticali e lessicali codificate ed è impiegato in contesti professionali, accademici o istituzionali. Lo slang, all’opposto, è spontaneo, rompe spesso le convenzioni sintattiche ed è legato a comunità o fasce d’età ben precise. Una parola come «cool» è compresa ovunque, ma espressioni come «chuffed» (inglese britannico per entusiasta) o «naco» (messicano per pacchiano/volgare) si comprendono appieno solo conoscendo la cultura locale.',
  faqQ4: 'Perché paesi diversi hanno slang diversi?',
  faqA4:
    'Lo slang è plasmato dalla cultura locale, dalla storia e dalle dinamiche sociali quotidiane. Perfino nazioni che condividono la stessa lingua — come Stati Uniti, Regno Unito e Australia per l’inglese, o Spagna, Messico e Colombia per lo spagnolo — sviluppano gerghi profondamente differenti. Questo accade perché lo slang riflette la vita reale: cibo, musica, umorismo, classi sociali e media lasciano un’impronta indelebile sul parlato informale.',
  faqQ5: 'È opportuno usare lo slang nelle conversazioni di tutti i giorni?',
  faqA5:
    'Assolutamente sì: lo slang è una componente naturale della comunicazione umana e saperlo dosare dimostra padronanza linguistica e sintonia culturale. Il segreto sta nel contesto: è perfetto nelle chiacchierate informali, nei messaggi e sui social network, mentre risulterebbe fuori luogo in un colloquio di lavoro, in un saggio accademico o in un’email formale. Conoscere il registro adatto è una vera e propria competenza comunicativa.',
  faqQ6: 'Come posso imparare lo slang di altri paesi?',
  faqA6:
    'L’immersione diretta è la migliore maestra: guardare serie TV in lingua originale, seguire creator del luogo sui social e parlare con madrelingua sono tutti ottimi metodi. Una risorsa approfondita come Slang Words Online ti offre in più quel contesto che i dizionari trascurano: chi usa il termine, se è affettuoso o offensivo e come suona davvero all’interno di una frase. Copriamo sedici paesi e migliaia di voci con definizioni, pronunce ed esempi di vita vissuta.',

  // --------------------------------------------------------------- country
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
  pageNotFound: 'Pagina non trovata',
  goToHomepage: 'Vai alla home page',
  browseAllSlang: 'Esplora tutto lo slang dalla A alla Z',
  suggestThisWord: 'Suggerisci questa parola',
  searchByTermOrMeaning: 'Cerca per termine o per significato',
  notFoundSearchLead: (count: number) =>
    `Prova a digitare un termine o una definizione per trovare l’espressione in tutti i ${count} paesi:`,

  // ------------------------------------------------------------------- 500
  serverErrorKicker: '500',
  serverError: 'Errore del server',
  serverErrorH1: 'Qualcosa è andato storto',
  serverErrorBody:
    'I nostri server hanno riscontrato un problema imprevisto durante il caricamento di questa pagina. Di solito è un problema temporaneo. Puoi provare a ricaricare la pagina, cercare un termine o ripartire dalla nostra home page.',
  reloadPage: 'Ricarica pagina',
  reportError: 'Segnala un errore',
  searchTheDictionary: 'Cerca nel dizionario',
  serverErrorSearchLead:
    'Cerchi un termine di slang, un modo di dire o un’espressione specifica? Cerca direttamente qui sotto:',


  footerTagline: 'La guida globale allo slang e alle espressioni informali',
  byCountry: 'Per paese',
  thisSite: 'Questo sito',
  footerNote:
    'Le definizioni si basano sulle fonti disponibili. Quando un’origine è controversa o incerta, lo diciamo.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `slang ${adjective.toLowerCase()}`,

  // ---------------------------------------------------------------- about us
  aboutH1: 'Chi siamo: Slang Words Online',
  aboutSubtitle:
    'La guida globale alla lingua viva, al lessico di strada e ai modi di dire popolari.',
  aboutIntro:
    'Ogni lingua vive due vite parallele: quella formale delle grammatiche e quella viva e spontanea parlata per strada, nei bar, a tavola, nella musica e nelle chat di gruppo. <strong>Slang Words Online</strong> nasce per raccontare la seconda.',
  aboutStatCountries: 'Paesi e dialetti',
  aboutStatTerms: 'Termini ed espressioni gergali',
  aboutStatCategories: 'Categorie quotidiane',
  aboutStatLanguages: 'Lingue supportate',
  aboutWhyHeading: 'Perché abbiamo creato Slang Words Online',
  aboutWhyP1:
    'Ti è mai capitato di cogliere una frase al volo, guardare una serie con i sottotitoli o ascoltare una canzone chiedendoti: <em>«Ma cosa significa davvero?»</em>',
  aboutWhyP2:
    'Inserire l’espressione in un traduttore automatico crea spesso disorientamento: o traduce parola per parola (generando assurdità come tradurre lo spagnolo «de una» con «di una» anziché «subito / senz’altro») oppure offre un sinonimo formale da dizionario che appiattisce ogni sfumatura emotiva.',
  aboutWhyP3:
    'Abbiamo costruito Slang Words Online per restituire il contesto culturale, il tono, il registro e le sottigliezze sociali che manuali e traduttori automatici tralasciano.',
  aboutPillarsHeading: 'Cosa rende unico il nostro dizionario',
  aboutPillarsLead:
    'Un dizionario di slang ha valore solo se spiega ciò che un comune motore di ricerca non può svelare:',
  aboutPillar1Title: '1. Registro e sfumature sociali',
  aboutPillar1Body:
    'È una battuta scherzosa e affettuosa tra amici o una parola offensiva in contesti formali? Indichiamo sempre registro e tono per evitare spiacevoli gaffe.',
  aboutPillar2Title: '2. Esempi autentici e contestualizzati',
  aboutPillar2Body:
    'Ogni voce include dialoghi naturali e frasi reali nella lingua originale, accompagnati da traduzioni colloquiali e letterali accurate.',
  aboutPillar3Title: '3. Origini storiche ed etimologie discusse',
  aboutPillar3Body:
    'Il web pullula di false etimologie e leggende metropolitane. Quando l’origine è documentata storicamente, citiamo le prove; dove si tratta di credenze popolari o ipotesi aperte, lo diciamo chiaramente.',
  aboutPillar4Title: '4. Traslitterazione e pronuncia fonetica',
  aboutPillar4Body:
    'I sistemi di scrittura non latini (cirillico, kanji/hiragana giapponese, hangul coreano) sono affiancati da romanizzazioni chiare e consigli fonetici per leggere e pronunciare ogni termine in sicurezza.',
  aboutCulturesHeading: 'Culture e parlate documentate',
  aboutCulturesLead: (count: number) =>
    `La nostra raccolta copre ${count} aree linguistiche e geografiche distinte, valorizzando la ricchezza espressiva del linguaggio informale in tutto il mondo:`,
  aboutEditorialHeading: 'Filosofia editoriale e contributo della community',
  aboutEditorialP1:
    'Lo slang non viene inventato dai linguisti nelle aule universitarie: nasce nei cortili delle scuole, nei comedy club, allo stadio, nelle sale d’incisione e su internet. Poiché la lingua si trasforma costantemente, Slang Words Online è un progetto in continua evoluzione.',
  aboutEditorialP2:
    'Accogliamo con entusiasmo madrelingua, viaggiatori e appassionati di lingue da tutto il mondo pronti a suggerire nuove espressioni, segnalare varianti locali o inviare correzioni.',
  aboutConnectHeading: 'Mettiti in contatto con noi',
  aboutConnectBody:
    'Conosci un modo di dire della tua città che non abbiamo ancora catalogato? Hai notato una particolarità regionale da aggiungere? Ci farebbe molto piacere leggerti.',
  aboutContactBtn: 'Contatta il team',
  aboutBrowseBtn: 'Tutto lo slang dalla A alla Z',

  aboutUs: 'Chi siamo',
  // ---------------------------------------------------------------- contact us
  contactKicker: 'Mettiti in contatto',
  contactSubtitle:
    'Ci fa sempre piacere ascoltare appassionati di lingue, madrelingua e studenti curiosi di tutto il mondo.',
  contactIntro:
    'Che tu voglia suggerire un modo di dire della tua regione non ancora documentato, segnalare una correzione, proporre una collaborazione accademica o semplicemente salutare, scrivi direttamente alla nostra redazione.',
  contactOfficialEmail: 'Email ufficiale di contatto',
  contactEmailLead:
    'La nostra redazione monitora costantemente questa casella. Invia direttamente richieste, definizioni o commenti.',
  contactCopyEmail: 'Copia indirizzo email',
  contactCopied: 'Copiato negli appunti!',
  contactCategoriesHeading: 'Per cosa puoi contattarci',
  contactCat1Title: 'Segnala un nuovo slang',
  contactCat1Body:
    'Conosci un termine di strada, uno slang virale o un modo di dire regionale che manca? Condividi la parola, il significato, la zona e frasi di esempio.',
  contactCat2Title: 'Sfumature dialettali e correzioni',
  contactCat2Body:
    'Un termine ha un uso diverso nella tua città? Abbiamo riportato un’origine controversa? Diamo la massima priorità alla precisione sul territorio.',
  contactCat3Title: 'Funzionalità e suggerimenti',
  contactCat3Body:
    'Idee per nuovi paesi, miglioramenti grafici, suggerimenti per la pronuncia audio o segnalazioni di bug.',
  contactCat4Title: 'Collaborazioni e media',
  contactCat4Body:
    'Ricerche linguistiche, istituzioni educative, richieste di traduzione e contatti per la stampa.',
  contactResponseTimeLabel: 'Tempi di risposta:',
  contactResponseTimeText:
    'La nostra redazione legge i messaggi della community diverse volte a settimana. Di solito rispondiamo entro 24–48 ore.',

  contactUs: 'Contatti',
  // ---------------------------------------------------------------- privacy policy
  privacyKicker: 'Informazioni legali e privacy',
  privacyLastUpdated: 'Ultimo aggiornamento: Settembre 2026',
  privacyIntro:
    'Su Slang Words Online (<a href="/it/" class="text-primary hover:underline">slangwordsonline.com</a>), la tutela della tua privacy è chiara e immediata. Riteniamo che una risorsa didattica e linguistica debba essere trasparente, sicura e rispettosa di ogni visitatore.',
  privacyPrinciplesHeading: 'I nostri principi sulla privacy',
  privacyPrinciple1Title: '1. Nessun account richiesto e accesso libero',
  privacyPrinciple1Body:
    'Puoi consultare liberamente tutte le voci gergali, esplorare i paesi e cercare nel dizionario senza registrarti o condividere dati personali.',
  privacyPrinciple2Title: '2. Non vendiamo mai i tuoi dati',
  privacyPrinciple2Body:
    'Non monetizziamo, cediamo né vendiamo informazioni personali dei visitatori a terzi, broker di dati o network pubblicitari.',
  privacyPrinciple3Title: '3. Comunicazione diretta e trasparente',
  privacyPrinciple3Body:
    'Se ci scrivi via email, il tuo messaggio verrà utilizzato esclusivamente per rispondere alle tue domande o esaminare le tue proposte lessicali.',
  privacyCollectHeading: 'Dati che raccogliamo',
  privacyCollectLead:
    'Raccogliamo solo il minimo indispensabile per erogare, proteggere e mantenere operativo il sito:',
  privacyCollectA_Title: 'A. Dati tecnici e registri anonimi',
  privacyCollectA_Body:
    'Quando visiti il nostro sito, l’infrastruttura di hosting memorizza registri tecnici di diagnostica non identificativi (data e ora delle richieste, browser, sistema operativo, URL visualizzati e indirizzi IP anonimizzati). Tali dati servono esclusivamente per la stabilità del servizio e la prevenzione di abusi.',
  privacyCollectB_Title: 'B. Preferenze sul dispositivo',
  privacyCollectB_Body:
    'Quando passi dal tema chiaro a quello scuro, la tua scelta viene salvata localmente nel <code>localStorage</code> del tuo browser. Questi dati risiedono esclusivamente sul tuo dispositivo e non vengono inviati ai nostri server.',
  privacyCollectC_Title: 'C. Corrispondenza via email',
  privacyCollectC_Body:
    'Se scrivi al nostro team, riceviamo il tuo indirizzo email, il nome (se indicato) e il testo del messaggio. Conserviamo queste comunicazioni solo per il tempo necessario a gestire il feedback o aggiornare il dizionario.',
  privacyCookiesHeading: 'Cookie e strumenti di tracciamento',
  privacyCookiesLead:
    'Slang Words Online è progettato ponendo la massima attenzione alla riservatezza:',
  privacyCookiesB1:
    '<strong>Nessun cookie pubblicitario o di profilazione:</strong> Non impieghiamo cookie di tracciamento di terze parti, pixel comportamentali o strumenti di tracciamento cross-site.',
  privacyCookiesB2:
    '<strong>Nessun fingerprinting o profilazione:</strong> Non monitoriamo la tua navigazione su altri siti web né tentiamo di risalire all’identità dei singoli utenti.',
  privacyCookiesB3:
    '<strong>Memoria locale solo per esigenze funzionali:</strong> Usiamo esclusivamente la memoria minima del browser per ricordare la tua preferenza visiva (modalità chiara o scura).',
  privacyUpdatesHeading: 'Aggiornamenti dell’informativa',
  privacyUpdatesBody:
    'Possiamo aggiornare periodicamente la presente Informativa sulla privacy per adeguarla a piccole migliorie o novità operative. Ogni modifica verrà pubblicata su questa pagina con la data di revisione.',
  privacyContactBody:
    'Per qualsiasi domanda, chiarimento o dubbio riguardo alla nostra gestione della privacy, puoi contattarci direttamente:',
  privacyContactEmailLabel: 'Email:',

  privacyPolicy: 'Informativa sulla privacy',
  // ---------------------------------------------------------------- terms & conditions
  termsKicker: 'Termini di Servizio',
  termsLastUpdated: 'Ultimo aggiornamento: settembre 2026',
  termsIntro:
    'Benvenuto su Slang Words Online (<a href="/it/" class="text-primary hover:underline">slangwordsonline.com</a>). Accedendo, navigando o consultando i contenuti del nostro sito, accetti i presenti Termini e Condizioni. Ti invitiamo a leggerli con cura.',
  termsSummaryHeading: 'Sintesi importante',
  termsSummaryP1Title: 'Finalità linguistica descrittiva:',
  termsSummaryP1Body:
    'Documentiamo il modo in cui le persone parlano concretamente nella vita reale. L’inclusione di espressioni gergali, colorite o controverse ha uno scopo puramente lessicografico e non rappresenta un’approvazione.',
  termsSummaryP2Title: 'Uso didattico corretto:',
  termsSummaryP2Body:
    'I contenuti sono liberamente consultabili e citabili per studio personale, ricerca linguistica e approfondimento culturale. Lo scraping massivo automatizzato e la replica a scopi commerciali sono vietati.',
  termsSummaryP3Title: 'Fornitura informativa «così com’è»:',
  termsSummaryP3Body:
    'I linguaggi informali evolvono rapidamente tra regioni e generazioni diverse. Valuta sempre il contesto sociale prima di utilizzare espressioni colloquiali.',
  termsSection1Heading: '1. Accettazione dei Termini',
  termsSection1Body:
    'Accedendo o utilizzando Slang Words Online (il «Servizio» o «Sito»), confermi di aver letto, compreso e accettato di essere vincolato dai presenti Termini e dalla nostra Informativa sulla Privacy. Se non concordi con queste condizioni, ti chiediamo di non utilizzare il Sito.',
  termsSection2Heading: '2. Avvertenza linguistica e natura dei contenuti',
  termsSection2Lead:
    'Lo slang è un riflesso spontaneo, autentico e diretto della cultura e delle emozioni umane. Pertanto, il nostro dizionario raccoglie espressioni che comprendono:',
  termsSection2B1: 'Linguaggio colloquiale, volgarità lievi o espressioni forti.',
  termsSection2B2: 'Modi di dire intimi, romantici o del parlato affettivo.',
  termsSection2B3: 'Insulti, battute da strada ed espressioni provocatorie.',
  termsSection2B4: 'Termini culturalmente sensibili, controversi o risignificati.',
  termsEditorialStanceLabel: 'Linea editoriale:',
  termsEditorialStanceBody:
    'Slang Words Online descrive la lingua in modo descrittivo e non prescrittivo. Includere un termine non significa approvare ostilità, pregiudizi o comportamenti offensivi. Forniamo indicazioni di registro, traduzioni letterali e note contestuali affinché chi legge comprenda il significato dei vocaboli incontrati in conversazioni, film o libri.',
  termsSection3Heading: '3. Diritti di proprietà intellettuale',
  termsSection3Body:
    'Tutte le spiegazioni originali, le note contestuali, le guide alla pronuncia, gli esempi d’uso elaborati, l’architettura del sito e gli elementi visivi distintivi sono proprietà intellettuale di Slang Words Online.',
  termsPermittedUseLabel: 'Uso consentito:',
  termsPermittedUseBody:
    'Ti viene concessa una licenza limitata e revocabile per consultare il sito a scopi personali, non commerciali, educativi e di studio. È consentito citare brevi definizioni indicando chiaramente la fonte e inserendo un link alla rispettiva pagina su <code>slangwordsonline.com</code>.',
  termsProhibitedReproLabel: 'Riproduzione vietata:',
  termsProhibitedReproBody:
    'È fatto espresso divieto di estrarre sistematicamente dati tramite bot (scraping), duplicare, clonare o creare copie mirror del nostro dizionario, delle schede o degli indici per servizi concorrenti, attività commerciali o dataset di addestramento per modelli di intelligenza artificiale senza preventiva autorizzazione scritta.',
  termsSection4Heading: '4. Politica di utilizzo corretto',
  termsSection4Lead: 'Nell’utilizzare il Sito, ti impegni a non:',
  termsSection4B1:
    'Effettuare attacchi automatizzati, crawling massivo che sovraccarichi i server o tentativi di interruzione del servizio (DoS).',
  termsSection4B2:
    'Testare, sondare o scansionare vulnerabilità dei nostri sistemi o reti.',
  termsSection4B3:
    'Utilizzare il sito o i canali di contatto per inviare pubblicità indesiderata (spam) o script dannosi.',
  termsSection4B4:
    'Fornire false generalità o impersonare membri della redazione.',
  termsSection5Heading: '5. Collegamenti a terzi e fonti esterne',
  termsSection5Body:
    'Il nostro sito può contenere collegamenti a siti esterni, studi universitari o fonti etimologiche. Non abbiamo alcun controllo sui loro contenuti, politiche di privacy o sicurezza, e decliniamo qualsiasi responsabilità al riguardo.',
  termsSection6Heading: '6. Esclusione di garanzie',
  termsSection6Body1:
    'Il Servizio è fornito rigorosamente <strong>«COSÌ COM’È»</strong> e <strong>«COME DISPONIBILE»</strong>, senza garanzie di alcun tipo, esplicite o implicite.',
  termsSection6Body2:
    'Sebbene la redazione verifichi accuratamente le definizioni con parlanti nativi e fonti documentate, il linguaggio gergale varia sensibilmente a seconda della città, dell’età e dell’ambiente sociale. Slang Words Online non garantisce che l’uso di un termine sia opportuno o ben accetto in un determinato contesto personale o professionale.',
  termsSection7Heading: '7. Limitazione di responsabilità',
  termsSection7Body:
    'Nella misura massima consentita dalla legge, Slang Words Online e i suoi collaboratori non saranno responsabili per danni diretti o indiretti derivanti dall’utilizzo del sito, né per malintesi verbali, gaffe o equivoci linguistici verificatisi nell’uso dei termini.',
  termsSection8Heading: '8. Modifiche ai Termini',
  termsSection8Body:
    'Ci riserviamo il diritto di aggiornare i presenti Termini e Condizioni a nostra discrezione. Eventuali modifiche saranno pubblicate su questa pagina con l’indicazione della data di aggiornamento. La continuazione della navigazione implica l’accettazione dei termini aggiornati.',
  termsSection9Heading: '9. Contatti',
  termsSection9Body:
    'Per richieste legali, segnalazioni sul diritto d’autore o chiarimenti relativi a questi Termini e Condizioni, contattaci via email:',
  termsContactEmailLabel: 'Email:',

  termsConditions: 'Termini e condizioni',
};
