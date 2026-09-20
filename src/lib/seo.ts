/**
 * Every page title and meta description template on the site.
 *
 * Keeping them here rather than inline in each page is what stops the titles
 * from drifting into eight slightly different shapes.
 */

export const SITE_NAME = 'Slang Words Online';
export const SITE_TAGLINE = 'The Global Guide to Slang & Informal Expressions';
export const SITE_URL = 'https://slangwordsonline.com';

/** Capitalise for a title without touching terms that are deliberately cased. */
const titleCase = (term: string) =>
  term.charAt(0).toLocaleUpperCase() + term.slice(1);

export const homeSeo = () => ({
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    'A global slang dictionary covering American, British, Australian, Canadian, Mexican, Spanish, Italian and French slang. Real definitions, pronunciation and example sentences for every entry.',
});

export const countrySeo = (country: {
  adjective: string;
  metaTitle?: string;
  metaDescription: string;
}, count: number) => ({
  title:
    country.metaTitle ??
    `${country.adjective} Slang: ${count} Words & Phrases Explained | ${SITE_NAME}`,
  description: country.metaDescription,
});

export const entrySeo = (
  entry: { term: string; definitions: { text: string }[]; pronunciation?: { respelling?: string } },
  country: { adjective: string },
) => {
  const parts = ['Meaning'];
  if (entry.pronunciation?.respelling) parts.push('Pronunciation');
  parts.push('Examples');
  return {
    title: `${titleCase(entry.term)} — ${parts.join(', ')} | ${country.adjective} Slang`,
    description: truncate(
      `${titleCase(entry.term)} in ${country.adjective} slang: ${entry.definitions[0].text}`,
      158,
    ),
  };
};

export const categorySeo = (category: { name: string; description: string }, count: number) => ({
  title: `${category.name} Slang from Around the World | ${SITE_NAME}`,
  description: truncate(`${count} slang terms for ${category.name.toLowerCase()} across eight countries. ${category.description}`, 158),
});

export const browseSeo = (count: number) => ({
  title: `Browse All Slang Terms A–Z | ${SITE_NAME}`,
  description: `An alphabetical index of all ${count} slang terms on Slang Words Online, from eight countries and four languages.`,
});

export const searchSeo = () => ({
  title: `Search Slang Terms | ${SITE_NAME}`,
  description: 'Search the full Slang Words Online dictionary by term, meaning or country.',
});

export const aboutSeo = () => ({
  title: `How We Source and Review Definitions | ${SITE_NAME}`,
  description:
    'Our editorial approach: where these definitions come from, how register and usage warnings are decided, and what we do when the origin of a word is genuinely unknown.',
});

export const categoriesIndexSeo = () => ({
  title: `Slang by Category | ${SITE_NAME}`,
  description:
    'Browse slang by what it does — approval, insults, greetings, money, food, going out — and compare how eight countries say the same thing.',
});

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}
