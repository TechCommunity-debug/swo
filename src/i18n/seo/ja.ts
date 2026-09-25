import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

/**
 * 日本語版のタイトルとメタディスクリプション。
 *
 * 日本語の検索クエリは「ヤバい 意味」の形になるので、項目ページのタイトルは
 * 語そのものと「意味」で始めます。`adjective` は「アメリカ」のような素の国名
 * 形で入ってくるので、「の」はこちら側のテンプレートで書きます。
 */
export const ja: SeoStrings = {
  tagline: '世界のスラングとくだけた表現のガイド',

  home: (countries) => ({
    title: `${SITE_NAME} — 世界のスラングとくだけた表現のガイド`,
    description: truncate(
      `${countries.join('、')}のスラングを収録した世界のスラング辞典。すべての項目に実際の意味、発音、例文を付けています。`,
    ),
  }),

  country: (country, count) => ({
    title:
      country.metaTitle ??
      `${country.adjective}のスラング：${count}語の意味と使い方 | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `${country.adjective}のスラング：${category.topic}（${count}語） | ${SITE_NAME}`,
    description: truncate(
      `${category.topic}に関する${country.adjective}のスラング${count}語。それぞれの意味、発音、そして実際の文の中での使われ方。`,
    ),
  }),

  entry: (entry, firstDefinition, country) => {
    const parts = ['意味'];
    if (entry.pronunciation?.respelling) parts.push('発音');
    parts.push('例文');
    return {
      title: `${titleCase(head(entry))}の${parts.join('・')} | ${country.adjective}のスラング`,
      description: truncate(
        `${titleCase(head(entry))}は${country.adjective}のスラングで${firstDefinition}`,
      ),
    };
  },

  browse: (count, countries) => ({
    title: `スラング全${count}語の索引 A–Z | ${SITE_NAME}`,
    description: `${SITE_NAME}に収録した${countries}か国・全${count}語のスラングを、アルファベット順に並べた索引です。`,
  }),

  search: {
    title: `スラングを検索 | ${SITE_NAME}`,
    description:
      'Slang Words Online の辞典全体を、語・意味・国から検索できます。',
  },

  about: {
    title: `定義をどう調べ、どう確認しているか | ${SITE_NAME}`,
    description:
      '編集方針です。これらの定義がどこから来ているか、語調や使用上の注意をどう決めているか、そして語源が本当に分からないときに何をしているか。',
  },

  notFound: {
    title: `ページが見つかりません | ${SITE_NAME}`,
    description: 'このページはありません。辞典を検索するか、国を選んでご覧ください。',
  },
};
