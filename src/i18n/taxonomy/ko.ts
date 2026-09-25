import type { TaxonomyStrings } from './types';

export const ko: TaxonomyStrings = {
  categories: {
    'approval': {
      name: '칭찬과 인정',
      topic: '칭찬과 인정',
      description:
        '무언가가 좋다, 대단하다, 딱 맞다고 말할 때 쓰는 말입니다. 거의 모든 언어가 이 자리에 많은 어휘를 쌓아 두고, 그 어휘는 빠르게 갈립니다. 어제의 칭찬이 올해는 오글거리는 말이 됩니다.',
    },
    'greetings': {
      name: '인사와 호칭',
      topic: '인사와 호칭',
      description:
        '대화를 여는 방식과 서로를 부르는 말입니다. 슬랭의 어느 갈래보다 사회적 정보를 많이 싣고 있어서, 하나만 잘못 골라도 바깥사람으로, 더 나쁘게는 무례한 사람으로 드러납니다.',
    },
    'insults': {
      name: '욕과 불평',
      topic: '욕과 불평',
      description:
        '멍청이와 성가신 일, 어그러진 상황을 가리키는 말입니다. 여기서는 문체가 결정적입니다. 친구 사이에서는 다정하지만 낯선 사람에게서는 싸움이 되는 말이 여럿 있습니다.',
    },
    'people': {
      name: '사람과 유형',
      topic: '사람',
      description:
        '사회적 유형에 붙이는 이름표입니다. 잘난 척하는 사람, 시골 친척, 도시 물 든 사람, 얻어먹는 사람. 이 말들은 한 문화가 제 구성원의 무엇을 눈여겨보는지 알려 줍니다.',
    },
    'money': {
      name: '돈과 일',
      topic: '돈과 일',
      description:
        '현금과 값, 일자리와 수고를 가리키는 슬랭입니다. 돈에 관한 말은 어느 언어에서나 가장 오래되고 가장 질긴 슬랭에 속하며, 지역색이 가장 짙은 경우도 많습니다.',
    },
    'food-drink': {
      name: '음식과 술',
      topic: '음식과 술',
      description:
        '먹고 마시는 일, 그리고 둘 중 하나를 지나치게 한 상태를 가리키는 비격식 표현입니다. 국경을 넘어 자주 빌려 쓰이고, 그만큼 자주 잘못 옮겨집니다.',
    },
    'partying': {
      name: '외출과 파티',
      topic: '외출과 파티',
      description:
        '밤나들이와 술, 춤, 그리고 그 뒷일입니다. 세대마다 같은 활동에 새 이름을 붙이기 때문에 몇 해마다 어휘가 갈아엎어지는 갈래입니다.',
    },
    'romance': {
      name: '연애와 호감',
      topic: '연애와 작업 걸기',
      description:
        '수작과 데이트, 끌림과 거절입니다. 완곡어가 많고, 글자 그대로 옮겼다가 망신당하기 가장 쉬운 갈래이기도 합니다.',
    },
    'emotion': {
      name: '감정과 반응',
      topic: '감정과 반응',
      description:
        '놀람과 짜증, 기쁨과 불신입니다. 명사보다 감탄사인 경우가 많습니다. 무언가를 가리키는 말이 아니라 무언가를 해내는 말입니다.',
    },
    'discourse': {
      name: '군말과 담화 표지',
      topic: '군말',
      description:
        '말을 붙들어 매는 작은 말들입니다. 단정을 누그러뜨리는 말, 문장 끝에 붙는 확인 표현, 강조어, 그리고 뜸 들이는 소리. 모어 화자에게는 거의 보이지 않고 배우는 사람에게는 거의 불가능합니다.',
    },
    'everyday': {
      name: '일상 사물과 행동',
      topic: '일상적인 것들',
      description:
        '평범한 물건과 평범한 행동에 붙는 비격식 이름입니다. 회화책에는 좀처럼 오르지 않으면서 대화에서는 끊임없이 나오는, 슬랭의 살림살이 층입니다.',
    },
  },

  partOfSpeech: {
    noun: '명사',
    verb: '동사',
    adjective: '형용사',
    adverb: '부사',
    interjection: '감탄사',
    phrase: '구',
    idiom: '관용구',
  },

  register: {
    informal: '비격식',
    colloquial: '구어',
    vulgar: '상스러움',
    taboo: '금기',
    dated: '옛말',
    regional: '지역어',
  },

  usageWarning: {
    vulgar: '상스러운 말 — 격식 있는 자리나 업무 자리에서는 피하십시오',
    offensive: '기분을 상하게 할 수 있음 — 뜻은 알아 두되 쓰기 전에 한 번 더 생각하십시오',
    sexual: '성적인 함의가 있음',
    slur: '차별적 멸칭으로 쓰임 — 알아듣기 위해서만 싣습니다',
    'context-dependent': '누가 말하느냐에 따라 친근하게도 적대적으로도 들림',
  },

  regionGroup: {
    'anglosphere': '영어권',
    'europe': '유럽',
    'latin-america': '라틴아메리카',
    'east-asia': '동아시아',
  },
};
