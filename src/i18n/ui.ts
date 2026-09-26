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
import type { Strings } from './ui/types';

export type { Strings } from './ui/types';

const DICTIONARIES: Record<Locale, Strings> = { en, es, pt, fr, de, it, ru, ja, ko };

export const t = (locale: Locale): typeof en => {
  const dict = DICTIONARIES[locale];
  if (!dict) return en;
  return { ...en, ...dict };
};
