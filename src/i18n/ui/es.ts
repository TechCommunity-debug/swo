import type { Strings } from './types';
import { plural } from './plural';

export const es: Strings = {
  skipToContent: 'Saltar al contenido',
  mainNav: 'Principal',
  countriesNav: 'Países',
  sectionsNav: 'Secciones',
  openMenu: 'Abrir menú',
  breadcrumb: 'Ruta de navegación',
  home: 'Inicio',
  browse: 'Índice A–Z',
  search: 'Buscar',
  language: 'Idioma',
  jumpToLetter: 'Ir a una letra',
  termsBeginningWith: (letter: string) => `Términos que empiezan por ${letter}`,

  homeH1: 'Diccionario de argot: significados, ejemplos y más',
  homeLead: (terms: number, countries: number) =>
    `Descubre el significado de palabras de argot, frases, acrónimos y expresiones de todo el mundo. Busca en nuestro diccionario de argot definiciones, frases de ejemplo, pronunciación, orígenes y el contexto detrás del argot popular.`,
  searchPlaceholder: 'Buscar palabras de argot…',
  searchPlaceholderCompact: 'Buscar argot…',
  searchLabel: 'Buscar términos de argot',
  searchHint:
    'Los resultados aparecen abajo según escribes. Pulsa Intro para abrir la página de búsqueda.',
  tryTerms: 'Prueba con',
  pickCountry: 'Explora el argot por país',
  pickCountryLead:
    'El argot pertenece a un lugar antes que a un idioma. Empieza por donde se hablan de verdad estas palabras.',
  termsCount: (n: number) => plural(n, 'término', 'términos'),
  popularTopics: 'Temas populares',
  popularTopicsLead:
    'Las páginas que la gente busca de verdad: un país, un tema y todos los términos que tenemos sobre él.',
  oneWordEach: 'Una palabra de cada país',
  oneWordEachLead:
    'Una muestra de cómo es una entrada completa: acepciones, ejemplos reales con traducción y el origen cuando de verdad se conoce.',
  editorialH2: 'Contexto que no encontrarás en una app de diccionario',
  editorialBody:
    'Un diccionario de argot solo vale algo si te cuenta lo que un traductor automático no puede: si una palabra es cariñosa u hostil, a quién se la puedes decir y si la historia sobre su origen que todo el mundo repite es cierta. Cuando algo está en disputa, lo decimos. Cuando una palabra es un insulto discriminatorio, también lo decimos, y la incluimos igualmente, porque necesitas entenderla cuando la oigas.',

  // ------------------------------------------- home — SEO about section
  aboutH2: 'Sobre Slang Words Online — Tu portal global de palabras de argot',
  aboutP1:
    'Todo idioma tiene dos vidas: la versión que aparece en los libros de texto y la versión que realmente se habla en la calle, en los chats de grupo y en la barra de un bar. Slang Words Online existe para la segunda. Creamos este sitio como un punto de encuentro de argot y jerga para cualquiera que alguna vez haya oído una palabra en una conversación, en la letra de una canción o en unos subtítulos y haya pensado: «¿Qué diablos significa eso?». Ya sea que intentes descifrar el argot británico de un pub londinense, la jerga estadounidense que no deja de salir en redes sociales o las expresiones australianas que tu compañero suelta con naturalidad, la respuesta está aquí, explicada con el contexto que una app de traducción jamás te dará.',
  aboutP2:
    'Nuestra biblioteca de palabras de argot abarca actualmente dieciséis países y once categorías temáticas. Puedes explorar el argot británico y el argot estadounidense junto con el argot australiano, canadiense e irlandés: las grandes ramas del mundo anglófono. Luego están las colecciones de lenguas romances: argot mexicano, español, italiano, francés, colombiano, cubano y dominicano, cada uno reflejando un dialecto propio con su ritmo y actitud. También cubrimos el argot alemán, ruso, japonés y coreano: cuatro repertorios donde la distancia respecto a la versión académica es tan grande que el argot funciona casi como un registro lingüístico independiente.',
  aboutP3:
    '¿Qué hace que esta colección sea diferente de una rápida traducción en Google? La profundidad, principalmente. Cada entrada incluye la definición —a menudo más de una, porque las palabras de argot rara vez significan una sola cosa— junto con una guía de pronunciación que refleja cómo suena realmente la palabra, no cómo debería sonar. Ofrecemos ejemplos reales y trabajados: oraciones completas en el idioma original, traducidas línea por línea, para ver la palabra en acción en un contexto auténtico. Y explicamos lo más importante y lo que los diccionarios suelen omitir: si es afectuosa u hostil, si es apropiada en compañía formal y si la curiosa historia de origen que circula por internet es real o un mito.',
  aboutP4:
    'Los temas están organizados según cómo la gente busca de verdad. En lugar de acumular cientos de términos en una sola página, los dividimos en categorías que reflejan para qué sirve el argot: Argot de aprobación y elogio, Argot de saludos y tratamiento, Argot de insultos y quejas, Argot para personas, Argot de dinero y trabajo, Argot de comida y bebida, Argot de salir de fiesta, Argot de amor y ligue, Argot de emoción y reacción, Argot de muletillas y Argot de cosas cotidianas. Cada categoría se sitúa bajo un país específico, porque el mismo tema —el dinero o los insultos, por ejemplo— genera un vocabulario completamente distinto según quién habla y dónde.',
  aboutP5:
    'Este sitio es de acceso gratuito, se actualiza periódicamente y está disponible en nueve idiomas para que los hablantes de otras lenguas puedan recorrer toda la biblioteca en su propio idioma. Piensa en Slang Words Online como el diccionario de argot que siempre deseaste que existiera: riguroso, honesto y redactado por personas a las que de verdad les importa que no pases una vergüenza en el momento equivocado. Sumérgete: elige un país, elige un tema o simplemente busca la palabra que acabas de escuchar.',

  // ----------------------------------------- home — FAQ section
  faqH2: 'Preguntas frecuentes sobre el argot',
  faqQ1: '¿Qué son las palabras de argot?',
  faqA1:
    'Las palabras de argot o jerga son términos y expresiones informales que se utilizan con mucha mayor frecuencia en el lenguaje hablado que en el escrito. Suelen originarse dentro de grupos sociales, subculturas o regiones concretas, y a menudo adquieren significados que difieren de las definiciones del diccionario estándar. El argot expresa identidad, humor o actitud, y evoluciona mucho más rápido que el vocabulario formal: términos rompedores hace una década hoy pueden sonar anticuados.',
  faqQ2: '¿Cuál es el argot más reciente?',
  faqA2:
    'El argot evoluciona constantemente, y cada semana surgen nuevos términos en redes sociales como TikTok, Twitter/X e Instagram. Algunos ejemplos recientes incluyen «delulu» (optimismo ilusorio), «rizz» (carisma para ligar), «slay» (hacer algo de forma brillante) y «ate» (bordarlo, triunfar por completo). La forma más rápida de mantenerse al día es seguir las conversaciones que son tendencia en internet o explorar nuestra colección actualizada por países.',
  faqQ3: '¿En qué se diferencia el argot del lenguaje formal?',
  faqA3:
    'El lenguaje formal sigue las reglas gramaticales y léxicas estándar y se utiliza en entornos profesionales, académicos u oficiales. El argot, por el contrario, es desenfadado, a menudo rompe las normas gramaticales y está estrechamente ligado a comunidades o generaciones específicas. Una palabra como «cool» se entiende en todo el mundo, pero expresiones como «chuffed» (británico para encantado) o «naco» (mexicano para vulgar) solo cobran pleno sentido cuando se conoce la cultura que hay detrás.',
  faqQ4: '¿Por qué cada país tiene un argot diferente?',
  faqA4:
    'El argot se forja a través de la cultura local, la historia y la dinámica social. Incluso los países que comparten el mismo idioma —como Estados Unidos, el Reino Unido y Australia con el inglés, o México, España y Colombia con el español— desarrollan vocabularios coloquiales completamente distintos. Esto ocurre porque el argot refleja vivencias cotidianas: la gastronomía, la música, el humor, la estructura social y los medios de comunicación dejan su impronta en el habla informal.',
  faqQ5: '¿Está bien usar argot en las conversaciones cotidianas?',
  faqA5:
    'Totalmente: el argot es una parte natural de la comunicación humana, y utilizarlo con acierto demuestra sensibilidad social y dominio del idioma. La clave reside en el contexto: encaja a la perfección en charlas distendidas, mensajes de texto y redes sociales, pero puede desentonar en una entrevista de trabajo, un ensayo académico o un correo formal. Saber cambiar de registro es en sí mismo una destreza lingüística.',
  faqQ6: '¿Cómo puedo aprender el argot de otros países?',
  faqA6:
    'La inmersión es el mejor método: ver series locales, seguir a creadores de contenido de ese país en redes sociales y conversar con hablantes nativos son de gran ayuda. Un recurso especializado como Slang Words Online aporta además el contexto que los diccionarios pasan por alto: quién usa la palabra, si es cariñosa u ofensiva y cómo suena realmente en una frase. Cubrimos dieciséis países y miles de términos con definiciones, guías de pronunciación y ejemplos prácticos.',

  // --------------------------------------------------------------- country
  startHere: 'Empieza por estas',
  startHereLead:
    'Los términos de abajo son los que llevan más detalle de uso: registro, origen y las situaciones en las que se tuercen. Conviene leerlos enteros antes que el resto.',
  byTopic: 'Por tema',
  byTopicLead: (adjective: string) =>
    `Cada página reúne todos los términos ${adjective.toLowerCase()} que tenemos sobre un mismo tema, uno junto a otro.`,
  allTermsAz: (adjective: string) => `Todo el argot ${adjective.toLowerCase()} de la A a la Z`,
  termsWithExamples: (n: number) =>
    `${plural(n, 'término', 'términos')}, cada uno con acepciones y ejemplos reales.`,
  slangFor: (adjective: string, topic: string) => `Argot ${adjective.toLowerCase()} para ${topic}`,

  categoryLead: (n: number, adjective: string, topic: string) =>
    `${plural(n, 'término', 'términos')} del argot ${adjective.toLowerCase()} sobre ${topic}, cada uno con su significado, su pronunciación y un ejemplo de uso.`,
  otherTopicsIn: (adjective: string) => `Otros temas del argot ${adjective.toLowerCase()}`,
  sameTopicElsewhere: (topic: string) => `${topic} en otros países`,
  sameTopicElsewhereLead:
    'El mismo tema en los demás países de este sitio: la forma más rápida de ver lo distinto que dicen una misma cosa cuatro idiomas.',

  aSlangTerm: (languageName: string) => `Un término del argot en ${languageName.toLowerCase()}.`,
  countrySlangHeading: (adjective: string) => `Argot ${adjective}: palabras y expresiones explicadas`,
  moreSenses: (n: number) => `+${n} ${n === 1 ? 'acepción más' : 'acepciones más'}`,
  useWithCare: 'Úsala con cuidado',
  browseAll: (adjective: string) => `Ver todo el argot ${adjective.toLowerCase()}`,
  beforeYouUse: 'Antes de usarla',
  whatItMeans: 'Qué significa',
  literally: 'Literalmente:',
  inUse: 'En uso',
  examplesWithTranslations: 'Ejemplos con traducción',
  note: 'Nota:',
  whereItComesFrom: 'De dónde viene',
  firstAttested: (when: string) => `Primer registro: ${when}`,
  otherForms: 'Otras formas',
  spellingsAndVariants: 'Grafías y variantes:',
  similarTerms: 'Términos similares:',
  romanizedAs: 'Romanización',
  nearbyTerms: 'Términos cercanos',
  previous: 'Anterior',
  next: 'Siguiente',
  relatedTerms: 'Términos relacionados',
  alsoUsedIn: 'También se usa en',
  topics: 'Temas',
  moreTermsLikeThis: (adjective: string) => `Más argot ${adjective.toLowerCase()} como este`,
  updatedOn: (date: string) => `Actualizado el ${date}.`,

  browseH1: 'Todos los términos, de la A a la Z',
  browseLead: (terms: number, countries: number) =>
    `${plural(terms, 'término del sitio', 'términos del sitio')} en un único índice alfabético, de ${plural(countries, 'país', 'países')}. Se ordenan ignorando los acentos, así que güey va con las ges.`,

  searchH1: 'Buscar',
  searchLead:
    'Busca por término o por significado: escribir “borracho” encuentra las palabras para eso en todos los idiomas del sitio.',
  startTyping: 'Empieza a escribir para ver resultados.',
  resultCount: (n: number) => `${n} resultado${n === 1 ? '' : 's'}`,
  noMatches: (q: string) => `No hay nada que coincida con «${q}».`,
  noMatchesTryBrowse: 'Prueba con una palabra más corta, o consulta el índice A–Z.',

  notFoundKicker: '404',
  notFoundH1: 'Aquí no hay esa palabra',
  notFoundBody:
    'Esta página no existe: puede que el término todavía no esté en el diccionario, o que el enlace esté desactualizado. Buscar suele ser más rápido que adivinar la URL.',
  orStartFromCountry: 'O empieza por un país',
  pageNotFound: 'Página no encontrada',
  goToHomepage: 'Ir a la página de inicio',
  browseAllSlang: 'Explorar todo el argot de la A a la Z',
  suggestThisWord: 'Sugerir esta palabra',
  searchByTermOrMeaning: 'Buscar por término o por significado',
  notFoundSearchLead: (count: number) =>
    `Prueba a escribir un término o una definición para localizar la expresión en los ${count} países:`,

  // ------------------------------------------------------------------- 500
  serverErrorKicker: '500',
  serverError: 'Error del servidor',
  serverErrorH1: 'Algo salió mal',
  serverErrorBody:
    'Nuestros servidores han encontrado un problema inesperado al generar esta página. Suele ser temporal. Puedes intentar recargar la página, buscar un término o navegar desde nuestra página de inicio.',
  reloadPage: 'Recargar página',
  reportError: 'Informar de un error',
  searchTheDictionary: 'Buscar en el diccionario',
  serverErrorSearchLead:
    '¿Buscas un término, modismo o expresión de argot específica? Busca directamente a continuación:',


  footerTagline: 'La guía global del argot y las expresiones informales',
  byCountry: 'Por país',
  thisSite: 'Este sitio',
  footerNote:
    'Las definiciones se basan en las fuentes disponibles. Cuando un origen está en disputa o es incierto, lo decimos.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `argot ${adjective.toLowerCase()}`,

  // ---------------------------------------------------------------- about us
  aboutH1: 'Sobre Slang Words Online',
  aboutSubtitle:
    'La guía global del lenguaje vivo, el vocabulario de la calle y los modismos culturales.',
  aboutIntro:
    'Todo idioma tiene dos vidas: la versión formal de los manuales de gramática y la versión viva y dinámica que realmente se habla en la calle, en los cafés, en la mesa, en las canciones y en los chats grupales. <strong>Slang Words Online</strong> existe para la segunda.',
  aboutStatCountries: 'Países y dialectos',
  aboutStatTerms: 'Términos y frases de argot',
  aboutStatCategories: 'Categorías cotidianas',
  aboutStatLanguages: 'Idiomas compatibles',
  aboutWhyHeading: 'Por qué creamos Slang Words Online',
  aboutWhyP1:
    '¿Alguna vez has escuchado una frase en una conversación, visto una serie internacional con subtítulos o escuchado una canción y te has preguntado: <em>«¿Qué diablos significa eso en realidad?»</em>',
  aboutWhyP2:
    'Poner la frase en un traductor automático suele generar confusión: o traduce cada palabra de forma literal (produciendo disparates como traducir «de una» por «of one» en lugar de «inmediatamente / por supuesto») o da un sustituto de diccionario demasiado formal que pierde la carga emocional.',
  aboutWhyP3:
    'Creamos Slang Words Online para aportar el contexto cultural, el tono, el registro y los matices sociales que los libros de texto y los traductores automáticos dejan de lado.',
  aboutPillarsHeading: 'Lo que distingue a nuestro diccionario',
  aboutPillarsLead:
    'Un diccionario de jerga solo vale la pena si explica lo que una simple búsqueda no puede resolver:',
  aboutPillar1Title: '1. Registro y matices sociales',
  aboutPillar1Body:
    '¿Es un término cariñoso entre amigos íntimos o resulta ofensivo en un entorno formal? Indicamos con claridad el registro y el tono para que nunca cometas un desliz incómodo.',
  aboutPillar2Title: '2. Ejemplos reales y contextualizados',
  aboutPillar2Body:
    'Cada término incluye diálogos naturales y oraciones contextuales en su idioma original, junto con traducciones coloquiales y literales precisas.',
  aboutPillar3Title: '3. Orígenes debatidos y etimología',
  aboutPillar3Body:
    'El folclore de internet está repleto de etimologías falsas. Cuando un origen está demostrado documentalmente, citamos fuentes históricas; cuando se trata de una leyenda urbana o está en debate, lo decimos claramente.',
  aboutPillar4Title: '4. Romanización y fonética',
  aboutPillar4Body:
    'Las escrituras no latinas (cirílico, kanji/hiragana japonés, hangul coreano) cuentan con romanizaciones claras, guías de pronunciación y consejos fonéticos para que puedas leerlas y pronunciarlas con seguridad.',
  aboutCulturesHeading: 'Culturas y dialectos cubiertos',
  aboutCulturesLead: (count: number) =>
    `Nuestra biblioteca abarca ${count} centros lingüísticos y regionales diferentes, reflejando la rica diversidad del habla informal en todo el mundo:`,
  aboutEditorialHeading: 'Filosofía editorial y aportes comunitarios',
  aboutEditorialP1:
    'El argot no lo inventan los lexicógrafos en torres de marfil; nace en patios escolares, clubes de comedia, partidos deportivos, estudios de grabación y salas de chat. Al estar en constante evolución, Slang Words Online es un proyecto vivo.',
  aboutEditorialP2:
    'Damos la bienvenida a hablantes nativos, viajeros y apasionados de la lingüística de cualquier lugar para que propongan nuevas expresiones, señalen matices dialectales o sugieran correcciones.',
  aboutConnectHeading: 'Ponte en contacto con nosotros',
  aboutConnectBody:
    '¿Conoces una palabra de argot de tu tierra que aún no hayamos documentado? ¿Has visto un matiz regional que merezca mencionarse? Nos encantará saber de ti.',
  aboutContactBtn: 'Contactar al equipo',
  aboutBrowseBtn: 'Explorar todo el argot de la A a la Z',

  aboutUs: 'Sobre nosotros',
  // ---------------------------------------------------------------- contact us
  contactKicker: 'Ponte en contacto',
  contactSubtitle:
    'Nos encanta recibir mensajes de apasionados del lenguaje, hablantes nativos y curiosos de todo el mundo.',
  contactIntro:
    'Tanto si deseas sugerir una expresión popular de tu región que aún no hayamos catalogado, proponer una corrección de matiz, plantear una colaboración o simplemente saludar, escribe directamente a nuestro equipo editorial.',
  contactOfficialEmail: 'Correo electrónico oficial',
  contactEmailLead:
    'Nuestro equipo editorial revisa activamente esta bandeja de entrada. Envía tus consultas, propuestas de términos o comentarios directamente.',
  contactCopyEmail: 'Copiar dirección de correo',
  contactCopied: '¡Copiado al portapapeles!',
  contactCategoriesHeading: 'Motivos para contactarnos',
  contactCat1Title: 'Sugerir nueva jerga',
  contactCat1Body:
    '¿Conoces una palabra callejera, un modismo viral o una expresión regional que falte? Comparte el término, su significado, región y oraciones de ejemplo.',
  contactCat2Title: 'Matices dialectales y correcciones',
  contactCat2Body:
    '¿Se usa un término de forma diferente en tu lugar de origen? ¿Mencionamos un origen controvertido? Priorizamos la autenticidad local y actualizamos los artículos con rapidez.',
  contactCat3Title: 'Mejoras y sugerencias',
  contactCat3Body:
    'Propuestas para nuevos países, sugerencias de interfaz, pronunciaciones en audio o reportes de errores técnicos.',
  contactCat4Title: 'Colaboraciones y medios',
  contactCat4Body:
    'Investigación lingüística, instituciones educativas, consultas sobre traducción y preguntas de prensa.',
  contactResponseTimeLabel: 'Tiempo de respuesta:',
  contactResponseTimeText:
    'Nuestro equipo editorial revisa los correos de la comunidad varias veces por semana. Por lo general, respondemos en un plazo de 24 a 48 horas.',

  contactUs: 'Contacto',
  // ---------------------------------------------------------------- privacy policy
  privacyKicker: 'Legal y privacidad',
  privacyLastUpdated: 'Última actualización: Septiembre de 2026',
  privacyIntro:
    'En Slang Words Online (<a href="/es/" class="text-primary hover:underline">slangwordsonline.com</a>), tu privacidad es clara y directa. Creemos que un recurso educativo debe ser transparente, seguro y respetuoso con todas las personas que lo consultan.',
  privacyPrinciplesHeading: 'Nuestros principios de privacidad',
  privacyPrinciple1Title: '1. Sin necesidad de cuenta y acceso gratuito',
  privacyPrinciple1Body:
    'Puedes explorar libremente todas las entradas de argot, consultar los países y buscar en el diccionario sin crear ninguna cuenta ni facilitar datos personales.',
  privacyPrinciple2Title: '2. Nunca vendemos tus datos',
  privacyPrinciple2Body:
    'Jamás comercializamos, intermediamos ni vendemos información de nuestros visitantes a terceros, intermediarios de datos o redes publicitarias.',
  privacyPrinciple3Title: '3. Comunicación directa y transparente',
  privacyPrinciple3Body:
    'Si te comunicas con nosotros por correo electrónico, tu mensaje se utilizará exclusivamente para responder a tus preguntas o evaluar tus propuestas de términos.',
  privacyCollectHeading: 'Información que recopilamos',
  privacyCollectLead:
    'Recopilamos únicamente la información mínima imprescindible para ofrecer, proteger y mantener el sitio web:',
  privacyCollectA_Title: 'A. Datos técnicos y registros anónimos',
  privacyCollectA_Body:
    'Cuando visitas nuestro sitio, nuestra infraestructura registra de forma automática registros técnicos de diagnóstico no identificativos (como fecha y hora de la petición, navegador, sistema operativo, URLs solicitadas y direcciones IP anonimizadas). Estos datos se emplean estrictamente para monitorizar el rendimiento, corregir errores y bloquear accesos maliciosos.',
  privacyCollectB_Title: 'B. Preferencias en el navegador',
  privacyCollectB_Body:
    'Cuando cambias entre tema claro y oscuro, tu elección se guarda localmente en el <code>localStorage</code> de tu navegador. Esta información permanece en tu dispositivo y nunca se envía a nuestros servidores.',
  privacyCollectC_Title: 'C. Correspondencia directa por correo',
  privacyCollectC_Body:
    'Si escribes a nuestro equipo, recibimos tu dirección de correo, nombre (si lo indicas) y el contenido de tu mensaje. Solo conservamos estos datos el tiempo necesario para atender tu consulta o actualizar el diccionario.',
  privacyCookiesHeading: 'Cookies y tecnologías de seguimiento',
  privacyCookiesLead:
    'Slang Words Online está diseñado con una rigurosa arquitectura de privacidad desde el inicio:',
  privacyCookiesB1:
    '<strong>Sin cookies publicitarias ni de seguimiento:</strong> No empleamos cookies de seguimiento de terceros, píxeles de comportamiento ni herramientas de rastreo entre sitios.',
  privacyCookiesB2:
    '<strong>Sin huella digital ni elaboración de perfiles:</strong> No elaboramos perfiles de tus hábitos de navegación en otros sitios web ni intentamos identificar a visitantes individuales.',
  privacyCookiesB3:
    '<strong>Almacenamiento local puramente funcional:</strong> Solo empleamos almacenamiento local en el navegador para recordar tu preferencia de tema (claro u oscuro) para una lectura cómoda.',
  privacyUpdatesHeading: 'Actualizaciones de la política',
  privacyUpdatesBody:
    'Podemos revisar esta Política de Privacidad periódicamente para reflejar mejoras en la web o cambios operativos. Cualquier actualización se publicará directamente en esta página con la fecha actualizada.',
  privacyContactBody:
    'Si tienes preguntas, dudas o comentarios acerca de nuestras prácticas de privacidad, contacta directamente con nuestro equipo:',
  privacyContactEmailLabel: 'Correo:',

  privacyPolicy: 'Política de privacidad',
  // ---------------------------------------------------------------- terms & conditions
  termsKicker: 'Términos de servicio',
  termsLastUpdated: 'Última actualización: septiembre de 2026',
  termsIntro:
    'Bienvenido a Slang Words Online (<a href="/es/" class="text-primary hover:underline">slangwordsonline.com</a>). Al acceder, navegar o consultar contenidos en nuestro sitio web, manifiestas tu conformidad con estos Términos y Condiciones. Por favor, léelos atentamente.',
  termsSummaryHeading: 'Resumen importante',
  termsSummaryP1Title: 'Propósito lingüístico descriptivo:',
  termsSummaryP1Body:
    'Documentamos cómo se habla en la vida real. La inclusión de expresiones coloquiales, malsonantes o controvertidas tiene un fin exclusivamente lexicográfico y no supone respaldo alguno.',
  termsSummaryP2Title: 'Uso legítimo y educativo:',
  termsSummaryP2Body:
    'El contenido puede consultarse y citarse libremente para fines de aprendizaje personal, investigación académica y estudio cultural. Queda prohibida la extracción masiva automatizada y la réplica comercial.',
  termsSummaryP3Title: 'Base informativa «tal cual»:',
  termsSummaryP3Body:
    'El lenguaje evoluciona rápidamente según regiones y generaciones. Aplica siempre tu propio criterio social al emplear términos informales.',
  termsSection1Heading: '1. Aceptación de los términos',
  termsSection1Body:
    'Al acceder o utilizar Slang Words Online (el «Servicio» o el «Sitio»), confirmas que has leído, entendido y aceptado quedar legalmente vinculado por estos Términos y nuestra Política de Privacidad. Si no estás de acuerdo con ellos, te rogamos no utilizar el Sitio.',
  termsSection2Heading: '2. Aviso lingüístico y naturaleza del contenido',
  termsSection2Lead:
    'El argot y la jerga son un reflejo auténtico y directo de las culturas y emociones humanas. En consecuencia, nuestro diccionario incluye expresiones que abarcan:',
  termsSection2B1: 'Vocabulario coloquial vulgar, moderado o malsonante.',
  termsSection2B2: 'Frases íntimas, afectivas o del habla popular amorosa.',
  termsSection2B3: 'Insultos, bromas callejeras y expresiones provocadoras.',
  termsSection2B4: 'Términos culturalmente sensibles, controvertidos o reapropiados.',
  termsEditorialStanceLabel: 'Criterio editorial:',
  termsEditorialStanceBody:
    'Slang Words Online describe el lenguaje de forma descriptiva y no prescriptiva. La inclusión de un término no implica que respaldemos la hostilidad, el acoso ni la discriminación. Indicamos el registro de habla, traducciones literales y advertencias contextuales para comprender su significado al oírlo o leerlo.',
  termsSection3Heading: '3. Derechos de propiedad intelectual',
  termsSection3Body:
    'Todas las explicaciones textuales originales, anotaciones contextuales, desgloses de pronunciación, ejemplos de uso redactados, la arquitectura del sitio y sus elementos de diseño son propiedad intelectual de Slang Words Online.',
  termsPermittedUseLabel: 'Uso permitido:',
  termsPermittedUseBody:
    'Se te concede una licencia limitada y revocable para leer y consultar el sitio con fines personales, no comerciales, académicos y educativos. Puedes citar definiciones breves indicando la atribución clara y un enlace a la página correspondiente de <code>slangwordsonline.com</code>.',
  termsProhibitedReproLabel: 'Reproducción prohibida:',
  termsProhibitedReproBody:
    'Queda prohibido recopilar sistemáticamente, extraer mediante bots (scraping), reproducir, clonar o replicar nuestra base de datos, entradas o índices de búsqueda para bases de datos competidoras, servicios comerciales o entrenamiento de modelos de IA sin autorización previa por escrito.',
  termsSection4Heading: '4. Política de uso aceptable',
  termsSection4Lead: 'Al utilizar este Sitio, te comprometes a no:',
  termsSection4B1:
    'Realizar ataques automatizados, rastreos abusivos que sobrecarguen la infraestructura o intentos de denegación de servicio.',
  termsSection4B2:
    'Escanear, sondear o poner a prueba la seguridad o vulnerabilidad de nuestros sistemas o redes.',
  termsSection4B3:
    'Utilizar el sitio o sus canales de contacto para remitir publicidad no deseada (spam) o código malicioso.',
  termsSection4B4:
    'Falsificar tu identidad o hacerte pasar por miembros de nuestro equipo editorial.',
  termsSection5Heading: '5. Enlaces externos y referencias de terceros',
  termsSection5Body:
    'Nuestro sitio puede enlazar ocasionalmente con páginas web externas, publicaciones académicas o fuentes etimológicas. No tenemos control sobre sus contenidos, políticas o medidas de seguridad, declinando cualquier responsabilidad sobre las mismas.',
  termsSection6Heading: '6. Exclusión de garantías',
  termsSection6Body1:
    'El Servicio se proporciona estrictamente <strong>«TAL CUAL»</strong> y <strong>«SEGÚN DISPONIBILIDAD»</strong>, sin garantías de ninguna clase, ni expresas ni implícitas.',
  termsSection6Body2:
    'Aunque nuestro equipo contrasta rigurosamente las definiciones con el habla nativa auténtica y fuentes documentales, el lenguaje coloquial varía de forma notable entre regiones, edades y entornos sociales. Slang Words Online no garantiza que el uso de cualquier término informal sea adecuado o bien recibido en un contexto social o profesional concreto.',
  termsSection7Heading: '7. Limitación de responsabilidad',
  termsSection7Body:
    'En la medida máxima permitida por la legislación aplicable, Slang Words Online, sus creadores y colaboradores no serán responsables por daños directos o indirectos derivados del uso o imposibilidad de uso del sitio, ni por malentendidos lingüísticos, errores en el diccionario o situaciones sociales desfavorables.',
  termsSection8Heading: '8. Modificaciones de los términos',
  termsSection8Body:
    'Nos reservamos el derecho de actualizar estos Términos y Condiciones cuando sea necesario. Cualquier modificación se publicará en esta página con la fecha actualizada. El uso continuado del sitio supone la aceptación de los nuevos términos.',
  termsSection9Heading: '9. Información de contacto',
  termsSection9Body:
    'Para consultas legales, notificaciones de derechos de autor, aclaraciones sobre estos términos o dudas generales, puedes escribirnos directamente a:',
  termsContactEmailLabel: 'Correo electrónico:',

  termsConditions: 'Términos y condiciones',
};
