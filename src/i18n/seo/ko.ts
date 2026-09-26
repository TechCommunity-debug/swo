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
};
