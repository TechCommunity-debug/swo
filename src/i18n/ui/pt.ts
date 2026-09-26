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

  // ------------------------------------------- home — SEO about section
  aboutH2: 'Sobre o Slang Words Online — Seu portal global de gírias',
  aboutP1:
    'Toda língua tem duas vidas: a versão que aparece nos livros didáticos e a versão que as pessoas realmente falam nas ruas, nos grupos de mensagens e nas mesas de bar. O Slang Words Online existe para a segunda. Criamos este site como um ponto de encontro de gírias para quem já ouviu uma palavra numa conversa, na letra de uma música ou numa legenda e pensou: «O que diabos significa isso?». Seja tentando decifrar uma gíria britânica de um pub londrino, uma expressão americana que não para de aparecer nas redes sociais ou as gírias australianas que seu colega de trabalho solta sem pensar duas vezes — a resposta está aqui, com o contexto que nenhum aplicativo de tradução consegue dar.',
  aboutP2:
    'Nossa biblioteca de gírias cobre atualmente dezesseis países e onze categorias temáticas. Você pode explorar gírias britânicas e gírias americanas ao lado de gírias australianas, canadenses e irlandesas — os grandes ramos do mundo anglófono. Há também as coleções de línguas românicas: gírias mexicanas, espanholas, italianas, francesas, colombianas, cubanas e dominicanas, cada qual refletindo um dialeto próprio com ritmo e atitude únicos. Também cobrimos gírias alemãs, russas, japonesas e coreanas — quatro vocabulários em que a distância da norma culta é tão grande que a gíria quase funciona como um registro à parte.',
  aboutP3:
    'O que torna esta coleção diferente de uma consulta rápida no Google Tradutor? A profundidade, acima de tudo. Cada entrada traz a definição — muitas vezes mais de uma, já que gírias raramente significam uma coisa só — acompanhada de um guia de pronúncia sobre como a palavra soa de verdade na fala real. Oferecemos exemplos trabalhados: frases inteiras na língua original, traduzidas linha por linha, para você ver a palavra funcionando em contexto real. E explicamos o que mais importa e que os dicionários costumam omitir: se o termo é carinhoso ou agressivo, se pode ser dito em ambientes formais e se aquela historinha de origem que todo mundo compartilha na internet é verdadeira.',
  aboutP4:
    'Os temas são organizados exatamente como as pessoas pesquisam. Em vez de despejar centenas de verbetes em uma página só, dividimos tudo em categorias que refletem o uso real das gírias: Gírias para aprovação e elogios, Gírias para cumprimentos e vocativos, Gírias para ofensas e reclamações, Gírias para tipos de pessoas, Gírias para dinheiro e trabalho, Gírias para comida e bebida, Gírias para balada e festas, Gírias para romance e paquera, Gírias para emoção e reação, Gírias para palavras de preenchimento e Gírias para coisas do dia a dia. Cada uma delas vive sob um país específico, pois o mesmo assunto — dinheiro ou insultos, por exemplo — gera vocabulários inteiramente distintos dependendo de quem fala e onde fala.',
  aboutP5:
    'Este site é gratuito, atualizado com frequência e está disponível em nove idiomas para que falantes de outras línguas também possam navegar por toda a biblioteca no seu idioma materno. Pense no Slang Words Online como o dicionário de gírias que você sempre quis que existisse: rigoroso, honesto e escrito por quem realmente se importa para que você não passe vergonha na hora errada. Fique à vontade: escolha um país, escolha um tema ou simplesmente pesquise a palavra que acabou de ouvir.',

  // ----------------------------------------- home — FAQ section
  faqH2: 'Perguntas frequentes sobre gírias',
  faqQ1: 'O que são gírias?',
  faqA1:
    'Gírias são palavras ou expressões informais muito mais comuns na língua falada do que na escrita. Elas costumam nascer dentro de grupos sociais específicos, subculturas ou regiões e frequentemente carregam significados bem diferentes das definições dos dicionários formais. As gírias expressam identidade, humor ou atitude e tendem a evoluir muito mais depressa do que o vocabulário padrão — palavras que eram modernas há dez anos hoje podem soar ultrapassadas.',
  faqQ2: 'Quais são as gírias mais recentes?',
  faqA2:
    'As gírias mudam o tempo todo, com novos termos surgindo semanalmente em redes sociais como TikTok, Twitter/X e Instagram. Alguns exemplos recentes incluem «delulu» (otimista de forma delirante), «rizz» (carisma, especialmente para flertar), «slay» (arrasar, fazer algo incrivelmente bem) e «ate» (mandou muito bem, arrasou). A maneira mais rápida de se manter atualizado é acompanhar as conversas nas redes ou navegar pela nossa coleção atualizada por país.',
  faqQ3: 'Como as gírias se diferenciam da linguagem formal?',
  faqA3:
    'A linguagem formal segue regras gramaticais e de vocabulário estabelecidas e é usada em contextos profissionais, acadêmicos ou oficiais. A gíria, por outro lado, é descontraída, muitas vezes subverte as convenções gramaticais e está ligada a comunidades ou gerações específicas. Uma palavra como «cool» é entendida no mundo todo, mas gírias como «chuffed» (britânico para feliz/satisfeito) ou «naco» (mexicano para brega/cafona) só fazem sentido completo quando você compreende a cultura local.',
  faqQ4: 'Por que países diferentes têm gírias diferentes?',
  faqA4:
    'As gírias são moldadas pela cultura local, pela história e pela convivência social. Mesmo países que compartilham o mesmo idioma — como os Estados Unidos, o Reino Unido e a Austrália para o inglês, ou o Brasil e Portugal para o português — desenvolvem vocabulários de gírias inteiramente diferentes. Isso acontece porque a gíria reflete a vida real: comida, música, humor, classes sociais e mídias deixam suas marcas na fala cotidiana.',
  faqQ5: 'Posso usar gírias em conversas do dia a dia?',
  faqA5:
    'Com certeza — a gíria é uma parte natural da comunicação humana, e usá-la na medida certa demonstra sensibilidade social e fluência. O segredo é o contexto: gírias se encaixam perfeitamente em papos informais, mensagens de texto e redes sociais, mas podem não soar bem em uma entrevista de emprego, redação acadêmica ou e-mail corporativo. Saber alternar o registro linguístico é, por si só, uma habilidade indispensável.',
  faqQ6: 'Como posso aprender gírias de outros países?',
  faqA6:
    'A imersão é a melhor professora: assistir a programas de TV locais, acompanhar criadores de conteúdo do país e conversar com nativos ajuda muito. Um recurso especializado como o Slang Words Online também oferece o contexto que os dicionários comuns deixam de fora: quem usa a palavra, se ela é amigável ou ofensiva e como soa de verdade numa frase. Cobrimos dezesseis países e milhares de verbetes com definições, guias de pronúncia e exemplos da vida real.',

  // --------------------------------------------------------------- country
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
  // ---------------------------------------------------------------- privacy policy
  privacyKicker: 'Legal e Privacidade',
  privacyLastUpdated: 'Última atualização: Setembro de 2026',
  privacyIntro:
    'No Slang Words Online (<a href="/pt/" class="text-primary hover:underline">slangwordsonline.com</a>), sua privacidade é tratada de forma clara e direta. Acreditamos que uma ferramenta educacional deve ser transparente, segura e respeitosa com quem a utiliza.',
  privacyPrinciplesHeading: 'Nossos princípios de privacidade',
  privacyPrinciple1Title: '1. Sem necessidade de conta e acesso livre',
  privacyPrinciple1Body:
    'Você pode navegar livremente por todos os verbetes, explorar os países e pesquisar no dicionário sem criar conta ou fornecer dados pessoais.',
  privacyPrinciple2Title: '2. Jamais vendemos seus dados',
  privacyPrinciple2Body:
    'Nunca comercializamos, repassamos ou vendemos dados de visitantes para terceiros, empresas de dados ou redes de anúncios.',
  privacyPrinciple3Title: '3. Comunicação direta e transparente',
  privacyPrinciple3Body:
    'Se você entrar em contato conosco por e-mail, sua mensagem será utilizada exclusivamente para responder às suas dúvidas ou avaliar sugestões de termos.',
  privacyCollectHeading: 'Informações que coletamos',
  privacyCollectLead:
    'Coletamos apenas o estritamente necessário para entregar, proteger e manter o site funcionando:',
  privacyCollectA_Title: 'A. Dados técnicos e registros anônimos',
  privacyCollectA_Body:
    'Ao acessar nosso site, nossos servidores gravam automaticamente registros técnicos de diagnóstico que não identificam o usuário (como data e hora, navegador, sistema operacional, páginas acessadas e endereços IP anonimizados). Esses dados são usados apenas para monitoramento de estabilidade e segurança.',
  privacyCollectB_Title: 'B. Preferências no dispositivo do usuário',
  privacyCollectB_Body:
    'Quando você alterna entre tema claro e escuro, sua preferência fica salva localmente no <code>localStorage</code> do seu navegador. Esses dados permanecem no seu dispositivo e nunca são enviados aos nossos servidores.',
  privacyCollectC_Title: 'C. Mensagens enviadas por e-mail',
  privacyCollectC_Body:
    'Ao nos enviar um e-mail, recebemos seu endereço, nome (se informado) e o conteúdo da mensagem. Mantemos essas informações apenas pelo período necessário para atender sua mensagem ou atualizar o dicionário.',
  privacyCookiesHeading: 'Cookies e tecnologias de rastreamento',
  privacyCookiesLead:
    'O Slang Words Online foi projetado com foco total em privacidade:',
  privacyCookiesB1:
    '<strong>Sem cookies de rastreamento ou anúncios:</strong> Não utilizamos cookies de terceiros, pixels comportamentais ou rastreadores entre sites.',
  privacyCookiesB2:
    '<strong>Sem criação de perfis ou identificação:</strong> Não monitoramos seus hábitos de navegação em outros sites nem tentamos identificar pessoas individualmente.',
  privacyCookiesB3:
    '<strong>Armazenamento local estritamente funcional:</strong> Usamos apenas o armazenamento mínimo do navegador para manter sua preferência de visualização (modo claro ou escuro).',
  privacyUpdatesHeading: 'Atualizações desta política',
  privacyUpdatesBody:
    'Podemos atualizar esta Política de Privacidade periodicamente para refletir pequenas melhorias ou alterações operacionais. Qualquer alteração será publicada diretamente nesta página com a data atualizada.',
  privacyContactBody:
    'Caso tenha dúvidas, comentários ou sugestões sobre nossas práticas de privacidade, entre em contato direto com a equipe:',
  privacyContactEmailLabel: 'E-mail:',

  privacyPolicy: 'Política de privacidade',
  // ---------------------------------------------------------------- terms & conditions
  termsKicker: 'Termos de Serviço',
  termsLastUpdated: 'Última atualização: setembro de 2026',
  termsIntro:
    'Boas-vindas ao Slang Words Online (<a href="/pt/" class="text-primary hover:underline">slangwordsonline.com</a>). Ao acessar, navegar ou consultar conteúdos em nosso site, você concorda com estes Termos e Condições. Leia-os com atenção.',
  termsSummaryHeading: 'Resumo Importante',
  termsSummaryP1Title: 'Finalidade Linguística Descritiva:',
  termsSummaryP1Body:
    'Registramos a forma como as pessoas realmente se comunicam. A inclusão de gírias populares, rudes ou controversas possui propósito estritamente lexicográfico e não representa apoio a comportamentos ofensivos.',
  termsSummaryP2Title: 'Uso Educacional Legítimo:',
  termsSummaryP2Body:
    'O conteúdo pode ser lido e referenciado livremente para aprendizado individual, pesquisas acadêmicas e estudos culturais. A extração automatizada massiva e a exploração comercial são proibidas.',
  termsSummaryP3Title: 'Caráter Informativo «No Estado em que se Encontra»:',
  termsSummaryP3Body:
    'A linguagem informal muda velozmente conforme o país, a região e a geração. Exerça sempre bom senso social antes de utilizar gírias desconhecidas.',
  termsSection1Heading: '1. Aceitação dos Termos',
  termsSection1Body:
    'Ao acessar ou utilizar o Slang Words Online (o «Serviço» ou «Site»), você confirma que leu, compreendeu e aceitou estes Termos e nossa Política de Privacidade. Caso não concorde com estas disposições, solicitamos que não utilize o Site.',
  termsSection2Heading: '2. Aviso Linguístico e Natureza do Conteúdo',
  termsSection2Lead:
    'As gírias são um reflexo vivo, expressivo e dinâmico da cultura e das emoções humanas. Por essa razão, nosso dicionário abrange expressões que incluem:',
  termsSection2B1: 'Termos coloquiais de baixo calão, gírias ácidas e palavrões.',
  termsSection2B2: 'Expressões íntimas, românticas e do vocabulário afetivo.',
  termsSection2B3: 'Insultos populares, zombarias cotidianas e gírias provocativas.',
  termsSection2B4: 'Termos culturalmente sensíveis, controversos ou ressignificados.',
  termsEditorialStanceLabel: 'Posicionamento Editorial:',
  termsEditorialStanceBody:
    'O Slang Words Online adota uma abordagem descritiva, e não prescritiva. O registro de um termo não significa endosso a preconceitos, hostilidades ou condutas desrespeitosas. Oferecemos contexto de uso, traduções literais e indicações de tom para que o leitor compreenda a linguagem como ela é falada no cotidiano.',
  termsSection3Heading: '3. Direitos de Propriedade Intelectual',
  termsSection3Body:
    'Todas as explicações contextuais originais, anotações linguísticas, orientações de pronúncia, exemplos práticos autorais, estrutura do site e elementos de design constituem propriedade intelectual do Slang Words Online.',
  termsPermittedUseLabel: 'Uso Permitido:',
  termsPermittedUseBody:
    'Você possui uma licença limitada e revogável para consultar o site para uso pessoal, não comercial, educacional e de pesquisa. Pequenas citações de definições são permitidas, desde que acompanhadas de crédito claro e link para a página correspondente em <code>slangwordsonline.com</code>.',
  termsProhibitedReproLabel: 'Reprodução Proibida:',
  termsProhibitedReproBody:
    'É expressamente proibido fazer scraping massivo, extrair dados por robôs, clonar, replicar ou espelhar nosso acervo lexicográfico ou índices para serviços concorrentes, plataformas comerciais ou conjuntos de treinamento de IA sem autorização prévia por escrito.',
  termsSection4Heading: '4. Política de Uso Aceitável',
  termsSection4Lead: 'Ao utilizar o Site, você concorda em não:',
  termsSection4B1:
    'Executar ataques automatizados, tráfego abusivo que sobrecarregue servidores ou tentativas de negação de serviço.',
  termsSection4B2:
    'Investigar, escanear ou testar falhas de segurança em nossos sistemas e redes.',
  termsSection4B3:
    'Utilizar o site ou seus formulários de contato para distribuir mensagens não solicitadas (spam) ou códigos maliciosos.',
  termsSection4B4:
    'Falsear sua identidade ou tentar se passar pela equipe editorial.',
  termsSection5Heading: '5. Links de Terceiros e Referências Externas',
  termsSection5Body:
    'Nosso site pode fornecer links para páginas externas, estudos acadêmicos ou referências etimológicas. Não possuímos controle sobre os conteúdos, políticas de privacidade ou segurança dessas plataformas, não assumindo responsabilidade por elas.',
  termsSection6Heading: '6. Isenção de Garantias',
  termsSection6Body1:
    'O Serviço é oferecido estritamente <strong>«NO ESTADO EM QUE SE ENCONTRA»</strong> e <strong>«CONFORME DISPONÍVEL»</strong>, sem garantias de qualquer natureza, expressas ou implícitas.',
  termsSection6Body2:
    'Apesar de nossa equipe verificar com rigor os termos com falantes nativos e acervos linguísticos, a linguagem oral varia substancialmente entre cidades, faixas etárias e contextos sociais. Não garantimos que o emprego de determinada gíria seja adequado ou bem aceito em qualquer ambiente profissional ou pessoal.',
  termsSection7Heading: '7. Limitação de Responsabilidade',
  termsSection7Body:
    'Até o limite máximo permitido pela legislação aplicável, o Slang Words Online, seus idealizadores e colaboradores não serão responsáveis por danos diretos, indiretos ou incidentais resultantes do uso do site, nem por eventuais gafes, constrangimentos sociais ou mal-entendidos linguísticos.',
  termsSection8Heading: '8. Alterações destes Termos',
  termsSection8Body:
    'Reservamo-nos o direito de revisar estes Termos e Condições periodicamente. Qualquer modificação será disponibilizada nesta página com a respectiva data de atualização. O uso contínuo do site configura anuência com os termos revisados.',
  termsSection9Heading: '9. Contato',
  termsSection9Body:
    'Para esclarecimentos jurídicos, comunicados sobre direitos autorais ou dúvidas relativas a estes Termos e Condições, entre em contato pelo e-mail:',
  termsContactEmailLabel: 'E-mail:',

  termsConditions: 'Termos e condições',
};
