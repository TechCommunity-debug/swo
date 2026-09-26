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
    title: `スラング辞典 – 意味・例文・国別のスラング`,
    description: truncate(
      '世界中のスラングや表現を発見。オンラインスラング辞典で意味、例文、発音、語源、国別のスラングを調べることができます。',
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

  notFound: {
    title: `ページが見つかりません | ${SITE_NAME}`,
    description: 'このページはありません。辞典を検索するか、国を選んでご覧ください。',
  },
  serverError: {
    title: `500 — サーバーエラー | ${SITE_NAME}`,
    description:
      'Slang Words Online で予期しないサーバーエラーが発生しました。ページを再読み込みするか、辞典のトップページへお戻りください。',
  },
  about: (countriesCount, languagesCount) => ({
    title: `サイトについて — 世界のスラング・俗語・口語表現ガイド | ${SITE_NAME}`,
    description: `Slang Words Onlineについて。世界${countriesCount}カ国・${languagesCount}言語の生きたスラング、日常会話の口語表現、慣用句、街頭の言葉をわかりやすく解説するグローバル辞書です。`,
  }),
  contact: (email) => ({
    title: `お問い合わせ — ご質問・ご意見・スラングのご提案 | ${SITE_NAME}`,
    description: `Slang Words Online 運営チームへのお問い合わせ。新しいスラングのご提案、方言の補足・訂正、提携に関するご連絡は ${email} までお寄せください。`,
  }),
  privacy: {
    title: `プライバシーポリシー | ${SITE_NAME}`,
    description: 'Slang Words Online のプライバシーポリシー。当辞典におけるデータ保護、Cookie の取り扱い、訪問者のプライバシー保護方針について説明します。',
  },
  terms: {
    title: `利用規約 | ${SITE_NAME}`,
    description: 'Slang Words Onlineの利用規約です。利用ガイドライン、言語表現に関する免責事項、教育目的の適正利用、知的財産権の取り扱いについてご案内します。',
  },
};
