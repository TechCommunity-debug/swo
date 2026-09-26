import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

/**
 * Korean titles are written around the query shape people actually type —
 * 「단어 뜻」 — so an entry title leads with the term and 뜻 rather than with
 * the site or the country.
 */
export const ko: SeoStrings = {
  tagline: '슬랭과 비격식 표현을 다루는 세계 안내서',

  home: () => ({
    title: `${SITE_NAME} — 세계 슬랭 사전`,
    description: truncate(
      '나라별 슬랭을 한국어로 풀이한 사전. 비격식 단어와 표현의 실제 뜻과 발음, 번역이 붙은 예문을 항목마다 실었습니다.',
    ),
  }),

  country: (country, count) => ({
    title: `${country.adjective} 슬랭 뜻 정리: 단어와 표현 ${count}개 | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `${country.adjective} 슬랭: ${category.topic} 표현 ${count}개 | ${SITE_NAME}`,
    description: truncate(
      `${category.topic} 관련 ${country.adjective} 슬랭 ${count}개. 각 단어의 뜻과 발음, 실제 문장에서 쓰이는 방식을 함께 정리했습니다.`,
    ),
  }),

  entry: (entry, firstDefinition, country) => {
    const parts = ['뜻'];
    if (entry.pronunciation?.respelling) parts.push('발음');
    parts.push('예문');
    return {
      title: `${titleCase(head(entry))} ${parts.join(', ')} | ${country.adjective} 슬랭`,
      description: truncate(
        `${country.adjective} 슬랭 ${titleCase(head(entry))}의 뜻: ${firstDefinition}`,
      ),
    };
  },

  browse: (count, countries) => ({
    title: `슬랭 단어 전체 A–Z 색인 | ${SITE_NAME}`,
    description: `${SITE_NAME}에 실린 ${countries}개국 슬랭 단어 ${count}개의 알파벳순 색인입니다.`,
  }),

  search: {
    title: `슬랭 단어 검색 | ${SITE_NAME}`,
    description: '단어와 뜻, 나라로 Slang Words Online 사전 전체를 검색합니다.',
  },

  notFound: {
    title: `페이지를 찾을 수 없습니다 | ${SITE_NAME}`,
    description: '이 페이지는 존재하지 않습니다. 사전을 검색하거나 나라를 골라 살펴보세요.',
  },
  serverError: {
    title: `500 — 서버 오류 | ${SITE_NAME}`,
    description:
      'Slang Words Online 서버에서 예기치 않은 오류가 발생했습니다. 페이지를 새로고침하거나 사전 홈으로 돌아가 주세요.',
  },
  about: (countriesCount, languagesCount) => ({
    title: `소개 — 세계 슬랭 및 구어 표현 가이드 | ${SITE_NAME}`,
    description: `Slang Words Online을 소개합니다. 전 세계 ${countriesCount}개국 ${languagesCount}개 언어의 생생한 슬랭, 일상 구어체, 관용구, 은어를 깊이 있게 해설하는 글로벌 사전입니다.`,
  }),
  contact: (email) => ({
    title: `문의하기 — 질문, 피드백 및 신조어 제보 | ${SITE_NAME}`,
    description: `Slang Words Online 팀에 문의하세요. 새로운 슬랭 제보, 방언 뉘앙스 수정, 제휴 문의는 ${email} 로 보내주시기 바랍니다.`,
  }),
  privacy: {
    title: `개인정보처리방침 | ${SITE_NAME}`,
    description: 'Slang Words Online 의 개인정보처리방침입니다. 데이터 관리, 쿠키 및 이용자 개인정보 보호 방침에 대해 안내합니다.',
  },
  terms: {
    title: `이용약관 | ${SITE_NAME}`,
    description: 'Slang Words Online 이용약관입니다. 사이트 이용 지침, 언어적 면책 고지, 교육 목적 공정 이용 및 지식재산권 규정을 확인하세요.',
  },
};
