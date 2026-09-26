import type { Strings } from './types';

/**
 * Russian agrees on the last two digits of a count and has three forms where
 * the shared `plural` helper has two — 1 термин, 2 термина, 5 терминов — so
 * this locale brings its own selector rather than importing that one.
 *
 * 11–14 always take the "many" form; otherwise the last digit decides.
 */
const form = (n: number, one: string, few: string, many: string) => {
  const hundreds = Math.abs(n) % 100;
  const tens = hundreds % 10;
  if (hundreds >= 11 && hundreds <= 14) return many;
  if (tens === 1) return one;
  if (tens >= 2 && tens <= 4) return few;
  return many;
};

/** `form`, with the number in front: "3 термина". */
const plural = (n: number, one: string, few: string, many: string) =>
  `${n} ${form(n, one, few, many)}`;

/**
 * `adjective` is stored capitalised and in the nominative masculine singular,
 * agreeing with сленг: «Американский сленг». Every template below either uses
 * it at the head of a heading or lowercases it in mid-sentence, and no template
 * ever puts it in a position that would demand another ending — where English
 * wanted a genitive or a prepositional, the Russian sentence is rebuilt around
 * the nominative instead.
 */
export const ru: Strings = {
  skipToContent: 'Перейти к содержанию',
  mainNav: 'Основное',
  countriesNav: 'Страны',
  sectionsNav: 'Разделы',
  openMenu: 'Открыть меню',
  breadcrumb: 'Навигационная цепочка',
  home: 'Главная',
  browse: 'Указатель A–Z',
  search: 'Поиск',
  language: 'Язык',
  jumpToLetter: 'Перейти к букве',
  termsBeginningWith: (letter: string) => `Термины на букву ${letter}`,

  homeH1: 'Всемирный путеводитель по сленгу',
  homeLead: (terms: number, countries: number) =>
    `${plural(terms, 'неформальное слово или выражение', 'неформальных слова и выражения', 'неформальных слов и выражений')} из ${plural(countries, 'страны', 'стран', 'стран')} — что они значат, как их произносят и в каких ситуациях сказать их было бы ошибкой.`,
  searchPlaceholder: 'Сленговое слово — или значение…',
  searchPlaceholderCompact: 'Поиск по сленгу…',
  searchLabel: 'Поиск сленговых терминов',
  searchHint:
    'Результаты появляются ниже по мере набора. Нажмите Enter, чтобы открыть страницу поиска целиком.',
  tryTerms: 'Например',
  pickCountry: 'Выберите страну',
  pickCountryLead:
    'Сленг принадлежит месту раньше, чем языку. Начните оттуда, где на этих словах действительно говорят.',
  termsCount: (n: number) => plural(n, 'термин', 'термина', 'терминов'),
  popularTopics: 'Популярные темы',
  popularTopicsLead:
    'Страницы, которые ищут на самом деле: одна страна, один предмет и все термины, какие у нас на него есть.',
  oneWordEach: 'По одному слову из каждой страны',
  oneWordEachLead:
    'Образец того, как выглядит полная статья: значения, разобранные примеры с переводом и происхождение — там, где оно действительно известно.',
  editorialH2: 'Контекст, которого вы не найдёте в приложении-словаре',
  editorialBody:
    'Словарь сленга чего-то стоит только тогда, когда говорит вам то, чего не скажет переводчик в телефоне: ласковое это слово или враждебное, кому его можно сказать и правда ли та история происхождения, которую все повторяют. Где вопрос спорный — мы пишем, что он спорный. Где слово работает как оскорбление по признаку происхождения — пишем и это, и всё равно включаем его: понимать его на слух вам всё равно придётся.',
  startHere: 'Начните с этих',
  startHereLead:
    'В терминах ниже больше всего сведений об употреблении: регистр, происхождение и ситуации, в которых они срабатывают не так. Их стоит прочитать целиком прежде остальных.',
  byTopic: 'По темам',
  byTopicLead: (adjective: string) =>
    `${adjective} сленг, разложенный по предметам: каждая страница ниже собирает все термины на одну тему рядом друг с другом.`,
  allTermsAz: (adjective: string) => `Весь ${adjective.toLocaleLowerCase()} сленг, A–Z`,
  termsWithExamples: (n: number) =>
    `${plural(n, 'термин', 'термина', 'терминов')}, у каждого — значения и разобранные примеры.`,
  slangFor: (adjective: string, topic: string) => `${adjective} сленг про ${topic}`,

  categoryLead: (n: number, adjective: string, topic: string) =>
    `${plural(n, 'термин', 'термина', 'терминов')} про ${topic} — ${adjective.toLocaleLowerCase()} сленг со значениями, произношением и примером живого употребления для каждого слова.`,
  otherTopicsIn: (adjective: string) => `${adjective} сленг: другие темы`,
  sameTopicElsewhere: (topic: string) => `${topic}: сленг других стран`,
  sameTopicElsewhereLead:
    'Тот же предмет в остальных странах на сайте — самый быстрый способ увидеть, насколько по-разному языки говорят об одном и том же.',

  aSlangTerm: (languageName: string) =>
    `Сленговый термин. Язык — ${languageName.toLocaleLowerCase()}.`,
  countrySlangHeading: (adjective: string) => `${adjective} сленг`,
  moreSenses: (n: number) => `+${n} ${form(n, 'значение', 'значения', 'значений')}`,
  useWithCare: 'Употребляйте осторожно',
  browseAll: (adjective: string) => `Весь ${adjective.toLocaleLowerCase()} сленг`,
  beforeYouUse: 'Прежде чем это сказать',
  whatItMeans: 'Что это значит',
  literally: 'Дословно:',
  inUse: 'В речи',
  examplesWithTranslations: 'Примеры с переводом',
  note: 'Примечание:',
  whereItComesFrom: 'Откуда взялось',
  firstAttested: (when: string) => `Первая фиксация: ${when}`,
  otherForms: 'Другие формы',
  spellingsAndVariants: 'Написания и варианты:',
  similarTerms: 'Похожие термины:',
  romanizedAs: 'Латиницей',
  nearbyTerms: 'Соседние термины',
  previous: 'Предыдущий',
  next: 'Следующий',
  relatedTerms: 'Связанные термины',
  alsoUsedIn: 'Где ещё употребляется',
  topics: 'Темы',
  moreTermsLikeThis: (adjective: string) =>
    `Ещё ${adjective.toLocaleLowerCase()} сленг в том же духе`,
  updatedOn: (date: string) => `Обновлено ${date}.`,

  browseH1: 'Все термины, от A до Z',
  browseLead: (terms: number, countries: number) =>
    `${plural(terms, 'термин', 'термина', 'терминов')} сайта в одном алфавитном указателе, из ${plural(countries, 'страны', 'стран', 'стран')}. Сортировка не учитывает диакритику, поэтому güey стоит среди слов на g.`,

  searchH1: 'Поиск',
  searchLead:
    'Ищите по термину или по значению: наберите «пьяный» — и получите слова для этого на всех языках сайта.',
  startTyping: 'Начните набирать, чтобы увидеть результаты.',
  resultCount: (n: number) => plural(n, 'результат', 'результата', 'результатов'),
  noMatches: (q: string) => `По запросу «${q}» ничего нет.`,
  noMatchesTryBrowse: 'Попробуйте слово покороче — или откройте указатель A–Z.',

  notFoundKicker: '404',
  notFoundH1: 'Такого слова здесь нет',
  notFoundBody:
    'Этой страницы не существует: термина может ещё не быть в словаре, а ссылка могла устареть. Искать обычно быстрее, чем угадывать адрес.',
  orStartFromCountry: 'Или начните со страны',
  pageNotFound: 'Страница не найдена',
  goToHomepage: 'На главную страницу',
  browseAllSlang: 'Весь сленг от А до Я',
  suggestThisWord: 'Предложить это слово',
  searchByTermOrMeaning: 'Поиск по термину или значению',
  notFoundSearchLead: (count: number) =>
    `Попробуйте ввести термин или значение, чтобы найти выражение во всех ${count} странах:`,

  // ------------------------------------------------------------------- 500
  serverErrorKicker: '500',
  serverError: 'Ошибка сервера',
  serverErrorH1: 'Что-то пошло не так',
  serverErrorBody:
    'На наших серверах произошла непредвиденная ошибка при формировании этой страницы. Обычно это временно. Попробуйте обновить страницу, найти термин через поиск или перейти на главную страницу.',
  reloadPage: 'Обновить страницу',
  reportError: 'Сообщить об ошибке',
  searchTheDictionary: 'Поиск по словарю',
  serverErrorSearchLead:
    'Ищете определённое сленговое слово, идиому или выражение? Воспользуйтесь поиском ниже:',


  footerTagline: 'Всемирный путеводитель по сленгу и неформальным выражениям',
  byCountry: 'По странам',
  thisSite: 'Об этом сайте',
  footerNote:
    'Определения основаны на доступных источниках. Где происхождение спорно или неясно, мы так и пишем.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective} сленг`,

  aboutUs: 'О нас',
  contactUs: 'Контакты',
  privacyPolicy: 'Политика конфиденциальности',
  termsConditions: 'Условия использования',
};
