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
  about: '사이트 소개',
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
  editorialH2: '모든 항목은 생성한 것이 아니라 쓴 것입니다',
  editorialBody:
    '슬랭 사전은 번역 앱이 알려 주지 못하는 것을 알려 줄 때에만 값어치가 있습니다. 그 말이 다정한 말인지 적대적인 말인지, 누구에게 써도 되는지, 다들 되풀이하는 어원 이야기가 사실이기는 한지 말입니다. 논란이 있는 대목은 논란이 있다고 적습니다. 어떤 말이 차별적 멸칭이면 그것도 적고, 그러면서도 항목에서 빼지 않습니다. 들었을 때 알아들어야 하는 말이기 때문입니다.',
  howWeSource: '뜻풀이를 만드는 방법',

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
  reviewedBy: (who: string) => `감수: ${who}.`,
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

  footerTagline: '슬랭과 비격식 표현을 다루는 세계 안내서',
  byCountry: '나라별',
  thisSite: '이 사이트',
  footerNote:
    '뜻풀이는 사람이 쓰고 사람이 검토합니다. 어원에 논란이 있으면 논란이 있다고 적습니다.',
  copyright: (year: number) => `© ${year} Slang Words Online`,
  countrySlang: (adjective: string) => `${adjective} 슬랭`,

};
