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
  editorialH2: 'Contexto que você não encontra em um app de dicionário',
  editorialBody:
    'Um dicionário de gíria só vale alguma coisa se contar o que um tradutor automático não consegue contar: se uma palavra é carinhosa ou hostil, para quem dá para dizê-la e se a história de origem que todo mundo repete é verdadeira. Quando algo é contestado, dizemos que é contestado. Quando uma palavra é um xingamento discriminatório, dizemos isso também, e a listamos assim mesmo — porque você continua precisando entendê-la quando ouvir.',
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
  pageNotFound: 'Página não encontrada',
  goToHomepage: 'Ir para a página inicial',
  browseAllSlang: 'Explorar todas as gírias de A a Z',
  suggestThisWord: 'Sugerir esta palavra',
  searchByTermOrMeaning: 'Buscar por termo ou por significado',
  notFoundSearchLead: (count: number) =>
    `Tente digitar um termo ou uma definição para encontrar a expressão nos ${count} países:`,

  // ------------------------------------------------------------------- 500
  serverErrorKicker: '500',
  serverError: 'Erro do servidor',
  serverErrorH1: 'Algo deu errado',
  serverErrorBody:
    'Nossos servidores encontraram um problema inesperado ao carregar esta página. Isso costuma ser temporário. Você pode tentar recarregar a página, pesquisar um termo ou navegar a partir da nossa página inicial.',
  reloadPage: 'Recarregar página',
  reportError: 'Relatar erro',
  searchTheDictionary: 'Pesquisar no dicionário',
  serverErrorSearchLead:
    'Procurando uma gíria, expressão ou termo específico? Pesquise diretamente abaixo:',


  footerTagline: 'O guia global da gíria e das expressões informais',
  byCountry: 'Por país',
  thisSite: 'Este site',
  footerNote:
    'As definições se baseiam nas fontes disponíveis. Quando uma origem é contestada ou incerta, dizemos isso.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `gíria ${adjective}`,

  // ---------------------------------------------------------------- about us
  aboutH1: 'Sobre o Slang Words Online',
  aboutSubtitle:
    'O guia global da língua viva, do vocabulário das ruas e das expressões culturais.',
  aboutIntro:
    'Toda língua tem duas vidas: a versão formal dos livros de gramática e a versão viva e dinâmica que realmente se fala na rua, nos cafés, à mesa, nas músicas e nas mensagens de grupo. O <strong>Slang Words Online</strong> existe para a segunda.',
  aboutStatCountries: 'Países e dialetos',
  aboutStatTerms: 'Termos e expressões de gíria',
  aboutStatCategories: 'Categorias do cotidiano',
  aboutStatLanguages: 'Idiomas disponíveis',
  aboutWhyHeading: 'Por que criamos o Slang Words Online',
  aboutWhyP1:
    'Você já ouviu uma frase numa conversa, assistiu a uma série internacional com legendas ou escutou uma música e se perguntou: <em>«O que isso significa de verdade?»</em>',
  aboutWhyP2:
    'Colocar a expressão num tradutor automático costuma gerar confusão: ou ele traduz cada palavra literalmente (gerando absurdos como traduzir «de una» do espanhol como «de uma» em vez de «na hora / com certeza») ou traz uma alternativa formal de dicionário sem o peso emocional real.',
  aboutWhyP3:
    'Criamos o Slang Words Online para oferecer o contexto cultural, o tom, o registro e as nuances sociais que livros didáticos e tradutores automáticos deixam de fora.',
  aboutPillarsHeading: 'O que diferencia o nosso dicionário',
  aboutPillarsLead:
    'Um dicionário de gírias só tem valor se explicar aquilo que uma busca rápida não consegue responder:',
  aboutPillar1Title: '1. Registro e nuances sociais',
  aboutPillar1Body:
    'O termo é uma brincadeira afetuosa entre amigos íntimos ou soa ofensivo em situações formais? Indicamos claramente o registro e o tom para que você nunca passe por um constrangimento.',
  aboutPillar2Title: '2. Exemplos reais do dia a dia',
  aboutPillar2Body:
    'Cada verbete traz diálogos naturais e frases contextuais na língua original, acompanhados de traduções coloquiais e literais precisas.',
  aboutPillar3Title: '3. Origens debatidas e etimologia',
  aboutPillar3Body:
    'A internet está cheia de lendas e falsas etimologias. Quando a origem é comprovada historicamente, citamos as evidências; quando é controversa ou lenda popular, deixamos isso bem claro.',
  aboutPillar4Title: '4. Romanização e fonética',
  aboutPillar4Body:
    'Escritas não latinas (cirílico, kanji/hiragana japonês, hangul coreano) vêm com romanizações claras, guias de pronúncia e dicas fonéticas para você ler e pronunciar com segurança.',
  aboutCulturesHeading: 'Culturas e dialetos contemplados',
  aboutCulturesLead: (count: number) =>
    `Nosso acervo reúne ${count} polos linguísticos e regionais distintos, refletindo a riqueza e a diversidade da fala informal pelo mundo:`,
  aboutEditorialHeading: 'Filosofia editorial e colaboração comunitária',
  aboutEditorialP1:
    'As gírias não são criadas por lexicógrafos em gabinetes fechados; elas nascem nos pátios das escolas, nas rodas de conversa, nos jogos, nos estúdios e nas redes sociais. Como a gíria muda sem parar, o Slang Words Online é um projeto vivo.',
  aboutEditorialP2:
    'Recebemos com entusiasmo falantes nativos, viajantes e entusiastas de idiomas de todo o mundo para sugerir novos termos, apontar variações regionais ou enviar correções.',
  aboutConnectHeading: 'Fale com a nossa equipe',
  aboutConnectBody:
    'Tem uma gíria da sua cidade que ainda não está no dicionário? Notou algum detalhe regional que merece destaque? Adoraríamos ouvir você.',
  aboutContactBtn: 'Falar com a equipe',
  aboutBrowseBtn: 'Explorar todas as gírias de A a Z',

  aboutUs: 'Sobre nós',
  // ---------------------------------------------------------------- contact us
  contactKicker: 'Entre em contato',
  contactSubtitle:
    'Adoramos receber mensagens de entusiastas de idiomas, falantes nativos e curiosos de todo o mundo.',
  contactIntro:
    'Quer sugerir uma gíria da sua região que ainda não documentamos, apontar uma correção de nuance, propor uma parceria ou apenas dar um olá? Entre em contato direto com a nossa equipe editorial e de desenvolvimento.',
  contactOfficialEmail: 'E-mail oficial de contato',
  contactEmailLead:
    'Nossa equipe editorial acompanha esta caixa de entrada constantemente. Envie suas dúvidas, definições de termos ou comentários diretamente.',
  contactCopyEmail: 'Copiar endereço de e-mail',
  contactCopied: 'Copiado para a área de transferência!',
  contactCategoriesHeading: 'Pelo que você pode entrar em contato',
  contactCat1Title: 'Enviar nova gíria',
  contactCat1Body:
    'Conhece uma expressão das ruas, gíria da internet ou expressão regional que não abordamos? Envie a palavra, o significado, a região e exemplos de uso.',
  contactCat2Title: 'Variações regionais e correções',
  contactCat2Body:
    'O termo é usado de modo diferente na sua cidade? Identificou uma origem duvidosa? Valorizamos a precisão nativa e atualizamos os verbetes com agilidade.',
  contactCat3Title: 'Recursos e sugestões',
  contactCat3Body:
    'Ideias para novos países, melhorias na navegação, sugestões de áudio com pronúncia ou avisos de bugs técnicos.',
  contactCat4Title: 'Parcerias e imprensa',
  contactCat4Body:
    'Pesquisas linguísticas, instituições de ensino, solicitações de tradução e contatos de imprensa.',
  contactResponseTimeLabel: 'Tempo de resposta:',
  contactResponseTimeText:
    'Nossa equipe editorial revisa as mensagens da comunidade várias vezes por semana. Normalmente respondemos dentro de 24 a 48 horas.',

  contactUs: 'Contato',
  privacyPolicy: 'Política de privacidade',
  termsConditions: 'Termos e condições',
};
