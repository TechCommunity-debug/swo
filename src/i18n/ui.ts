/**
 * Every user-facing chrome string on the site, in every locale.
 *
 * Entry *content* is not translated here — that lives beside the entries in
 * `src/data/i18n/<locale>/`, because a missing translation there has to be able
 * to remove a page from the locale entirely. A missing string here is only ever
 * a typo, so the type does the work: `Strings` is inferred from the English
 * dictionary, and every other locale must satisfy it exactly.
 *
 * One file per locale, because these dictionaries are ~90 strings each and nine
 * of them in one file is a file nobody can navigate — and because a locale is
 * then added by writing one new file rather than editing a shared one.
 */

import type { Locale } from '../data/locales';
import { en } from './ui/en';
import { es } from './ui/es';
import { pt } from './ui/pt';
import { fr } from './ui/fr';
import { de } from './ui/de';
import { it } from './ui/it';
import { ru } from './ui/ru';
import { ja } from './ui/ja';
import { ko } from './ui/ko';

export type { Strings } from './ui/types';

const DICTIONARIES = { en, es, pt, fr, de, it, ru, ja, ko } satisfies Record<
  Locale,
  typeof en
>;

export const t = (locale: Locale) => DICTIONARIES[locale];
