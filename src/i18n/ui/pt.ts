import type { Strings } from './types';
import { plural } from './plural';

export const pt: Strings = {
  skipToContent: 'Pular para o conteúdo',
  mainNav: 'Principal',
  countriesNav: 'Países',
  sectionsNav: 'Seções',
  openMenu: 'Abrir menu',
  breadcrumb: 'Trilha de navegação',
  home: 'Início',
  browse: 'Índice A–Z',
  about: 'Sobre',
  search: 'Buscar',
  language: 'Idioma',
  jumpToLetter: 'Ir para uma letra',
  termsBeginningWith: (letter: string) => `Termos começados por ${letter}`,

  homeH1: 'O guia global da gíria',
  homeLead: (terms: number, countries: number) =>
    `${plural(terms, 'palavra ou expressão informal', 'palavras e expressões informais')} de ${plural(countries, 'país', 'países')}: o que significam, como se falam e as situações em que usá-las seria um erro.`,
  searchPlaceholder: 'Busque uma gíria, ou um significado…',
  searchPlaceholderCompact: 'Buscar gíria…',
  searchLabel: 'Buscar termos de gíria',
  searchHint:
    'Os resultados aparecem abaixo conforme você digita. Aperte Enter para abrir a página de busca.',
  tryTerms: 'Experimente',
  pickCountry: 'Escolha um país',
  pickCountryLead:
    'A gíria pertence a um lugar antes de pertencer a um idioma. Comece por onde essas palavras são faladas de verdade.',
  termsCount: (n: number) => plural(n, 'termo', 'termos'),
  popularTopics: 'Assuntos populares',
  popularTopicsLead:
    'As páginas que as pessoas procuram de verdade: um país, um assunto e todos os termos que temos sobre ele.',
  oneWordEach: 'Uma palavra de cada país',
  oneWordEachLead:
    'Uma amostra de como é uma entrada completa: acepções, exemplos reais com tradução e a origem quando ela é mesmo conhecida.',
  editorialH2: 'Toda entrada é escrita, não gerada',
  editorialBody:
    'Um dicionário de gíria só vale alguma coisa se contar o que um tradutor automático não consegue contar: se uma palavra é carinhosa ou hostil, para quem dá para dizê-la e se a história de origem que todo mundo repete é verdadeira. Quando algo é contestado, dizemos que é contestado. Quando uma palavra é um xingamento discriminatório, dizemos isso também, e a listamos assim mesmo — porque você continua precisando entendê-la quando ouvir.',
  howWeSource: 'Como apuramos as definições',

  startHere: 'Comece por estes',
  startHereLead:
    'Os termos abaixo são os que trazem mais detalhe de uso: registro, origem e as situações em que saem pela culatra. São os que vale a pena ler por inteiro antes do resto.',
  byTopic: 'Por assunto',
  byTopicLead: (adjective: string) =>
    `Cada página abaixo reúne todos os termos da gíria ${adjective} que temos sobre um mesmo assunto, lado a lado.`,
  allTermsAz: (adjective: string) => `Toda a gíria ${adjective} de A a Z`,
  termsWithExamples: (n: number) =>
    `${plural(n, 'termo', 'termos')}, cada um com acepções e exemplos reais.`,
  slangFor: (adjective: string, topic: string) => `Gíria ${adjective} sobre ${topic}`,

  categoryLead: (n: number, adjective: string, topic: string) =>
    `${plural(n, 'termo', 'termos')} da gíria ${adjective} sobre ${topic}, cada um com o seu significado, a sua pronúncia e um exemplo de uso.`,
  otherTopicsIn: (adjective: string) => `Outros assuntos da gíria ${adjective}`,
  sameTopicElsewhere: (topic: string) => `Gíria sobre ${topic} em outros países`,
  sameTopicElsewhereLead:
    'O mesmo assunto nos demais países do site: o jeito mais rápido de ver o quanto quatro idiomas divergem para dizer uma coisa só.',

  aSlangTerm: (languageName: string) => `Um termo de gíria em ${languageName.toLowerCase()}.`,
  countrySlangHeading: (adjective: string) => `Gíria ${adjective}`,
  moreSenses: (n: number) => `+${n} ${n === 1 ? 'outro sentido' : 'outros sentidos'}`,
  useWithCare: 'Use com cuidado',
  browseAll: (adjective: string) => `Ver toda a gíria ${adjective}`,
  beforeYouUse: 'Antes de usar esta',
  whatItMeans: 'O que significa',
  literally: 'Literalmente:',
  inUse: 'Em uso',
  examplesWithTranslations: 'Exemplos com tradução',
  note: 'Nota:',
  whereItComesFrom: 'De onde vem',
  firstAttested: (when: string) => `Primeiro registro: ${when}`,
  otherForms: 'Outras formas',
  spellingsAndVariants: 'Grafias e variantes:',
  similarTerms: 'Termos parecidos:',
  romanizedAs: 'Romanização',
  nearbyTerms: 'Termos vizinhos',
  previous: 'Anterior',
  next: 'Próximo',
  relatedTerms: 'Termos relacionados',
  alsoUsedIn: 'Também se usa em',
  topics: 'Assuntos',
  moreTermsLikeThis: (adjective: string) => `Mais gíria ${adjective} como esta`,
  reviewedBy: (who: string) => `Revisado por ${who}.`,
  updatedOn: (date: string) => `Atualizado em ${date}.`,

  browseH1: 'Todos os termos, de A a Z',
  browseLead: (terms: number, countries: number) =>
    `${plural(terms, 'termo do site', 'termos do site')} em um único índice alfabético, de ${plural(countries, 'país', 'países')}. A ordenação ignora os acentos, então güey fica junto com os gês.`,

  searchH1: 'Buscar',
  searchLead:
    'Busque por termo ou por significado: digitar “bêbado” encontra as palavras para isso em todos os idiomas do site.',
  startTyping: 'Comece a digitar para ver resultados.',
  resultCount: (n: number) => `${n} resultado${n === 1 ? '' : 's'}`,
  noMatches: (q: string) => `Nada corresponde a “${q}”.`,
  noMatchesTryBrowse: 'Tente uma palavra mais curta, ou consulte o índice A–Z.',

  notFoundKicker: '404',
  notFoundH1: 'Essa palavra não está aqui',
  notFoundBody:
    'Esta página não existe: pode ser que o termo ainda não esteja no dicionário, ou que o link esteja desatualizado. Buscar costuma ser mais rápido do que adivinhar a URL.',
  orStartFromCountry: 'Ou comece por um país',

  footerTagline: 'O guia global da gíria e das expressões informais',
  byCountry: 'Por país',
  thisSite: 'Este site',
  footerNote:
    'As definições são escritas e revisadas por pessoas. Quando uma origem é contestada, dizemos isso.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `gíria ${adjective}`,

};
