/**
 * The editorial-policy page, one module per locale.
 *
 * Each locale exports a function of the live counts, because the lead sentence
 * quotes how many entries *that edition* has — a number that differs per locale
 * by design, since a page exists only where its content is translated.
 */

import type { Locale } from '../data/locales';
import type { AboutContent } from './about/types';
import { en } from './about/en';
import { es } from './about/es';
import { pt } from './about/pt';
import { fr } from './about/fr';
import { de } from './about/de';
import { it } from './about/it';
import { ru } from './about/ru';
import { ja } from './about/ja';
import { ko } from './about/ko';

export type { AboutContent, AboutSection } from './about/types';

const ABOUT: Record<Locale, (termCount: number, countryCount: number) => AboutContent> = {
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

export const aboutContent = (locale: Locale, termCount: number, countryCount: number) =>
  ABOUT[locale](termCount, countryCount);
