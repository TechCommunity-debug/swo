export const SITE_NAME = 'Slang Words Online';
export const SITE_URL = 'https://slangwordsonline.com';

/** Capitalise for a title without touching terms that are deliberately cased. */
export const titleCase = (term: string) => term.charAt(0).toLocaleUpperCase() + term.slice(1);

/** Trim a description to a length a search engine will actually show. */
export function truncate(text: string, max = 158) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

/** "ヤバい (yabai)" where there is a romanization, else the bare term. */
export const head = (entry: { term: string; romanization?: string }) =>
  entry.romanization ? `${entry.term} (${entry.romanization})` : entry.term;
