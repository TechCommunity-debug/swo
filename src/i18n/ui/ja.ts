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
  pageNotFound: 'ページが見つかりません',
  goToHomepage: 'ホームページへ戻る',
  browseAllSlang: 'スラング一覧 A〜Z',
  suggestThisWord: 'この言葉を提案する',
  searchByTermOrMeaning: '言葉や意味から検索',
  notFoundSearchLead: (count: number) =>
    `言葉や意味を入力して、全 ${count} か国の表現から探してみましょう:`,

  // ------------------------------------------------------------------- 500
  serverErrorKicker: '500',
  serverError: 'サーバーエラー',
  serverErrorH1: '問題が発生しました',
  serverErrorBody:
    'ページの生成中にサーバーで予期しない問題が発生しました。一時的な障害の可能性があります。ページの再読み込み、用語の検索、またはトップページからのブラウズをお試しください。',
  reloadPage: 'ページを再読み込み',
  reportError: 'エラーを報告',
  searchTheDictionary: '辞典を検索',
  serverErrorSearchLead:
    '特定のスラングや慣用句、表現をお探しですか？以下から直接検索できます:',


  // ---------------------------------------------------------------- footer
  footerTagline: '世界のスラングとくだけた表現のガイド',
  byCountry: '国別',
  thisSite: 'このサイト',
  footerNote:
    '定義は入手可能な情報源に基づいています。語源に異説や不確かな点がある場合は、その旨を書いています。',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective}のスラング`,

  // ---------------------------------------------------------------- about us
  aboutH1: 'Slang Words Online について',
  aboutSubtitle:
    '生きた言葉、街頭のボキャブラリー、文化的な口語表現を網羅する世界のスラングガイド。',
  aboutIntro:
    'あらゆる言語には2つの姿があります。教科書に載っている文法的な言葉と、街頭やカフェ、食卓、音楽、SNSのチャットで実際に交わされる生き生きとした言葉です。<strong>Slang Words Online</strong> は、まさにその「生きた言葉」のために作られました。',
  aboutStatCountries: '国と方言',
  aboutStatTerms: 'スラング用語・表現',
  aboutStatCategories: '日常カテゴリー',
  aboutStatLanguages: '対応言語',
  aboutWhyHeading: '私たちがこのサイトを作った理由',
  aboutWhyP1:
    '会話の中や字幕付きの海外ドラマ、洋楽の歌詞でフレーズを耳にして、<em>「これって一体どういう意味なんだろう？」</em>と疑問に思ったことはありませんか？',
  aboutWhyP2:
    '一般的な自動翻訳に入力しても混乱することが少なくありません。直訳されて意味不明になったり（例えばスペイン語の「de una」が「すぐに / もちろん」ではなく「1つの」と訳されるなど）、感情のこもっていない堅苦しい辞書表現に置き換えられてしまったりします。',
  aboutWhyP3:
    '教科書や機械翻訳では拾いきれない文化的背景、ニュアンス、口調、使用場面の空気を丁寧に届けるために、私たちは Slang Words Online を構築しました。',
  aboutPillarsHeading: '本辞典の4つのこだわり',
  aboutPillarsLead:
    'スラング辞典の真価は、単なるWeb検索では分からないリアルな情報を伝えられるかどうかにあります。',
  aboutPillar1Title: '1. 使用場面とニュアンスの明示',
  aboutPillar1Body:
    '親しい間柄の親愛を込めた冗談なのか、公の場では失礼にあたる表現なのか。気まずい思いをしないよう、言葉のトーンや適切さを分かりやすく分類しています。',
  aboutPillar2Title: '2. 生きた例文と自然な会話',
  aboutPillar2Body:
    'すべての項目に原語での自然な対話例と文脈を掲載し、意訳と直訳の両方で実際の使われ方を紹介しています。',
  aboutPillar3Title: '3. 語源と諸説の検証',
  aboutPillar3Body:
    'ネット上には俗説や誤った語源が溢れています。歴史的な根拠がある場合はそれを明記し、都市伝説や諸説ある場合はその旨を明示しています。',
  aboutPillar4Title: '4. 発音ガイドとローマ字表記',
  aboutPillar4Body:
    'キリル文字やハングルなどの非ラテン文字には、読みやすいローマ字表記や発音のポイントを掲載し、安心して発音できるよう工夫しています。',
  aboutCulturesHeading: '収録されている地域とカルチャー',
  aboutCulturesLead: (count: number) =>
    `世界${count}の言語・地域ハブを網羅し、世界各地で話されている色彩豊かなくだけた日常表現を紹介しています。`,
  aboutEditorialHeading: '編集方針とコミュニティからの参加',
  aboutEditorialP1:
    'スラングは学者が机の上で作るものではありません。学校のグラウンドや劇場、スタジアム、音楽スタジオ、ネットのコミュニティから日々生まれます。言葉は常に変化し続けるため、本サイトも常に進化を続けています。',
  aboutEditorialP2:
    'ネイティブスピーカーや旅行者、言語ファンの方々からの新しい表現の提案、方言のニュアンスの補足、訂正のフィードバックをいつでも歓迎しています。',
  aboutConnectHeading: 'お問い合わせ・ご提案',
  aboutConnectBody:
    'まだ掲載されていない地元のスラングや、補足したい地域独特のニュアンスをご存知ですか？ ぜひお気軽に情報をお寄せください。',
  aboutContactBtn: 'チームへ連絡する',
  aboutBrowseBtn: 'すべてのスラングを五十音・アルファベット順で見る',

  aboutUs: '当サイトについて',
  // ---------------------------------------------------------------- contact us
  contactKicker: 'お問い合わせ',
  contactSubtitle:
    '世界中の言葉を愛する方々、ネイティブスピーカー、学習者からのご連絡をお待ちしています。',
  contactIntro:
    'まだ掲載されていない地域独自のスラングの提案、ニュアンスの補足や訂正、共同研究のご相談、あるいは単なるご挨拶でも、編集・開発チームへお気軽にご連絡ください。',
  contactOfficialEmail: '公式お問い合わせ先',
  contactEmailLead:
    '編集チームが受信トレイを定期的に確認しています。ご質問、語句の解説、ご意見などをお気軽にお送りください。',
  contactCopyEmail: 'メールアドレスをコピー',
  contactCopied: 'クリップボードにコピーしました！',
  contactCategoriesHeading: '主なご連絡内容',
  contactCat1Title: '新しいスラングの提案',
  contactCat1Body:
    '掲載されていない流行語、ストリート表現、地域の方言をご存知ですか？ 単語、意味、使われている地域、例文をお寄せください。',
  contactCat2Title: 'ニュアンスの補足・訂正',
  contactCat2Body:
    '地元では異なる使われ方をしていますか？ 語源に別の説がありますか？ ネイティブによる正確性を重視し、迅速に反映します。',
  contactCat3Title: '機能改善・ご意見',
  contactCat3Body:
    '追加してほしい国、サイトの改善案、音声発音へのご要望、技術的な不具合報告など。',
  contactCat4Title: '連携・メディア取材',
  contactCat4Body:
    '言語学研究、教育機関との連携、翻訳に関するご相談、メディアからの取材申込みなど。',
  contactResponseTimeLabel: '返答までの目安：',
  contactResponseTimeText:
    '有志の編集チームが週に数回メッセージを確認しています。通常24〜48時間以内にご返答いたします。',

  contactUs: 'お問い合わせ',
  // ---------------------------------------------------------------- privacy policy
  privacyKicker: '法的情報とプライバシー',
  privacyLastUpdated: '最終更新日：2026年9月',
  privacyIntro:
    'Slang Words Online（<a href="/ja/" class="text-primary hover:underline">slangwordsonline.com</a>）では、利用者のプライバシーを明確かつシンプルに保護しています。言語教育リソースは、すべての利用者に対して透明で、安全で、誠実であるべきだと考えています。',
  privacyPrinciplesHeading: 'プライバシーに関する基本方針',
  privacyPrinciple1Title: '1. 会員登録不要・完全無料アクセス',
  privacyPrinciple1Body:
    'アカウントを作成したり個人情報を提供したりすることなく、すべてのスラング解説、地域別ページ、辞典の検索機能を自由に閲覧できます。',
  privacyPrinciple2Title: '2. 個人データの売買は一切行いません',
  privacyPrinciple2Body:
    '利用者の情報を第三者、データブローカー、広告ネットワークに提供・販売・仲介することは決してありません。',
  privacyPrinciple3Title: '3. 直接的で透明性の高いコミュニケーション',
  privacyPrinciple3Body:
    'メールでお問い合わせいただいた内容は、ご質問への回答やスラングのご提案の確認のみに使用されます。',
  privacyCollectHeading: '収集する情報について',
  privacyCollectLead:
    'ウェブサイトの安全な配信と保守に必要な最小限の情報のみを取り扱っています：',
  privacyCollectA_Title: 'A. 匿名の技術・アクセスログデータ',
  privacyCollectA_Body:
    'サイト訪問時、サーバー側で個人を特定しない技術的な診断ログ（リクエスト日時、ブラウザの種類、OS、アクセス先URL、匿名化されたIPアドレスなど）が自動的に記録されます。このデータはパフォーマンスの監視、不具合修正、不正アクセスの遮断にのみ用いられます。',
  privacyCollectB_Title: 'B. ブラウザ側の表示設定',
  privacyCollectB_Body:
    'ライトテーマとダークテーマの切り替え時、その選択はお使いのブラウザの <code>localStorage</code> にのみ保存されます。このデータはお手元の端末内に留まり、当サイトのサーバーに送信されることはありません。',
  privacyCollectC_Title: 'C. 直接のメール問い合わせ',
  privacyCollectC_Body:
    '編集チーム宛てにメールをいただいた場合、送信元アドレス、お名前（記載がある場合）、本文を受信します。これらの情報は、お問い合わせ対応や辞典の更新に必要な期間のみ保持されます。',
  privacyCookiesHeading: 'Cookie とトラッキング技術について',
  privacyCookiesLead:
    'Slang Words Online は、プライバシー第一の設計方針を徹底しています：',
  privacyCookiesB1:
    '<strong>広告・追跡用 Cookie の不使用：</strong> サードパーティ製の追跡 Cookie、行動ターゲティング用ピクセル、クロスサイトトラッキングツールは使用していません。',
  privacyCookiesB2:
    '<strong>プロファイリングやフィンガープリンティングの不実施：</strong> 他のサイトにまたがる行動履歴の追跡や、個々の訪問者の特定は行いません。',
  privacyCookiesB3:
    '<strong>純粋に機能的なローカルストレージのみ：</strong> 読みやすい画面を維持するためのテーマ設定（ライト・ダークモード）を保持する目的でのみ最小限のローカルストレージを利用します。',
  privacyUpdatesHeading: 'プライバシーポリシーの改定',
  privacyUpdatesBody:
    'サイトの機能改善や運用の見直しに伴い、本ポリシーを定期的に更新する場合があります。改定内容は常に本ページ上で最新の更新日とともに公開されます。',
  privacyContactBody:
    'プライバシー保護に関するご質問やご意見がございましたら、お気軽にチームまでご連絡ください：',
  privacyContactEmailLabel: 'メール：',

  privacyPolicy: 'プライバシーポリシー',
  // ---------------------------------------------------------------- terms & conditions
  termsKicker: '利用規約',
  termsLastUpdated: '最終更新日: 2026年9月',
  termsIntro:
    'Slang Words Online（<a href="/ja/" class="text-primary hover:underline">slangwordsonline.com</a>）へようこそ。当ウェブサイトの閲覧、利用、または情報の参照を行うことにより、利用者は本利用規約に同意したものとみなされます。内容をよくご確認ください。',
  termsSummaryHeading: '重要な要約',
  termsSummaryP1Title: '記述的言語記録の理念:',
  termsSummaryP1Body:
    '私たちは人々が実際に日常で話している言葉を記録しています。粗野な表現、過激なスラング、物議を醸す用語の掲載は純粋に辞書編纂上の記録であり、差別や攻撃的行動を助長・是認するものではありません。',
  termsSummaryP2Title: '教育目的の適正利用:',
  termsSummaryP2Body:
    'コンテンツは個人の学習、学術研究、文化調査のために自由に閲覧・引用できます。自動スクレイピングによる大量抽出や商業的転載は禁止されています。',
  termsSummaryP3Title: '「現状有姿」での情報提供:',
  termsSummaryP3Body:
    'スラングは地域や世代によって急速に変化します。俗語や崩した表現を使う際は、場の状況や相手との関係性に十分配慮してください。',
  termsSection1Heading: '1. 規約への同意',
  termsSection1Body:
    'Slang Words Online（以下「本サービス」または「当サイト」）にアクセスまたは利用することにより、利用者は本規約およびプライバシーポリシーを読み、理解し、法的に拘束されることに同意したものとみなされます。同意されない場合は当サイトの利用をご遠慮ください。',
  termsSection2Heading: '2. 言語表現に関する免責とコンテンツの性質',
  termsSection2Lead:
    'スラングは人々の生きた文化や感情をありのままに映し出す鏡です。そのため、当辞典には以下のような表現が含まれています:',
  termsSection2B1: '軽度から重度までの俗語・卑語・罵倒表現。',
  termsSection2B2: '親密な間柄や恋愛・セクシュアリティに関する口語表現。',
  termsSection2B3: 'からかい、ストリートの掛け合い、挑発的なスラング。',
  termsSection2B4: '文化的・社会的に配慮を要する用語や再解釈された語彙。',
  termsEditorialStanceLabel: '編集方針:',
  termsEditorialStanceBody:
    'Slang Words Onlineは言葉の使い方を指示・規範化（規範主義）するのではなく、使われている実態をありのまま記録（記述主義）しています。見出し語の掲載は差別や嫌がらせを容認するものではありません。洋画、小説、SNS、日常会話で出くわした言葉の意味を正しく理解できるよう、使用域（レジスター）、直訳、文脈上の注意点を提供しています。',
  termsSection3Heading: '3. 知的財産権',
  termsSection3Body:
    '独自の解説文、語源や文脈の注釈、発音の手引き、書き下ろし用例、サイトの構成およびデザイン要素は、すべてSlang Words Onlineの知的財産です。',
  termsPermittedUseLabel: '許可される利用範囲:',
  termsPermittedUseBody:
    '利用者は、非商業的な個人学習、学術調査、教育目的のために当サイトを閲覧する、限定的かつ取消可能な権利を有します。明確なクレジット表記と<code>slangwordsonline.com</code>の該当ページへのリンクを添える場合に限り、定義の短い引用が認められます。',
  termsProhibitedReproLabel: '禁止される複製・転載:',
  termsProhibitedReproBody:
    '事前の書面による許諾なく、ボットによる自動収集（スクレイピング）、辞書データベース・見出し語・検索インデックスの複製・複製サイトの構築、競合サービスやAIモデルの学習データセットへの転用を行うことは固く禁止します。',
  termsSection4Heading: '4. 禁止事項・適正利用方針',
  termsSection4Lead: '利用者は当サイトの利用にあたり、以下の行為を行ってはなりません:',
  termsSection4B1:
    'サーバーに過度な負荷をかける自動アクセス、サイバー攻撃、サービス妨害（DoS）の試み。',
  termsSection4B2:
    'システムやネットワークのセキュリティ脆弱性を探査・スキャン・検証する行為。',
  termsSection4B3:
    '当サイトやお問い合わせ窓口を利用して、迷惑メール（スパム）、広告、悪意あるプログラムを送信する行為。',
  termsSection4B4:
    '当サイトの編集部や第三者になりすます行為。',
  termsSection5Heading: '5. 外部リンクおよび第三者コンテンツ',
  termsSection5Body:
    '当サイトは語源調査や文献参照のため、外部の学術機関やウェブサイトへリンクする場合があります。第三者サイトのコンテンツ、プライバシー基準、セキュリティについて当サイトは一切の管理権を持たず、責任を負いません。',
  termsSection6Heading: '6. 保証の否認',
  termsSection6Body1:
    '本サービスは、明示的か黙示的かを問わず、いかなる保証も伴わない<strong>「現状有姿（AS IS）」</strong>かつ<strong>「提供可能な範囲」</strong>で提供されます。',
  termsSection6Body2:
    '編集チームはネイティブスピーカーの使用例や公的記録に基づいて正確性を期していますが、口語表現は地域、年齢層、友人関係によって受け止められ方が大きく異なります。当サイトのスラングを用いた結果、ビジネスや社交の場で生じた対人関係の齟齬について保証するものではありません。',
  termsSection7Heading: '7. 責任の制限',
  termsSection7Body:
    '適用法令の許す最大限の範囲において、Slang Words Onlineおよびその編集者・運営者は、当サイトの利用または利用不能から生じた直接的・間接的・派生的損害、スラングの誤用による対人トラブルについて責任を負いません。',
  termsSection8Heading: '8. 利用規約の変更',
  termsSection8Body:
    '当サイトは必要に応じて本規約を改定する権利を有します。改定内容は本ページに更新日とともに掲載されます。改定後も当サイトの利用を継続した場合、変更内容に同意したものとみなされます。',
  termsSection9Heading: '9. お問い合わせ窓口',
  termsSection9Body:
    '著作権に関する通知、法的な照会、または本規約に関するご質問は、下記メールアドレスまでお問い合わせください:',
  termsContactEmailLabel: 'メールアドレス:',

  termsConditions: '利用規約',
};
