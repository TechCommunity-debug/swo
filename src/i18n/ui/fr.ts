import type { Strings } from './types';
import { plural } from './plural';

export const fr: Strings = {
  skipToContent: 'Aller au contenu',
  mainNav: 'Principal',
  countriesNav: 'Pays',
  sectionsNav: 'Sections',
  openMenu: 'Ouvrir le menu',
  breadcrumb: 'Fil d’Ariane',
  home: 'Accueil',
  browse: 'Index A–Z',
  search: 'Rechercher',
  language: 'Langue',
  jumpToLetter: 'Aller à une lettre',
  termsBeginningWith: (letter: string) => `Termes commençant par ${letter}`,

  homeH1: 'Dictionnaire d’argot : sens, exemples et plus',
  homeLead: (terms: number, countries: number) =>
    `Découvrez la signification des mots d’argot, locutions, acronymes et expressions du monde entier. Parcourez notre dictionnaire d’argot pour trouver définitions, phrases d’exemple, prononciation, origines et contexte du langage populaire.`,
  searchPlaceholder: 'Chercher des mots d’argot…',
  searchPlaceholderCompact: 'Chercher dans l’argot…',
  searchLabel: 'Rechercher un terme d’argot',
  searchHint:
    'Les résultats s’affichent en dessous à mesure que vous tapez. Appuyez sur Entrée pour ouvrir la page de recherche complète.',
  tryTerms: 'Essayez',
  pickCountry: 'Explorer l’argot par pays',
  pickCountryLead:
    'L’argot appartient à un lieu avant d’appartenir à une langue. Commencez là où ces mots se disent pour de bon.',
  termsCount: (n: number) => plural(n, 'terme', 'termes'),
  popularTopics: 'Sujets populaires',
  popularTopicsLead:
    'Les pages que les gens cherchent vraiment : un pays, un sujet, et tous les termes que nous avons dessus.',
  oneWordEach: 'Un mot de chaque pays',
  oneWordEachLead:
    'Un aperçu de ce à quoi ressemble une fiche complète : les sens, des exemples travaillés avec leur traduction, et l’origine quand elle est réellement connue.',
  editorialH2: 'Le contexte que vous ne trouverez pas dans une appli de dictionnaire',
  editorialBody:
    'Un dictionnaire d’argot ne vaut quelque chose que s’il vous dit ce qu’une appli de traduction ne peut pas dire : si un mot est affectueux ou hostile, à qui vous pouvez l’adresser, et si l’histoire d’origine que tout le monde répète tient debout. Quand un point est contesté, nous disons qu’il est contesté. Quand un mot est une insulte discriminatoire, nous le disons aussi, et nous le référençons quand même, parce qu’il faut bien le comprendre quand on l’entend.',

  // ------------------------------------------- home — SEO about section
  aboutH2: 'À propos de Slang Words Online — Votre répertoire mondial d’argot',
  aboutP1:
    'Chaque langue a deux vies : la version des manuels scolaires et celle que l’on parle réellement dans la rue, dans les discussions de groupe et au comptoir d’un café. Slang Words Online existe pour la seconde. Nous avons conçu ce site comme un carrefour de l’argot pour toutes celles et ceux qui ont déjà entendu un mot dans une conversation, une chanson ou un sous-titre en se demandant : « Mais qu’est-ce que ça veut dire ? ». Que vous cherchiez à décoder l’argot britannique glané dans un pub londonien, l’argot américain omniprésent sur les réseaux sociaux ou les expressions australiennes qu’un collègue glisse sans hésiter, la réponse est ici, expliquée avec le contexte qu’une application de traduction ne vous donnera jamais.',
  aboutP2:
    'Notre bibliothèque d’argot couvre actuellement seize pays et onze catégories thématiques. Vous pouvez explorer l’argot britannique et l’argot américain aux côtés de l’argot australien, canadien et irlandais — les grandes branches du monde anglophone. Viennent ensuite les collections de langues romanes : argot mexicain, espagnol, italien, français, colombien, cubain et dominicain, chacune reflétant un dialecte distinct avec son rythme et sa gouaille propres. Nous couvrons également l’argot allemand, russe, japonais et coréen — quatre lexiques où l’écart avec la langue académique est tel que l’argot fonctionne presque comme un registre autonome.',
  aboutP3:
    'Qu’est-ce qui distingue notre collection d’une simple recherche sur Google Traduction ? La profondeur, avant tout. Chaque fiche comprend la définition — souvent multiple, car un mot d’argot a rarement un seul sens — accompagnée d’un guide phonétique qui décrit la prononciation réelle, et non théorique. Nous fournissons des exemples concrets : des phrases complètes en langue originale, traduites mot à mot, pour observer le terme en situation réelle. Et nous vous précisons ce qui compte le plus et que les dictionnaires négligent : si le terme est affectueux ou agressif, s’il peut être prononcé en société, et si la charmante étymologie qui circule sur internet est authentique ou inventée.',
  aboutP4:
    'Les thématiques sont organisées selon la manière dont les internautes effectuent leurs recherches. Plutôt que d’entasser des centaines d’entrées sur une seule page, nous les répartissons par catégories correspondant aux usages du langage familier : Argot pour complimenter et approuver, Argot pour saluer et interpeller, Argot pour insulter et se plaindre, Argot pour désigner les gens, Argot pour l’argent et le travail, Argot pour manger et boire, Argot pour sortir et faire la fête, Argot pour séduire et flirter, Argot pour réagir et s’émouvoir, Tics de langage et Argot du quotidien. Chacune est rattachée à un pays précis, car le même thème — l’argent ou les insultes — génère un vocabulaire radicalement différent selon qui s’exprime et d’où l’on parle.',
  aboutP5:
    'Ce site est entièrement gratuit, régulièrement enrichi et disponible en neuf langues afin que les non-anglophones puissent également explorer l’ensemble du lexique dans leur langue maternelle. Considérez Slang Words Online comme le dictionnaire d’argot que vous avez toujours souhaité avoir : rigoureux, sincère et rédigé par des passionnés qui veillent à vous éviter tout faux pas au mauvais moment. Lancez-vous : choisissez un pays, une catégorie ou cherchez directement le mot que vous venez d’entendre.',

  // ----------------------------------------- home — FAQ section
  faqH2: 'Foire aux questions sur l’argot',
  faqQ1: 'Qu’est-ce qu’un mot d’argot ?',
  faqA1:
    'L’argot désigne des mots ou des expressions familières beaucoup plus courants à l’oral qu’à l’écrit. Ils prennent souvent racine au sein de groupes sociaux particuliers, de sous-cultures ou de régions précises, et prennent des significations bien différentes de leurs définitions dans les dictionnaires traditionnels. L’argot exprime une identité, un humour ou une attitude, et se transforme bien plus rapidement que la langue soutenue : un mot branché il y a dix ans peut sembler désuet aujourd’hui.',
  faqQ2: 'Quel est l’argot le plus récent ?',
  faqA2:
    'L’argot se renouvelle sans cesse, de nouveaux termes émergeant chaque semaine sur les plateformes comme TikTok, Twitter/X ou Instagram. Parmi les exemples récents, on trouve « delulu » (follement optimiste), « rizz » (charme, capacité à draguer), « slay » (exceller, assurer) et « ate » (faire un sans-faute, cartonner). Le meilleur moyen de rester dans le coup est de suivre les tendances en ligne ou de consulter nos fiches régulièrement mises à jour par pays.',
  faqQ3: 'En quoi l’argot diffère-t-il du langage formel ?',
  faqA3:
    'Le langage formel respecte les règles grammaticales et lexicales établies et s’emploie dans les contextes professionnels, universitaires ou officiels. L’argot, au contraire, est spontané, s’affranchit souvent des conventions et reste attaché à des communautés ou des générations précises. Un mot comme « cool » est universellement compris, mais des expressions comme « chuffed » (terme britannique pour ravi) ou « naco » (terme mexicain pour kitch ou ringard) ne prennent tout leur sens que si l’on connaît la culture locale.',
  faqQ4: 'Pourquoi chaque pays a-t-il son propre argot ?',
  faqA4:
    'L’argot est façonné par la culture locale, l’histoire et les dynamiques sociales. Même des pays partageant la même langue — comme les États-Unis, le Royaume-Uni et l’Australie pour l’anglais, ou la France, la Belgique et le Québec pour le français — développent des lexiques familiers totalement différents. L’argot reflète le quotidien vécu : cuisine, musique, humour, réalités sociales et médias impriment leur marque sur la parole informelle.',
  faqQ5: 'Peut-on utiliser de l’argot au quotidien ?',
  faqA5:
    'Tout à fait : l’argot fait partie intégrante de la communication vivante, et le manier avec pertinence témoigne d’une réelle aisance culturelle et linguistique. Tout est affaire de contexte : il convient parfaitement aux conversations décontractées, aux SMS et aux réseaux sociaux, mais se révèle inadapté lors d’un entretien d’embauche, dans un mémoire universitaire ou un courriel professionnel. Maîtriser le passage d’un registre à l’autre est en soi une véritable compétence linguistique.',
  faqQ6: 'Comment apprendre l’argot d’autres pays ?',
  faqA6:
    'L’immersion reste la méthode reine : regarder des séries locales, suivre des créateurs de contenu du pays et échanger avec des locuteurs natifs sont d’une aide précieuse. Une ressource de référence comme Slang Words Online vous apporte en plus le contexte absent des dictionnaires : qui emploie le terme, s’il est chaleureux ou blessant, et comment il s’intègre naturellement dans une phrase. Nous couvrons seize pays et des milliers de mots, avec définitions, guides de prononciation et exemples authentiques.',

  // --------------------------------------------------------------- country
  startHere: 'Commencez par ceux-là',
  startHereLead:
    'Les termes ci-dessous sont ceux qui portent le plus de détail d’usage : registre, origine et les situations où ils dérapent. Ce sont ceux qu’il vaut la peine de lire en entier avant le reste.',
  byTopic: 'Par sujet',
  byTopicLead: (adjective: string) =>
    `Chaque page ci-dessous réunit, côte à côte, tous les termes d’argot ${adjective} que nous avons sur un même sujet.`,
  allTermsAz: (adjective: string) => `Tout l’argot ${adjective} de A à Z`,
  termsWithExamples: (n: number) =>
    `${plural(n, 'terme', 'termes')}, chacun avec ses sens et des exemples travaillés.`,
  slangFor: (adjective: string, topic: string) => `Argot ${adjective} sur ${topic}`,

  categoryLead: (n: number, adjective: string, topic: string) =>
    `${plural(n, `terme d’argot ${adjective}`, `termes d’argot ${adjective}`)} sur ${topic}, chacun avec son sens, sa prononciation et un exemple en situation.`,
  otherTopicsIn: (adjective: string) => `Autres sujets en argot ${adjective}`,
  sameTopicElsewhere: (topic: string) => `${topic} : l’argot ailleurs`,
  sameTopicElsewhereLead:
    'Le même sujet dans les autres pays du site : le moyen le plus rapide de voir à quel point quatre langues disent différemment une même chose.',

  aSlangTerm: (languageName: string) => `Un terme d’argot ${languageName.toLowerCase()}.`,
  countrySlangHeading: (adjective: string) => `Argot ${adjective} : mots et expressions expliqués`,
  moreSenses: (n: number) => `+${n} ${n === 1 ? 'autre sens' : 'autres sens'}`,
  useWithCare: 'À employer avec précaution',
  browseAll: (adjective: string) => `Voir tout l’argot ${adjective}`,
  beforeYouUse: 'Avant de l’employer',
  whatItMeans: 'Ce que ça veut dire',
  literally: 'Littéralement :',
  inUse: 'En situation',
  examplesWithTranslations: 'Exemples avec traduction',
  note: 'Note :',
  whereItComesFrom: 'D’où ça vient',
  firstAttested: (when: string) => `Première attestation : ${when}`,
  otherForms: 'Autres formes',
  spellingsAndVariants: 'Graphies et variantes :',
  similarTerms: 'Termes proches :',
  romanizedAs: 'Romanisation',
  nearbyTerms: 'Termes voisins',
  previous: 'Précédent',
  next: 'Suivant',
  relatedTerms: 'Termes liés',
  alsoUsedIn: 'Aussi présent dans',
  topics: 'Sujets',
  moreTermsLikeThis: (adjective: string) => `D’autres termes d’argot ${adjective} du même genre`,
  updatedOn: (date: string) => `Mis à jour le ${date}.`,

  browseH1: 'Tous les termes, de A à Z',
  browseLead: (terms: number, countries: number) =>
    `${plural(terms, 'terme du site', 'termes du site')} réunis dans un seul index alphabétique, pour ${plural(countries, 'pays', 'pays')}. Le classement ignore les accents : güey se range donc avec les G.`,

  searchH1: 'Recherche',
  searchLead:
    'Cherchez par terme ou par sens : taper « bourré » retrouve les mots qui le disent dans toutes les langues du site.',
  startTyping: 'Commencez à taper pour voir des résultats.',
  resultCount: (n: number) => `${n} résultat${n === 1 ? '' : 's'}`,
  noMatches: (q: string) => `Rien ne correspond à « ${q} ».`,
  noMatchesTryBrowse: 'Essayez un mot plus court, ou parcourez l’index A–Z.',

  notFoundKicker: '404',
  notFoundH1: 'Ce mot-là n’est pas ici',
  notFoundBody:
    'Cette page n’existe pas : le terme n’est peut-être pas encore dans le dictionnaire, ou le lien n’est plus à jour. Chercher va en général plus vite que deviner l’URL.',
  orStartFromCountry: 'Ou partez d’un pays',
  pageNotFound: 'Page introuvable',
  goToHomepage: 'Aller à l’accueil',
  browseAllSlang: 'Parcourir tout l’argot de A à Z',
  suggestThisWord: 'Suggérer ce mot',
  searchByTermOrMeaning: 'Chercher par terme ou par sens',
  notFoundSearchLead: (count: number) =>
    `Tapez un terme ou une définition pour localiser l’expression parmi les ${count} pays\u00A0:`,

  // ------------------------------------------------------------------- 500
  serverErrorKicker: '500',
  serverError: 'Erreur de serveur',
  serverErrorH1: 'Un problème est survenu',
  serverErrorBody:
    'Nos serveurs ont rencontré un problème inattendu lors de la génération de cette page. C’est généralement temporaire. Vous pouvez essayer d’actualiser la page, de rechercher un terme ou de naviguer depuis la page d’accueil.',
  reloadPage: 'Actualiser la page',
  reportError: 'Signaler une erreur',
  searchTheDictionary: 'Rechercher dans le dictionnaire',
  serverErrorSearchLead:
    'Vous cherchez un terme d’argot, un idiome ou une expression particulière\u00A0? Cherchez directement ci-dessous\u00A0:',


  footerTagline: 'Le guide mondial de l’argot et des expressions familières',
  byCountry: 'Par pays',
  thisSite: 'Ce site',
  footerNote:
    'Les définitions s’appuient sur les sources disponibles. Quand une origine est contestée ou incertaine, nous le disons.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `argot ${adjective}`,

  // ---------------------------------------------------------------- about us
  aboutH1: 'À propos de Slang Words Online',
  aboutSubtitle:
    'Le guide mondial de la langue vivante, du vocabulaire de la rue et des tournures culturelles.',
  aboutIntro:
    'Chaque langue mène deux vies : la version formelle des manuels scolaires et la version vivante et rythmée réellement parlée dans la rue, les cafés, autour d’une table, dans la musique et sur les applications de messagerie. <strong>Slang Words Online</strong> est conçu pour la seconde.',
  aboutStatCountries: 'Pays et dialectes',
  aboutStatTerms: 'Mots et expressions d’argot',
  aboutStatCategories: 'Thématiques du quotidien',
  aboutStatLanguages: 'Langues prises en charge',
  aboutWhyHeading: 'Pourquoi nous avons créé Slang Words Online',
  aboutWhyP1:
    'Avez-vous déjà entendu une phrase au cours d’une conversation, regardé une série sous-titrée ou écouté une chanson en vous demandant : <em>« Mais qu’est-ce que ça veut vraiment dire ? »</em>',
  aboutWhyP2:
    'Copier cette expression dans un traducteur automatique entraîne souvent des déconvenues : soit la traduction est littérale au mot à mot (donnant des absurdités comme traduire l’espagnol « de una » par « d’un » au lieu de « carrément / tout de suite »), soit elle propose un équivalent trop soutenu qui efface toute saveur expressive.',
  aboutWhyP3:
    'Nous avons créé Slang Words Online pour apporter le contexte culturel, le ton, le niveau de langue et les subtilités sociales que les manuels et les traducteurs automatiques oublient.',
  aboutPillarsHeading: 'Ce qui rend notre dictionnaire unique',
  aboutPillarsLead:
    'Un dictionnaire d’argot n’a de sens que s’il vous apprend ce qu’une simple recherche en ligne ne peut pas vous dire :',
  aboutPillar1Title: '1. Niveau de langue et nuances sociales',
  aboutPillar1Body:
    'S’agit-il d’une taquinerie complice entre amis proches ou d’un mot déplacé en société polie ? Nous précisons clairement le ton et le registre pour vous éviter tout faux pas embarrassant.',
  aboutPillar2Title: '2. Exemples authentiques du quotidien',
  aboutPillar2Body:
    'Chaque expression comporte des dialogues naturels et des phrases en contexte dans la langue d’origine, avec leurs traductions familières et littérales détaillées.',
  aboutPillar3Title: '3. Origines débattues et étymologie',
  aboutPillar3Body:
    'Le web regorge de fausses étymologies et de légendes urbaines. Quand l’origine historique est avérée, nous citons les sources ; quand elle est débattue ou mythique, nous l’indiquons en toute transparence.',
  aboutPillar4Title: '4. Romanisation et prononciation',
  aboutPillar4Body:
    'Les alphabets non latins (cyrillique, kanjis/hiraganas japonais, hangeul coréen) s’accompagnent de transcriptions phonétiques et de repères de prononciation clairs pour les prononcer en toute confiance.',
  aboutCulturesHeading: 'Cultures et dialectes représentés',
  aboutCulturesLead: (count: number) =>
    `Notre corpus réunit ${count} pôles linguistiques et régionaux majeurs, témoignant de l’incomparable vitalité du parler informel à l’échelle internationale :`,
  aboutEditorialHeading: 'Ligne éditoriale et participation communautaire',
  aboutEditorialP1:
    'L’argot n’est pas imaginé par des linguistes dans une tour d’ivoire : il naît dans les cours d’école, les comedy clubs, les tribunes sportives, les studios de musique et les salons de discussion. Parce qu’il mute continuellement, Slang Words Online est un projet perpétuellement vivant.',
  aboutEditorialP2:
    'Nous encourageons locuteurs natifs, voyageurs et passionnés de linguistique du monde entier à nous soumettre de nouvelles trouvailles, à signaler des variantes locales ou à proposer des corrections.',
  aboutConnectHeading: 'Contactez-nous',
  aboutConnectBody:
    'Vous connaissez une expression argotique de votre région absente du dictionnaire ? Vous souhaitez préciser une nuance locale ? Nous serions ravis de vous lire.',
  aboutContactBtn: 'Contacter l’équipe',
  aboutBrowseBtn: 'Consulter tout l’argot de A à Z',

  aboutUs: 'À propos',
  // ---------------------------------------------------------------- contact us
  contactKicker: 'Entrer en contact',
  contactSubtitle:
    'Nous adorons échanger avec les passionnés de langues, locuteurs natifs et curieux du monde entier.',
  contactIntro:
    'Que vous souhaitiez suggérer une expression argotique de votre région absente du dictionnaire, apporter une précision de nuance, proposer un partenariat académique ou simplement dire bonjour, contactez directement notre équipe.',
  contactOfficialEmail: 'Adresse e-mail officielle',
  contactEmailLead:
    'Notre rédaction consulte activement cette boîte aux lettres. Envoyez directement vos questions, définitions ou remarques.',
  contactCopyEmail: 'Copier l’adresse e-mail',
  contactCopied: 'Copié dans le presse-papiers !',
  contactCategoriesHeading: 'Ce pour quoi vous pouvez nous contacter',
  contactCat1Title: 'Proposer un nouvel argot',
  contactCat1Body:
    'Vous connaissez un mot de la rue, une expression virale ou un parler régional manquant ? Partagez le mot, son sens, sa région et des exemples de phrases.',
  contactCat2Title: 'Nuances locales & corrections',
  contactCat2Body:
    'Un terme est-il employé différemment chez vous ? Avons-nous mentionné une étymologie contestée ? Nous privilégions la rigueur locale et mettons à jour les fiches rapidement.',
  contactCat3Title: 'Fonctionnalités & retours',
  contactCat3Body:
    'Idées de nouveaux pays, suggestions d’interface, prononciations audio ou signalements de bugs techniques.',
  contactCat4Title: 'Partenariats & presse',
  contactCat4Body:
    'Recherche linguistique, universités, questions de traduction et demandes médias.',
  contactResponseTimeLabel: 'Délai de réponse :',
  contactResponseTimeText:
    'Notre équipe éditoriale bénévole lit les messages plusieurs fois par semaine. Nous répondons généralement sous 24 à 48 heures.',

  contactUs: 'Contact',
  // ---------------------------------------------------------------- privacy policy
  privacyKicker: 'Mentions légales & Confidentialité',
  privacyLastUpdated: 'Dernière mise à jour : Septembre 2026',
  privacyIntro:
    'Sur Slang Words Online (<a href="/fr/" class="text-primary hover:underline">slangwordsonline.com</a>), votre vie privée est respectée en toute simplicité. Nous pensons qu’une ressource linguistique éducative doit être transparente, sûre et respectueuse de ses visiteurs.',
  privacyPrinciplesHeading: 'Nos principes fondamentaux',
  privacyPrinciple1Title: '1. Aucun compte requis & accès libre',
  privacyPrinciple1Body:
    'Vous pouvez consulter librement toutes les définitions d’argot, explorer les pays et effectuer des recherches sans créer de compte ni renseigner de données personnelles.',
  privacyPrinciple2Title: '2. Nous ne vendons jamais vos données',
  privacyPrinciple2Body:
    'Nous ne monétisons, ne cédons et ne vendons aucune donnée de nos visiteurs à des tiers, des courtiers en données ou des régies publicitaires.',
  privacyPrinciple3Title: '3. Échanges directs et transparents',
  privacyPrinciple3Body:
    'Si vous nous écrivez par e-mail, votre message sert exclusivement à vous répondre ou à examiner vos suggestions lexicales.',
  privacyCollectHeading: 'Données collectées',
  privacyCollectLead:
    'Nous ne recueillons que les informations strictement nécessaires au bon fonctionnement et à la sécurité du site :',
  privacyCollectA_Title: 'A. Données techniques et journaux anonymes',
  privacyCollectA_Body:
    'Lors de votre visite, notre hébergeur consigne automatiquement des journaux techniques non nominatifs (horodatage, navigateur, système d’exploitation, pages consultées et adresses IP anonymisées). Ces données sont exclusivement dédiées à la stabilité, au diagnostic et à la protection contre le moissonnage abusif.',
  privacyCollectB_Title: 'B. Préférences locales de navigation',
  privacyCollectB_Body:
    'Lorsque vous basculez entre le mode clair et le mode sombre, votre choix est enregistré localement dans le <code>localStorage</code> de votre navigateur. Cette donnée reste sur votre terminal et n’est jamais transmise à nos serveurs.',
  privacyCollectC_Title: 'C. Correspondance directe par e-mail',
  privacyCollectC_Body:
    'Si vous contactez notre équipe, nous recevons votre adresse e-mail, votre nom (le cas échéant) et votre message. Nous ne conservons ces échanges que le temps nécessaire pour traiter votre retour ou enrichir le dictionnaire.',
  privacyCookiesHeading: 'Cookies et traceurs',
  privacyCookiesLead:
    'Slang Words Online repose sur une conception rigoureusement protectrice de votre vie privée :',
  privacyCookiesB1:
    '<strong>Aucun cookie publicitaire ou de pistage :</strong> Nous n’utilisons aucun cookie de ciblage tiers, pixel espion ou traceur intersites.',
  privacyCookiesB2:
    '<strong>Aucun profilage comportemental :</strong> Nous ne traquons pas vos habitudes de navigation sur le Web et ne cherchons pas à identifier les personnes.',
  privacyCookiesB3:
    '<strong>Stockage local exclusivement fonctionnel :</strong> Seul un espace de stockage minimal sur votre navigateur est utilisé pour mémoriser votre préférence d’affichage (thème sombre ou clair).',
  privacyUpdatesHeading: 'Évolution de la présente politique',
  privacyUpdatesBody:
    'Nous pouvons être amenés à actualiser cette politique de confidentialité pour refléter des améliorations techniques ou légales. Toute mise à jour sera affichée directement sur cette page avec la date révisée.',
  privacyContactBody:
    'Pour toute question, remarque ou préoccupation relative à la confidentialité de vos données, écrivez-nous directement :',
  privacyContactEmailLabel: 'E-mail :',

  privacyPolicy: 'Politique de confidentialité',
  // ---------------------------------------------------------------- terms & conditions
  termsKicker: 'Conditions de service',
  termsLastUpdated: 'Dernière mise à jour : septembre 2026',
  termsIntro:
    'Bienvenue sur Slang Words Online (<a href="/fr/" class="text-primary hover:underline">slangwordsonline.com</a>). En consultant, explorant ou utilisant le contenu de notre site, vous acceptez les présentes Conditions d’utilisation. Veuillez les lire attentivement.',
  termsSummaryHeading: 'Résumé important',
  termsSummaryP1Title: 'Démarche linguistique descriptive :',
  termsSummaryP1Body:
    'Nous documentons la langue telle qu’elle est réellement parlée. L’intégration de termes familiers, vulgaires ou polémiques relève d’une démarche purement lexicographique et ne constitue en aucun cas une approbation.',
  termsSummaryP2Title: 'Usage éducatif loyal :',
  termsSummaryP2Body:
    'Le contenu est consultable et citable librement à des fins d’apprentissage personnel, d’étude culturelle et de recherche académique. L’aspiration massive automatisée et la réutilisation commerciale sont strictement interdites.',
  termsSummaryP3Title: 'Fourniture à titre informatif « en l’état » :',
  termsSummaryP3Body:
    'L’argot et le langage familier évoluent rapidement selon les régions et les générations. Faites preuve de discernement social avant d’employer des expressions familières.',
  termsSection1Heading: '1. Acceptation des conditions',
  termsSection1Body:
    'En accédant à Slang Words Online (le « Service » ou le « Site »), vous reconnaissez avoir pris connaissance des présentes Conditions et de notre Politique de confidentialité, et acceptez d’y être légalement lié. Si vous êtes en désaccord avec ces dispositions, veuillez ne pas utiliser le Site.',
  termsSection2Heading: '2. Avertissement linguistique et nature du contenu',
  termsSection2Lead:
    'L’argot reflète de manière vivante et spontanée la culture, le quotidien et les émotions humaines. Par conséquent, notre dictionnaire contient des expressions qui englobent :',
  termsSection2B1: 'Des jurons et termes familiers légers, modérés ou crus.',
  termsSection2B2: 'Des expressions d’argot amoureux, intime ou familier.',
  termsSection2B3: 'Des taquineries de rue, piques et expressions provocatrices.',
  termsSection2B4: 'Des tournures culturellement sensibles, controversées ou réappropriées.',
  termsEditorialStanceLabel: 'Ligne éditoriale :',
  termsEditorialStanceBody:
    'Slang Words Online adopte une approche descriptive plutôt que prescriptive. Répertorier un mot ne signifie aucunement que nous approuvons l’agressivité, les préjugés ou le harcèlement. Nous précisons le niveau de langue, les traductions littérales et les nuances de contexte pour vous permettre de comprendre ce que signifient ces termes dans une conversation, un film ou un livre.',
  termsSection3Heading: '3. Droits de propriété intellectuelle',
  termsSection3Body:
    'L’ensemble des explications textuelles originales, annotations de contexte, décompositions phonétiques, exemples d’usage rédigés, l’architecture du site et ses éléments graphiques distinctifs constituent la propriété intellectuelle exclusive de Slang Words Online.',
  termsPermittedUseLabel: 'Utilisation autorisée :',
  termsPermittedUseBody:
    'Une licence limitée et révocable vous est accordée pour consulter le site à des fins strictement personnelles, non commerciales, universitaires et éducatives. Vous pouvez citer de courts extraits en mentionnant clairement la source avec un lien vers la page correspondante sur <code>slangwordsonline.com</code>.',
  termsProhibitedReproLabel: 'Reproduction interdite :',
  termsProhibitedReproBody:
    'Il est interdit d’extraire de manière automatisée (scraping), moissonner, cloner, reproduire ou dupliquer notre base de données, nos fiches et nos index pour alimenter des services concurrents, des offres commerciales ou des jeux de données d’entraînement d’IA sans autorisation écrite préalable.',
  termsSection4Heading: '4. Règles d’utilisation acceptable',
  termsSection4Lead: 'Lors de votre navigation sur le Site, vous vous engagez à ne pas :',
  termsSection4B1:
    'Mener des attaques automatisées, lancer des robots de collecte saturant les serveurs ou tenter des attaques par déni de service.',
  termsSection4B2:
    'Sonder, scanner ou éprouver la sécurité et la vulnérabilité de notre infrastructure technique.',
  termsSection4B3:
    'Exploiter le site ou ses moyens de contact pour diffuser des messages publicitaires non sollicités (spam) ou des scripts malveillants.',
  termsSection4B4:
    'Usurper une identité ou vous faire passer pour un membre de notre équipe éditoriale.',
  termsSection5Heading: '5. Liens externes et références de tiers',
  termsSection5Body:
    'Notre site peut comporter des liens vers des sites externes, des études linguistiques ou des sources étymologiques tierces. Nous n’exerçons aucun contrôle sur leurs contenus, règles de sécurité ou pratiques de confidentialité et déclinons toute responsabilité à leur égard.',
  termsSection6Heading: '6. Exclusion de garanties',
  termsSection6Body1:
    'Le Service est fourni strictement <strong>« EN L’ÉTAT »</strong> et <strong>« SELON DISPONIBILITÉ »</strong>, sans aucune garantie expresse ou tacite d’aucune sorte.',
  termsSection6Body2:
    'Bien que notre équipe vérifie méticuleusement chaque définition auprès de locuteurs natifs et de sources fiables, le langage informel varie considérablement selon les villes, les générations et les cercles sociaux. Slang Words Online ne garantit pas que l’utilisation d’un mot d’argot soit convenable ou bien reçue dans une situation sociale ou professionnelle donnée.',
  termsSection7Heading: '7. Limitation de responsabilité',
  termsSection7Body:
    'Dans toute la mesure permise par la législation applicable, Slang Words Online et ses contributeurs ne sauraient être tenus responsables des dommages directs, indirects ou accessoires découlant de votre utilisation du site, ni des éventuels impairs, maladresses de communication ou malentendus linguistiques.',
  termsSection8Heading: '8. Modification des conditions',
  termsSection8Body:
    'Nous nous réservons le droit de mettre à jour les présentes Conditions à tout moment. Toute révision sera publiée sur cette page avec une date de mise à jour actualisée. La poursuite de votre navigation vaut acceptation des conditions révisées.',
  termsSection9Heading: '9. Contact',
  termsSection9Body:
    'Pour toute question juridique, notification de droits d’auteur ou demande d’éclaircissement sur les présentes Conditions, vous pouvez joindre notre équipe à l’adresse :',
  termsContactEmailLabel: 'E-mail :',

  termsConditions: 'Conditions générales',
};
