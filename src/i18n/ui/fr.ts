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

  homeH1: 'Le guide mondial de l’argot',
  homeLead: (terms: number, countries: number) =>
    `${plural(terms, 'mot ou expression familier', 'mots et expressions familiers')} de ${plural(countries, 'pays', 'pays')} : ce qu’ils veulent dire, comment les prononcer, et les situations où les employer serait une erreur.`,
  searchPlaceholder: 'Cherchez un mot d’argot, ou un sens…',
  searchPlaceholderCompact: 'Chercher dans l’argot…',
  searchLabel: 'Rechercher un terme d’argot',
  searchHint:
    'Les résultats s’affichent en dessous à mesure que vous tapez. Appuyez sur Entrée pour ouvrir la page de recherche complète.',
  tryTerms: 'Essayez',
  pickCountry: 'Choisissez un pays',
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
  countrySlangHeading: (adjective: string) => `Argot ${adjective}`,
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
  privacyPolicy: 'Politique de confidentialité',
  termsConditions: 'Conditions générales',
};
