import type { Strings } from './types';

/**
 * The Korean chrome dictionary.
 *
 * Deliberately no `plural` import: Korean nouns do not agree with number, so
 * there is no singular/plural pair to choose between and passing the same word
 * twice would only add noise. What Korean needs instead is the right counter
 * for the thing being counted — 개 for words and results, 개국 for countries —
 * so the counts are written out here with their counter attached.
 *
 * The other constraint that shapes these strings: a particle's form depends on
 * the final consonant of the word before it, and the values interpolated here
 * (country nouns, topic names, search queries, dates) are not known in advance.
 * No template below ever puts 은/는, 이/가, 을/를 or 으로/로 straight after an
 * interpolated value; the sentence is restructured around 의, 에, 관련 or a
 * following noun instead.
 */
export const ko: Strings = {
  skipToContent: '본문으로 건너뛰기',
  mainNav: '주요 메뉴',
  countriesNav: '나라',
  sectionsNav: '섹션',
  openMenu: '메뉴 열기',
  breadcrumb: '탐색 경로',
  home: '홈',
  browse: '단어 색인 A–Z',
  search: '검색',
  language: '언어',
  jumpToLetter: '글자로 이동',
  termsBeginningWith: (letter: string) => `${letter}: 이 글자로 시작하는 단어`,

  homeH1: '세계의 슬랭 안내서',
  homeLead: (terms: number, countries: number) =>
    `${countries}개국의 비격식 단어와 표현 ${terms}개. 무슨 뜻인지, 어떻게 말하는지, 그리고 어떤 자리에서 쓰면 실수가 되는지까지 정리했습니다.`,
  searchPlaceholder: '슬랭 단어나 뜻을 검색하세요…',
  searchPlaceholderCompact: '슬랭 검색…',
  searchLabel: '슬랭 단어 검색',
  searchHint: '입력하는 대로 아래에 결과가 나옵니다. Enter를 누르면 검색 페이지가 열립니다.',
  tryTerms: '예를 들면',
  pickCountry: '나라 고르기',
  pickCountryLead:
    '슬랭은 언어에 속하기 전에 장소에 속합니다. 그 말이 실제로 쓰이는 곳에서 시작하세요.',
  termsCount: (n: number) => `단어 ${n}개`,
  popularTopics: '많이 찾는 주제',
  popularTopicsLead:
    '사람들이 실제로 검색하는 페이지입니다. 한 나라, 한 주제, 그에 관해 실려 있는 모든 단어를 모았습니다.',
  oneWordEach: '나라마다 한 단어씩',
  oneWordEachLead:
    '항목 하나가 어떤 모습인지 보여 주는 표본입니다. 뜻풀이와 번역이 붙은 예문, 그리고 정말로 밝혀져 있는 경우에 한해 어원까지 담았습니다.',
  editorialH2: '사전 앱에서는 찾을 수 없는 맥락',
  editorialBody:
    '슬랭 사전은 번역 앱이 알려 주지 못하는 것을 알려 줄 때에만 값어치가 있습니다. 그 말이 다정한 말인지 적대적인 말인지, 누구에게 써도 되는지, 다들 되풀이하는 어원 이야기가 사실이기는 한지 말입니다. 논란이 있는 대목은 논란이 있다고 적습니다. 어떤 말이 차별적 멸칭이면 그것도 적고, 그러면서도 항목에서 빼지 않습니다. 들었을 때 알아들어야 하는 말이기 때문입니다.',

  // ------------------------------------------- home — SEO about section
  aboutH2: 'Slang Words Online 소개 — 전 세계 슬랭 종합 허브',
  aboutP1:
    '모든 언어에는 두 가지 삶이 있습니다. 교과서에 등장하는 단정한 언어와 거리, 단체 채팅방, 술자리 카운터에서 실제로 오가는 생생한 언어입니다. Slang Words Online은 바로 이 두 번째 언어를 위해 존재합니다. 대화 중이나 노랫말, 영화 자막에서 처음 듣고 "도대체 저게 무슨 뜻이지?" 하고 고개를 갸웃했던 모든 분을 위한 슬랭 전문 안내서입니다. 런던 펍에서 들리는 영국 슬랭, SNS에 쏟아지는 미국 슬랭, 현지 동료가 무심코 던지는 호주 슬랭까지, 번역기 앱이 결코 담아내지 못하는 살아 있는 맥락과 함께 명쾌하게 설명해 드립니다.',
  aboutP2:
    '저희 슬랭 사전은 현재 16개국과 11개 주제별 카테고리를 망라합니다. 영어권의 거대한 갈래인 영국과 미국 슬랭은 물론 호주, 캐나다, 아일랜드 슬랭을 한곳에서 탐색할 수 있습니다. 또한 멕시코, 스페인, 이탈리아, 프랑스, 콜롬비아, 쿠바, 도미니카 공화국 등 로망스어군 컬렉션을 통해 고유한 리듬과 정서를 품은 방언의 묘미를 전합니다. 아울러 표준어와의 간극이 커서 슬랭이 거의 별개의 어형처럼 작동하는 독일어, 러시아어, 일본어, 한국어 슬랭까지 폭넓게 다룹니다.',
  aboutP3:
    '단순한 포털 검색이나 번역기와 무엇이 다를까요? 핵심은 압도적인 깊이입니다. 슬랭은 뜻이 하나에 그치지 않으므로 모든 표제어에 복수의 뜻풀이를 싣고, 교과서적 발음이 아닌 실제 대화에서 소리 나는 방식을 짚어 주는 발음 가이드를 더했습니다. 원어 문장과 행 단위 대역을 갖춘 실전 예문을 통해 실제 맥락에서 단어가 어떻게 기능하는지 생생하게 보여 드립니다. 아울러 다정한 표현인지 공격적인 말인지, 격식 있는 자리에서 써도 무방한지, 인터넷에 떠도는 유명한 어원이 과연 사실인지까지 사전이 흔히 빠뜨리는 핵심 정보를 정직하게 밝힙니다.',
  aboutP4:
    '주제는 이용자가 실제로 찾아보는 방식에 맞추어 구성했습니다. 수백 개 단어를 한 페이지에 무작정 나열하는 대신, 슬랭이 쓰이는 쓰임새에 맞게 분류했습니다. 칭찬과 인정, 인사와 호칭, 욕설과 불만, 인물과 유형, 돈과 일, 음식과 술, 파티와 유흥, 연애와 플러팅, 감정과 리액션, 추임새와 군말, 일상의 물건 등 11개 분야가 각 나라 아래에 체계적으로 정리되어 있습니다. 돈이나 욕설 같은 같은 주제라도 말하는 사람과 지역에 따라 완전히 다른 단어가 빚어지기 때문입니다.',
  aboutP5:
    '본 사이트는 누구나 무료로 이용할 수 있으며 정기적으로 업데이트됩니다. 9개 언어를 지원하므로 비영어권 사용자도 모국어로 전체 사전을 막힘없이 탐색할 수 있습니다. Slang Words Online을 항상 곁에 두고 싶었던 완성도 높은 슬랭 라이브러리로 활용해 보세요. 철저하고 정직하며, 여러분이 엉뚱한 순간에 말실수로 당황하지 않도록 세심하게 쓰였습니다. 관심 있는 나라나 주제를 골라보거나, 방금 귀에 닿은 낯선 단어를 직접 검색해 보세요.',

  // ----------------------------------------- home — FAQ section
  faqH2: '슬랭에 관해 자주 묻는 질문(FAQ)',
  faqQ1: '슬랭(은어·속어)이란 무엇인가요?',
  faqA1:
    '슬랭이란 글말보다는 주로 입말에서 훨씬 자주 쓰이는 비격식 단어나 표현을 뜻합니다. 특정 사회 집단, 하위문화, 지역 안에서 생겨나는 경우가 많으며 일반 표준어 사전의 정의와 사뭇 다른 뜻을 지니기도 합니다. 유대감, 유머, 개성 있는 태도를 드러내는 역할을 하며 격식 있는 어휘보다 훨씬 빠르게 변화합니다. 10년 전에는 신선했던 말이 오늘날에는 촌스럽게 느껴지기도 합니다.',
  faqQ2: '요즘 가장 새로운 최신 슬랭에는 어떤 것이 있나요?',
  faqA2:
    '슬랭은 지금 이 순간에도 끊임없이 태어나며 TikTok, Twitter/X, Instagram 같은 소셜 미디어를 통해 매주 새로운 말이 등장합니다. 최근 대표적인 예로는 “delulu”(비현실적으로 낙관적인, 망상에 빠진), “rizz”(이성을 사로잡는 플러팅 매력), “slay”(완벽하게 해내다, 끝내주게 멋지다), “ate”(제대로 찢었다, 압도했다) 등이 있습니다. 가장 빠르게 최신 유행을 따라잡는 방법은 온라인 트렌드를 살피거나 정기적으로 업데이트되는 저희 국가별 컬렉션을 둘러보는 것입니다.',
  faqQ3: '슬랭은 격식 있는 표준어와 어떻게 다른가요?',
  faqA3:
    '격식 있는 표준어는 정해진 문법과 어휘 규범을 따르며 비즈니스, 학술, 공식적인 자리에서 널리 쓰입니다. 반면 슬랭은 격식이 없고 문법 규범을 자유롭게 넘나들며 특정 세대나 커뮤니티에 깊이 뿌리내리고 있습니다. “cool”처럼 어디서나 통하는 단어도 있지만, 영국 슬랭 “chuffed”(대단히 흡족한)나 멕시코 슬랭 “naco”(촌스러운, 격 떨어진) 같은 말은 그 배경 문화를 알아야만 온전한 뉘앙스를 이해할 수 있습니다.',
  faqQ4: '나라마다 슬랭이 다른 이유는 무엇인가요?',
  faqA4:
    '슬랭은 현지의 고유한 문화, 역사, 사회적 역학 관계에 의해 만들어집니다. 영어를 공유하는 미국, 영국, 호주나 스페인어를 공유하는 멕시코, 스페인, 콜롬비아처럼 같은 언어를 쓰는 나라들 사이에서도 슬랭 어휘는 완전히 다르게 발달합니다. 슬랭은 삶의 현장을 고스란히 반영하기 때문입니다. 지역 음식, 음악, 유머 코드, 사회 계층, 미디어가 일상적인 말씨에 고유한 지문을 남깁니다.',
  faqQ5: '일상적인 대화에서 슬랭을 써도 괜찮을까요?',
  faqA5:
    '물론입니다. 슬랭은 인간 소통의 지극히 자연스러운 한 축이며, 상황에 맞게 구사하면 뛰어난 친화력과 원어민다운 유창함을 보여 줄 수 있습니다. 핵심은 맥락(TPO)입니다. 일상 대화, 문자 메시지, SNS에서는 완벽하게 어울리지만 취업 면접, 학술 논문, 공식 업무 메일에서는 부적절할 수 있습니다. 때와 장소에 맞게 말의 어조를 바꾸는 능력 자체가 중요한 언어적 역량입니다.',
  faqQ6: '다른 나라의 슬랭은 어떻게 배우는 것이 가장 좋은가요?',
  faqA6:
    '현지 문화에 흠뻑 빠져보는 것이 가장 효과적입니다. 현지 드라마나 예능을 시청하고 로컬 크리에이터를 팔로우하며 원어민과 대화해 보는 것이 큰 도움이 됩니다. 아울러 Slang Words Online 같은 전문 사전을 활용하면 일반 사전이 놓치는 맥락, 즉 어떤 사람이 주로 쓰는지, 친근한 말인지 무례한 말인지, 실제 문장에서 어떻게 소리 나는지까지 정확하게 배울 수 있습니다. 16개국 수천 개 표제어의 정의와 발음 가이드, 생생한 예문이 준비되어 있습니다.',

  // --------------------------------------------------------------- country
  startHere: '여기부터 보세요',
  startHereLead:
    '아래 단어들에는 쓰임에 관한 설명이 가장 많이 붙어 있습니다. 문체와 어원, 잘못 쓰기 쉬운 상황까지 적혀 있으니 나머지보다 먼저 끝까지 읽어 볼 만합니다.',
  byTopic: '주제별',
  byTopicLead: (adjective: string) =>
    `아래 각 페이지는 한 가지 주제에 해당하는 ${adjective} 슬랭을 한자리에 모아 나란히 보여 줍니다.`,
  allTermsAz: (adjective: string) => `${adjective} 슬랭 전체 A–Z`,
  termsWithExamples: (n: number) => `단어 ${n}개. 각 항목에 뜻풀이와 실제 예문이 붙어 있습니다.`,
  slangFor: (adjective: string, topic: string) => `${adjective} 슬랭: ${topic}`,

  categoryLead: (n: number, adjective: string, topic: string) =>
    `${topic} 관련 ${adjective} 슬랭 ${n}개. 각 단어의 뜻과 발음, 실제로 쓰이는 예문을 함께 실었습니다.`,
  otherTopicsIn: (adjective: string) => `${adjective} 슬랭의 다른 주제`,
  sameTopicElsewhere: (topic: string) => `다른 나라의 ${topic} 슬랭`,
  sameTopicElsewhereLead:
    '이 사이트의 다른 나라에서 같은 주제를 어떻게 말하는지 모았습니다. 한 가지를 두고 여러 언어가 얼마나 다르게 말하는지 가장 빠르게 확인할 수 있습니다.',

  aSlangTerm: (languageName: string) => `${languageName} 슬랭입니다.`,
  countrySlangHeading: (adjective: string) => `${adjective} 슬랭`,
  moreSenses: (n: number) => `뜻 ${n}개 더`,
  useWithCare: '조심해서 쓸 것',
  browseAll: (adjective: string) => `${adjective} 슬랭 전체 보기`,
  beforeYouUse: '쓰기 전에 알아 둘 것',
  whatItMeans: '무슨 뜻인가',
  literally: '직역:',
  inUse: '실제 쓰임',
  examplesWithTranslations: '번역이 붙은 예문',
  note: '참고:',
  whereItComesFrom: '어디에서 왔나',
  firstAttested: (when: string) => `최초 기록: ${when}`,
  otherForms: '다른 형태',
  spellingsAndVariants: '표기와 변이형:',
  similarTerms: '비슷한 말:',
  romanizedAs: '로마자 표기',
  nearbyTerms: '가까운 단어',
  previous: '이전',
  next: '다음',
  relatedTerms: '관련 단어',
  alsoUsedIn: '이런 곳에서도 씁니다',
  topics: '주제',
  moreTermsLikeThis: (adjective: string) => `이와 비슷한 ${adjective} 슬랭 더 보기`,
  updatedOn: (date: string) => `${date} 업데이트.`,

  browseH1: '전체 단어, A부터 Z까지',
  browseLead: (terms: number, countries: number) =>
    `${countries}개국에서 모은 이 사이트의 단어 ${terms}개를 알파벳순 색인 하나에 담았습니다. 정렬할 때 발음 부호는 무시하므로 güey는 G 항목에 있습니다.`,

  searchH1: '검색',
  searchLead:
    '단어로도 뜻으로도 찾을 수 있습니다. “취하다”를 입력하면 이 사이트의 모든 언어에서 그 뜻에 해당하는 말이 나옵니다.',
  startTyping: '입력을 시작하면 결과가 나옵니다.',
  resultCount: (n: number) => `결과 ${n}개`,
  noMatches: (q: string) => `「${q}」에 해당하는 결과가 없습니다.`,
  noMatchesTryBrowse: '더 짧은 단어로 검색하거나 A–Z 색인을 살펴보세요.',

  notFoundKicker: '404',
  notFoundH1: '여기에는 그런 단어가 없습니다',
  notFoundBody:
    '이 페이지는 존재하지 않습니다. 아직 사전에 없는 단어이거나, 링크가 오래된 것일 수 있습니다. 주소를 짐작하는 것보다 검색하는 편이 대개 빠릅니다.',
  orStartFromCountry: '아니면 나라부터 고르세요',
  pageNotFound: '페이지를 찾을 수 없습니다',
  goToHomepage: '홈페이지로 이동',
  browseAllSlang: '모든 슬랭 A–Z 둘러보기',
  suggestThisWord: '이 단어 제안하기',
  searchByTermOrMeaning: '단어 또는 뜻으로 검색',
  notFoundSearchLead: (count: number) =>
    `단어나 뜻을 입력하여 ${count}개국 전체에서 표현을 찾아보세요:`,

  // ------------------------------------------------------------------- 500
  serverErrorKicker: '500',
  serverError: '서버 오류',
  serverErrorH1: '문제가 발생했습니다',
  serverErrorBody:
    '페이지를 생성하는 도중 서버에서 예기치 않은 오류가 발생했습니다. 일시적인 현상일 수 있으니 페이지를 새로고침하거나, 단어를 검색하거나, 홈페이지에서 다시 둘러보세요.',
  reloadPage: '페이지 새로고침',
  reportError: '오류 신고',
  searchTheDictionary: '사전 검색',
  serverErrorSearchLead:
    '찾으시는 특정 슬랭이나 관용구, 표현이 있으신가요? 아래에서 바로 검색해 보세요:',


  footerTagline: '슬랭과 비격식 표현을 다루는 세계 안내서',
  byCountry: '나라별',
  thisSite: '이 사이트',
  footerNote:
    '뜻풀이는 이용 가능한 자료를 바탕으로 합니다. 어원에 논란이 있거나 불확실하면 그렇다고 적습니다.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective} 슬랭`,

  // ---------------------------------------------------------------- about us
  aboutH1: 'Slang Words Online 소개',
  aboutSubtitle:
    '생생한 일상어, 거리의 어휘, 문화적 구어 표현을 다루는 글로벌 슬랭 안내서.',
  aboutIntro:
    '모든 언어에는 두 가지 삶이 있습니다. 문법 교과서에 실린 정중한 표준어와, 거리와 카페, 식탁, 노래 가사, 단체 채팅방에서 실제로 쓰이는 생생하고 역동적인 언어입니다. <strong>Slang Words Online</strong>은 바로 그 두 번째 언어를 위해 만들어졌습니다.',
  aboutStatCountries: '국가 및 방언',
  aboutStatTerms: '슬랭 및 구어 표현',
  aboutStatCategories: '일상 카테고리',
  aboutStatLanguages: '지원 언어',
  aboutWhyHeading: 'Slang Words Online을 만든 이유',
  aboutWhyP1:
    '외국인과의 대화나 자막 있는 드라마, 팝송을 듣다가 <em>“저 말이 진짜 무슨 뜻이지?”</em> 하고 궁금했던 적이 있으신가요?',
  aboutWhyP2:
    '일반 자동번역기에 넣으면 당황하기 일쑤입니다. 단어 그대로 직역되어 엉뚱한 뜻이 되거나(예: 스페인어 “de una”를 “즉시 / 당연하지” 대신 “하나의”로 번역), 실제의 감정과 뉘앙스가 완전히 사라진 딱딱한 사전식 표현만 나옵니다.',
  aboutWhyP3:
    '저희는 교과서와 번역기가 담아내지 못하는 문화적 맥락, 어조, 격식의 수준, 사회적 뉘앙스를 제대로 전달하기 위해 Slang Words Online을 구축했습니다.',
  aboutPillarsHeading: '저희 사전만의 차별점',
  aboutPillarsLead:
    '슬랭 사전의 가치는 단순한 인터넷 검색으로는 알 수 없는 깊이 있는 정보를 제공하는 데 있습니다.',
  aboutPillar1Title: '1. 어조와 사회적 뉘앙스',
  aboutPillar1Body:
    '절친한 친구끼리의 친근한 농담인지, 격식 있는 자리에서 무례가 되는 말인지 명확하게 구분하여 실수 없이 적절하게 쓸 수 있도록 돕습니다.',
  aboutPillar2Title: '2. 생생한 실제 대화 예문',
  aboutPillar2Body:
    '모든 표제어에 원어 자연스러운 대화문과 문맥 예문을 싣고, 정확한 구어체 번역과 직역을 함께 제공합니다.',
  aboutPillar3Title: '3. 어원과 전해지는 유래 검증',
  aboutPillar3Body:
    '인터넷에는 잘못된 어원 설이 넘쳐납니다. 역사적 근거가 확실한 유래는 출처와 함께 설명하고, 민간 전승이나 논쟁 중인 설은 분명히 밝힙니다.',
  aboutPillar4Title: '4. 로마자 표기 및 발음 팁',
  aboutPillar4Body:
    '비라틴 문자(키릴 문자, 일본어 한자/히라가나, 한국어 한글)에는 직관적인 로마자 표기와 발음 가이드를 함께 제공하여 누구나 자신 있게 읽고 발음할 수 있습니다.',
  aboutCulturesHeading: '수록된 문화와 방언',
  aboutCulturesLead: (count: number) =>
    `전 세계 ${count}개의 고유한 언어 및 지역 허브를 아우르며, 일상에서 쓰이는 다채로운 구어 표현의 다양성을 담았습니다:`,
  aboutEditorialHeading: '편집 원칙과 커뮤니티 참여',
  aboutEditorialP1:
    '슬랭은 상아탑 속 언어학자가 만드는 것이 아니라, 학교 운동장, 공연장, 경기장, 녹음실, 인터넷 커뮤니티에서 탄생합니다. 언어는 끊임없이 변하기에 Slang Words Online은 항상 살아 움직이는 프로젝트입니다.',
  aboutEditorialP2:
    '새로운 표현 제안, 방언의 미묘한 차이 제보, 수정 요청 등 전 세계 모국어 화자와 여행자, 언어 애호가 여러분의 참여를 언제나 환영합니다.',
  aboutConnectHeading: '문의 및 제안',
  aboutConnectBody:
    '아직 사전에 없는 고향의 슬랭이나 공유하고 싶은 지역별 뉘앙스가 있으신가요? 여러분의 소중한 의견을 기다립니다.',
  aboutContactBtn: '팀에 문의하기',
  aboutBrowseBtn: '가나다·알파벳순 전체 표현 보기',

  aboutUs: '소개',
  // ---------------------------------------------------------------- contact us
  contactKicker: '문의하기',
  contactSubtitle:
    '언어를 사랑하는 분들, 모국어 화자, 전 세계 학습자 여러분의 연락을 언제나 환영합니다.',
  contactIntro:
    '아직 사전에 없는 고향의 슬랭 제보, 뉘앙스 수정 제안, 학술적 협업 제휴, 또는 가벼운 인사까지 편집 및 개발팀에 편하게 전해주세요.',
  contactOfficialEmail: '공식 문의 이메일',
  contactEmailLead:
    '편집팀이 수신함을 상시 모니터링하고 있습니다. 궁금한 점, 단어 제보, 피드백을 자유롭게 보내주세요.',
  contactCopyEmail: '이메일 주소 복사',
  contactCopied: '클립보드에 복사되었습니다!',
  contactCategoriesHeading: '이런 내용으로 연락주세요',
  contactCat1Title: '새로운 슬랭 제보',
  contactCat1Body:
    '사전에 없는 거리의 유행어, 바이럴 슬랭, 지역 방언을 알고 계신가요? 표제어, 의미, 사용 지역, 예문을 공유해주세요.',
  contactCat2Title: '방언 뉘앙스 및 오류 수정',
  contactCat2Body:
    '실제 고향에서 쓰이는 뉘앙스와 다른가요? 잘못된 어원 설이 있나요? 현지 모국어 화자의 정확성을 최우선으로 하여 신속히 반영합니다.',
  contactCat3Title: '기능 제안 및 사이트 피드백',
  contactCat3Body:
    '새로운 국가 추가 제안, UI 개선 아이디어, 발음 음성 지원 요청, 기술적 버그 제보 등.',
  contactCat4Title: '협업 제휴 및 언론 문의',
  contactCat4Body:
    '언어학 연구, 교육 기관 협력, 번역 관련 문의 및 언론 취재 요청.',
  contactResponseTimeLabel: '답변 소요 시간:',
  contactResponseTimeText:
    '편집팀이 주 수회 커뮤니티 메시지를 검토하고 있습니다. 보통 24~48시간 이내에 답변을 드립니다.',

  contactUs: '문의하기',
  // ---------------------------------------------------------------- privacy policy
  privacyKicker: '법적 고지 및 개인정보 보호',
  privacyLastUpdated: '최종 수정일: 2026년 9월',
  privacyIntro:
    'Slang Words Online(<a href="/ko/" class="text-primary hover:underline">slangwordsonline.com</a>)은 이용자의 개인정보를 명확하고 투명하게 보호합니다. 교육적 언어 자료는 모든 탐색자에게 안전하고 신뢰할 수 있어야 한다고 믿습니다.',
  privacyPrinciplesHeading: '개인정보 보호 원칙',
  privacyPrinciple1Title: '1. 회원가입 불필요 및 자유로운 무료 이용',
  privacyPrinciple1Body:
    '계정을 만들거나 개인 식별 정보를 입력할 필요 없이 모든 슬랭 항목, 국가별 페이지, 사전 검색을 자유롭게 이용하실 수 있습니다.',
  privacyPrinciple2Title: '2. 개인정보의 제3자 판매 및 공유 금지',
  privacyPrinciple2Body:
    '방문자의 이용 정보를 광고 네트워크나 데이터 브로커 등 제3자에게 판매, 중개, 상업적으로 제공하지 않습니다.',
  privacyPrinciple3Title: '3. 직접적이고 투명한 소통',
  privacyPrinciple3Body:
    '이메일로 문의를 주실 경우, 해당 내용은 질문에 대한 답변 및 단어 제보 검토 목적으로만 사용됩니다.',
  privacyCollectHeading: '수집하는 정보',
  privacyCollectLead:
    '웹사이트의 원활한 제공과 보안 유지에 필수적인 최소한의 정보만을 처리합니다:',
  privacyCollectA_Title: 'A. 익명의 기술 및 서버 로그 데이터',
  privacyCollectA_Body:
    '사이트 방문 시 호스팅 서버에서 개인을 특정할 수 없는 진단용 로그(접속 시간, 브라우저 종류, 운영체제, 요청 URL, 익명화된 IP 주소 등)가 자동으로 기록됩니다. 이 데이터는 서버 성능 점검, 디버깅 및 악성 스크래핑 차단에만 엄격히 사용됩니다.',
  privacyCollectB_Title: 'B. 기기 내 로컬 설정',
  privacyCollectB_Body:
    '라이트 모드와 다크 모드 테마를 변경할 경우, 선택값은 이용자의 브라우저 <code>localStorage</code>에만 저장됩니다. 이 정보는 개인 기기에만 머무르며 서버로 전송되지 않습니다.',
  privacyCollectC_Title: 'C. 이메일 문의 내용',
  privacyCollectC_Body:
    '팀으로 이메일을 보내실 경우 이메일 주소, 성함(입력 시), 메시지 본문을 수신합니다. 수신된 내용은 문의 처리 및 사전 반영에 필요한 기간 동안만 안전하게 보관됩니다.',
  privacyCookiesHeading: '쿠키 및 추적 기술',
  privacyCookiesLead:
    'Slang Words Online은 철저한 프라이버시 우선 구조로 설계되었습니다:',
  privacyCookiesB1:
    '<strong>광고 및 추적 쿠키 미사용:</strong> 제3자 광고 추적 쿠키, 행동 추적 픽셀, 사이트 간 추적 도구를 일절 사용하지 않습니다.',
  privacyCookiesB2:
    '<strong>프로파일링 및 기기 핑거프린팅 금지:</strong> 다른 웹사이트에서의 탐색 기록을 추적하거나 개별 방문자를 식별하려 하지 않습니다.',
  privacyCookiesB3:
    '<strong>기능 유지를 위한 최소한의 로컬 스토리지:</strong> 편안한 열람을 위해 테마 설정(라이트/다크 모드)을 유지하는 기능적 용도로만 브라우저 스토리지를 최소한으로 사용합니다.',
  privacyUpdatesHeading: '방침의 변경',
  privacyUpdatesBody:
    '웹사이트 개선 또는 운영상 필요에 따라 본 개인정보처리방침을 수정할 수 있습니다. 변경 사항은 항상 최신 수정일과 함께 본 페이지에 즉시 공개됩니다.',
  privacyContactBody:
    '개인정보 보호 방침에 관한 질문, 제안 또는 우려 사항이 있으시면 팀으로 직접 문의해 주시기 바랍니다:',
  privacyContactEmailLabel: '이메일:',

  privacyPolicy: '개인정보처리방침',
  // ---------------------------------------------------------------- terms & conditions
  termsKicker: '이용약관',
  termsLastUpdated: '최종 수정일: 2026년 9월',
  termsIntro:
    'Slang Words Online(<a href="/ko/" class="text-primary hover:underline">slangwordsonline.com</a>)에 오신 것을 환영합니다. 본 웹사이트를 방문, 탐색 또는 인용함으로써 귀하는 본 이용약관에 동의하게 됩니다. 내용을 주의 깊게 검토해 주시기 바랍니다.',
  termsSummaryHeading: '핵심 요약',
  termsSummaryP1Title: '기술적 언어 기록 원칙:',
  termsSummaryP1Body:
    '본 사전은 사람들이 실제 대화에서 사용하는 언어를 기록합니다. 거친 표현, 비속어, 논쟁적인 속어의 등재는 순수한 어휘학적 기록 목적이며 특정 행위를 조장하거나 옹호하지 않습니다.',
  termsSummaryP2Title: '교육 목적의 공정 이용:',
  termsSummaryP2Body:
    '모든 자료는 개인 학습, 학술 연구, 문화 이해를 위해 자유롭게 열람하고 인용할 수 있습니다. 다만 자동화된 대량 수집(스크래핑) 및 상업적 복제는 금지됩니다.',
  termsSummaryP3Title: '“있는 그대로” 정보 제공:',
  termsSummaryP3Body:
    '속어와 구어 표현은 지역과 세대에 따라 매우 빠르게 변합니다. 일상 어휘를 사용할 때는 항상 사회적 상황과 맥락을 신중히 고려하십시오.',
  termsSection1Heading: '1. 약관의 수락',
  termsSection1Body:
    'Slang Words Online(이하 “서비스” 또는 “사이트”)에 접속하거나 이를 이용함으로써, 귀하는 본 약관과 개인정보 보호정책을 읽고 이해하였으며 이에 구속되는 데 법적으로 동의한 것으로 간주됩니다. 본 약관에 동의하지 않으실 경우 사이트 이용을 중단해 주십시오.',
  termsSection2Heading: '2. 언어적 면책 고지 및 콘텐츠의 특성',
  termsSection2Lead:
    '속어는 인간의 문화와 정서를 있는 그대로 생생하게 보여주는 언어적 현상입니다. 따라서 본 사전에는 다음과 같은 표현이 포함되어 있습니다:',
  termsSection2B1: '일상적 비속어, 경미하거나 강한 욕설 표현.',
  termsSection2B2: '친밀한 관계나 연애, 애정을 나타내는 구어적 어휘.',
  termsSection2B3: '거리의 재담, 도발적 농담 및 자극적인 유행어.',
  termsSection2B4: '문화적으로 민감하거나 논쟁적이거나 재해석된 용어.',
  termsEditorialStanceLabel: '편집 방향:',
  termsEditorialStanceBody:
    'Slang Words Online은 언어를 규범적으로 통제하는 것이 아니라 실제 쓰임을 관찰하여 기술(descriptive)합니다. 특정 단어가 수록되었다고 해서 차별, 혐오, 비하를 지지하는 것은 아닙니다. 영화, 음악, 대화에서 접한 단어의 참뜻을 올바르게 이해할 수 있도록 어감(레지스터), 직역, 맥락상 주의점을 함께 제공합니다.',
  termsSection3Heading: '3. 지식재산권',
  termsSection3Body:
    '자체 제작된 어휘 해설, 맥락 설명, 발음 안내, 창작 예문, 웹사이트 구조 및 시각적 디자인 요소는 Slang Words Online의 고유한 지식재산입니다.',
  termsPermittedUseLabel: '허용되는 이용 범위:',
  termsPermittedUseBody:
    '귀하는 비상업적 개인 학습, 학술 조사, 교육 목적으로 사이트를 열람할 수 있는 제한적이고 취소 가능한 권리를 갖습니다. 출처를 명확히 밝히고 <code>slangwordsonline.com</code> 해당 페이지 링크를 표기하는 조건으로 짧은 인용이 허용됩니다.',
  termsProhibitedReproLabel: '금지되는 복제 행위:',
  termsProhibitedReproBody:
    '사전 서면 승인 없이 봇을 통한 자동 수집(스크래핑), 사전 데이터베이스나 검색 색인의 복제, 미러 사이트 구축, 경쟁 서비스 제작 또는 인공지능 모델 학습용 데이터셋으로 활용하는 행위는 엄격히 금지됩니다.',
  termsSection4Heading: '4. 올바른 이용 정책',
  termsSection4Lead: '귀하는 사이트를 이용할 때 다음 행위를 하지 않는 것에 동의합니다:',
  termsSection4B1:
    '서버 과부하를 유발하는 자동화 공격, 비정상적 크롤링, 서비스 거부(DoS) 시도.',
  termsSection4B2:
    '시스템이나 네트워크의 취약점을 탐색, 스캔, 테스트하는 행위.',
  termsSection4B3:
    '사이트 및 문의 수단을 이용하여 원치 않는 스팸, 광고성 정보, 악성 코드를 전송하는 행위.',
  termsSection4B4:
    '타인의 신원을 사칭하거나 본 사전 편집팀을 가장하는 행위.',
  termsSection5Heading: '5. 외부 링크 및 제3자 자료',
  termsSection5Body:
    '본 사이트는 어원 및 학술 근거 제공을 위해 외부 웹사이트 링크를 포함할 수 있습니다. 당사는 제3자 플랫폼의 내용, 보안, 개인정보 처리방침에 대해 통제권이 없으며 어떠한 책임도 지지 않습니다.',
  termsSection6Heading: '6. 보증의 부인',
  termsSection6Body1:
    '본 서비스는 명시적이든 묵시적이든 어떠한 형태의 보증도 없이 <strong>“있는 그대로(AS IS)”</strong> 및 <strong>“이용 가능한 상태로”</strong> 제공됩니다.',
  termsSection6Body2:
    '편집팀이 원어민 검수와 문헌 대조를 거치더라도, 구어체 표현은 지역, 세대, 대화 상대에 따라 받아들여지는 느낌이 크게 다를 수 있습니다. Slang Words Online은 본 사전의 표현을 사용했을 때 특정 사회적, 업무적 환경에서 적절하게 수용될 것임을 보증하지 않습니다.',
  termsSection7Heading: '7. 책임의 한계',
  termsSection7Body:
    '관련 법률이 허용하는 최대 범위 내에서, Slang Words Online 및 운영진은 사이트 이용 또는 이용 불가로 인해 발생하는 직간접적 손해, 언어적 오해나 사회적 결례에 대해 법적 책임을 지지 않습니다.',
  termsSection8Heading: '8. 약관의 변경',
  termsSection8Body:
    '당사는 필요에 따라 본 약관을 개정할 권리를 보유합니다. 변경된 내용은 수정일자와 함께 본 페이지에 게시되며, 게시 이후 사이트를 계속 이용하는 것은 개정 약관에 동의한 것으로 간주됩니다.',
  termsSection9Heading: '9. 문의 안내',
  termsSection9Body:
    '법적 문의, 저작권 관련 통지 또는 본 약관에 관한 의문 사항이 있으시면 아래 이메일로 문의해 주시기 바랍니다:',
  termsContactEmailLabel: '이메일:',

  termsConditions: '이용약관',
};
