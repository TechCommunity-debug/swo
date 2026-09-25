import type { en } from './en';

/**
 * The chrome vocabulary, inferred from the English dictionary.
 *
 * Every other locale file annotates its export with this type, so adding a key
 * to `en.ts` fails the build in every locale that has not translated it yet.
 */
export type Strings = typeof en;
