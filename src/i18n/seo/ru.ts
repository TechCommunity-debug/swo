import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

/** Three-form agreement, as in `ui/ru.ts` — titles quote counts too. */
const plural = (n: number, one: string, few: string, many: string) => {
  const hundreds = Math.abs(n) % 100;
  const tens = hundreds % 10;
  if (hundreds >= 11 && hundreds <= 14) return `${n} ${many}`;
  if (tens === 1) return `${n} ${one}`;
  if (tens >= 2 && tens <= 4) return `${n} ${few}`;
  return `${n} ${many}`;
};

export const ru: SeoStrings = {
  tagline: 'Всемирный путеводитель по сленгу и неформальным выражениям',

  home: () => ({
    title: `${SITE_NAME} — всемирный путеводитель по сленгу и неформальным выражениям`,
    description: truncate(
      'Словарь сленга на русском: настоящие значения, произношение и примеры употребления для каждого термина, страна за страной.',
    ),
  }),

  country: (country, count) => ({
    title: `${country.adjective} сленг: ${plural(count, 'слово и выражение', 'слова и выражения', 'слов и выражений')} с объяснениями | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `${country.adjective} сленг про ${category.topic}: ${plural(count, 'термин', 'термина', 'терминов')} | ${SITE_NAME}`,
    description: truncate(
      `${plural(count, 'сленговое слово', 'сленговых слова', 'сленговых слов')} про ${category.topic} — ${country.adjective.toLocaleLowerCase()} сленг: что значит каждое, как произносится и как его употребляют в живой речи.`,
    ),
  }),

  entry: (entry, firstDefinition, country) => {
    const parts = ['значение'];
    if (entry.pronunciation?.respelling) parts.push('произношение');
    parts.push('примеры');
    return {
      title: `${titleCase(head(entry))} — ${parts.join(', ')} | ${country.adjective} сленг`,
      description: truncate(
        `${titleCase(head(entry))} — ${country.adjective.toLocaleLowerCase()} сленг: ${firstDefinition}`,
      ),
    };
  },

  browse: (count, countries) => ({
    title: `Весь сленг, указатель A–Z | ${SITE_NAME}`,
    description: `Алфавитный указатель: ${plural(count, 'сленговый термин', 'сленговых термина', 'сленговых терминов')} на ${SITE_NAME}, из ${plural(countries, 'страны', 'стран', 'стран')}.`,
  }),

  search: {
    title: `Поиск по сленгу | ${SITE_NAME}`,
    description:
      'Ищите по всему словарю Slang Words Online — по термину, по значению или по стране.',
  },

  about: {
    title: `Как мы составляем и проверяем определения | ${SITE_NAME}`,
    description:
      'Наш редакционный подход: откуда берутся эти определения, как определяются регистр и предупреждения об употреблении и что мы делаем, когда происхождение слова неизвестно.',
  },

  notFound: {
    title: `Страница не найдена | ${SITE_NAME}`,
    description: 'Этой страницы не существует. Поищите в словаре или выберите страну.',
  },
};
