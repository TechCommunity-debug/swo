import type { en } from './en';

/**
 * The chrome vocabulary, inferred from the English dictionary.
 * Keys specific to English SEO prose fall back to English at runtime.
 */
type OptionalHomeKeys =
  | 'aboutH2'
  | 'aboutP1'
  | 'aboutP2'
  | 'aboutP3'
  | 'aboutP4'
  | 'aboutP5'
  | 'faqH2';

export type Strings = Omit<typeof en, OptionalHomeKeys> &
  Partial<Pick<typeof en, OptionalHomeKeys>>;
