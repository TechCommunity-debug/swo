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
  contactUs: '문의하기',
  privacyPolicy: '개인정보처리방침',
  termsConditions: '이용약관',
};
