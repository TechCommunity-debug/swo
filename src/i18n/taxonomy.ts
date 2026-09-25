/**
 * Localized labels for the closed vocabularies in `src/data/taxonomy.ts`.
 *
 * The ids live with the schema; the words live here, one file per locale, so
 * that adding a language never touches the schema and a translator never has to
 * read a Zod enum.
 */

import type { Locale } from '../data/locales';
import type { TaxonomyStrings } from './taxonomy/types';
import { en } from './taxonomy/en';
import { es } from './taxonomy/es';
import { pt } from './taxonomy/pt';
import { fr } from './taxonomy/fr';
import { de } from './taxonomy/de';
import { it } from './taxonomy/it';
import { ru } from './taxonomy/ru';
import { ja } from './taxonomy/ja';
import { ko } from './taxonomy/ko';

export type { TaxonomyStrings, CategoryStrings } from './taxonomy/types';

export const TAXONOMY: Record<Locale, TaxonomyStrings> = {
  en,
  es,
  pt,
  fr,
  de,
  it,
  ru,
  ja,
  ko,
};
