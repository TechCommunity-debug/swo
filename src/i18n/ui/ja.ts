import type { Strings } from './types';

/**
 * 日本語版のクローム辞書。
 *
 * 共有の `plural` ヘルパーはここでは使いません。日本語には数による語形変化が
 * なく、「1 件」と「8 件」で名詞が変わることはない一方で、数えるものごとに
 * 助数詞（件・語・か国・つ）を選び分ける必要があります。単数形と複数形を二つ
 * 渡す仕組みは前者しか解決しないので、各文にふさわしい助数詞を直接書きます。
 *
 * 表記の方針：見出し・タイトルの「slang」は一貫して「スラング」。引用符は
 * 「」、句読点は、。を使い、補間される日本語の前後には空白を入れません。
 */
export const ja: Strings = {
  // ----------------------------------------------------------------- chrome
  skipToContent: '本文へスキップ',
  mainNav: 'メイン',
  countriesNav: '国から探す',
  sectionsNav: 'セクション',
  openMenu: 'メニューを開く',
  breadcrumb: 'パンくずリスト',
  home: 'ホーム',
  browse: '索引 A–Z',
  search: '検索',
  language: '言語',
  jumpToLetter: '頭文字で移動',
  termsBeginningWith: (letter: string) => `${letter} で始まる語`,

  // ------------------------------------------------------------------ home
  homeH1: '世界のスラングを読み解くガイド',
  homeLead: (terms: number, countries: number) =>
    `${countries}か国、${terms}語のくだけた言葉と言い回し。意味、言い方、そして使えば失敗する場面まで書いています。`,
  searchPlaceholder: 'スラングを、または意味を検索…',
  searchPlaceholderCompact: 'スラングを検索…',
  searchLabel: 'スラングを検索',
  searchHint: '入力すると下に結果が出ます。Enter で検索ページを開きます。',
  tryTerms: '例えば',
  pickCountry: '国を選ぶ',
  pickCountryLead:
    'スラングは言語よりも先に土地のものです。その言葉が実際に話されている場所から始めてください。',
  termsCount: (n: number) => `${n}語`,
  popularTopics: 'よく読まれているテーマ',
  popularTopicsLead:
    '実際に検索されているページです。一つの国、一つのテーマについて、掲載している語をすべて並べています。',
  oneWordEach: '各国から一語ずつ',
  oneWordEachLead:
    '完全な項目がどんなものかの見本です。語義、訳付きの用例、そして本当に分かっている場合の語源が並びます。',
  editorialH2: '辞書アプリでは見つからない文脈',
  editorialBody:
    'スラング辞典に価値があるとすれば、それは翻訳アプリが答えられないことを教えてくれる場合だけです。その言葉が親しみなのか敵意なのか、誰に向かって言っていいのか、そして誰もが繰り返す語源の話が本当なのか。定説が割れているところでは、割れていると書きます。差別語であるところでは、それも書いたうえで、それでも掲載します。耳にしたときに理解できなければ困るからです。',
  // --------------------------------------------------------------- country
  startHere: 'まずはこの語から',
  startHereLead:
    '以下の語には使い方の情報がいちばん多く入っています。語調、語源、そして踏み外しやすい場面まで。ほかを読む前に、この数語を最後まで読む価値があります。',
  byTopic: 'テーマ別',
  byTopicLead: (adjective: string) =>
    `以下の各ページには、一つのテーマについて掲載している${adjective}のスラングがすべて並びます。`,
  allTermsAz: (adjective: string) => `${adjective}のスラング一覧 A–Z`,
  termsWithExamples: (n: number) => `${n}語。それぞれに語義と、訳を付けた用例があります。`,
  slangFor: (adjective: string, topic: string) => `${adjective}のスラング：${topic}`,

  // ------------------------------------------------ country × category page
  categoryLead: (n: number, adjective: string, topic: string) =>
    `${topic}に関する${adjective}のスラング${n}語。それぞれの意味、発音、そして実際に使われている例を載せています。`,
  otherTopicsIn: (adjective: string) => `${adjective}のスラングの他のテーマ`,
  sameTopicElsewhere: (topic: string) => `他の国の「${topic}」のスラング`,
  sameTopicElsewhereLead:
    'このサイトの他の国で、同じテーマを扱ったページです。一つのことを言語ごとにどれだけ違う言い方をするのか、いちばん手早く分かります。',

  // ----------------------------------------------------------------- entry
  aSlangTerm: (languageName: string) => `${languageName}のスラングです。`,
  /** 国トップの <h1>。例：「メキシコのスラング」。 */
  countrySlangHeading: (adjective: string) => `${adjective}のスラング`,
  /** 項目カードの「他に2つの語義」の行。 */
  moreSenses: (n: number) => `他に${n}つの語義`,
  useWithCare: '使い方に注意',
  browseAll: (adjective: string) => `${adjective}のスラングをすべて見る`,
  beforeYouUse: '使う前に',
  whatItMeans: '意味',
  literally: '直訳：',
  inUse: '使い方',
  examplesWithTranslations: '訳付きの用例',
  note: '注：',
  whereItComesFrom: '語源',
  firstAttested: (when: string) => `初出：${when}`,
  otherForms: 'ほかの形',
  spellingsAndVariants: '表記と異形：',
  similarTerms: '近い意味の語：',
  romanizedAs: 'ローマ字表記',
  nearbyTerms: '前後の語',
  previous: '前へ',
  next: '次へ',
  relatedTerms: '関連する語',
  alsoUsedIn: 'ほかに使われている国',
  topics: 'テーマ',
  moreTermsLikeThis: (adjective: string) => `これに近い${adjective}のスラング`,
  updatedOn: (date: string) => `更新日：${date}`,

  // ---------------------------------------------------------------- browse
  browseH1: '全項目を A–Z で',
  browseLead: (terms: number, countries: number) =>
    `${countries}か国、サイト全体の${terms}語を一つのアルファベット順索引にまとめています。アクセント記号は無視して並べているので、güey は G の並びに入ります。`,

  // ---------------------------------------------------------------- search
  searchH1: '検索',
  searchLead:
    '語からでも意味からでも検索できます。「酔っぱらう」と打てば、サイトにあるすべての言語でそれにあたる語が出てきます。',
  startTyping: '入力すると結果が表示されます。',
  resultCount: (n: number) => `${n}件`,
  noMatches: (q: string) => `「${q}」に一致するものはありません。`,
  noMatchesTryBrowse: 'もっと短い語で試すか、A–Z の索引から探してください。',

  // ------------------------------------------------------------------- 404
  notFoundKicker: '404',
  notFoundH1: 'その言葉はここにはありません',
  notFoundBody:
    'このページはありません。その語がまだ辞典に入っていないか、リンクが古くなっている可能性があります。URL を推測するより、検索したほうがたいてい早く着きます。',
  orStartFromCountry: '国から探す',

  // ---------------------------------------------------------------- footer
  footerTagline: '世界のスラングとくだけた表現のガイド',
  byCountry: '国別',
  thisSite: 'このサイト',
  footerNote:
    '定義は入手可能な情報源に基づいています。語源に異説や不確かな点がある場合は、その旨を書いています。',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective}のスラング`,

  aboutUs: '当サイトについて',
  contactUs: 'お問い合わせ',
  privacyPolicy: 'プライバシーポリシー',
  termsConditions: '利用規約',
};
