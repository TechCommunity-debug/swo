import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

export const es: SeoStrings = {
  tagline: 'La guía global del argot y las expresiones informales',

  home: () => ({
    title: `${SITE_NAME} — La guía global del argot y las expresiones informales`,
    description: truncate(
      'Diccionario de argot en español: significados reales, pronunciación y frases de ejemplo para cada término, país por país.',
    ),
  }),

  country: (country, count) => ({
    title: `Argot ${country.adjective}: ${count} palabras y expresiones explicadas | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `Argot ${country.adjective} para ${category.topic}: ${count} términos | ${SITE_NAME}`,
    description: truncate(
      `${count} palabras del argot ${country.adjective} sobre ${category.topic}: qué significa cada una, cómo se pronuncia y cómo se usa de verdad en una frase.`,
    ),
  }),

  entry: (entry, firstDefinition, country) => {
    const parts = ['Significado'];
    if (entry.pronunciation?.respelling) parts.push('pronunciación');
    parts.push('ejemplos');
    return {
      title: `${titleCase(head(entry))} — ${parts.join(', ')} | Argot ${country.adjective}`,
      description: truncate(
        `${titleCase(head(entry))} en el argot ${country.adjective}: ${firstDefinition}`,
      ),
    };
  },

  browse: (count, countries) => ({
    title: `Índice A–Z de todo el argot | ${SITE_NAME}`,
    description: `Índice alfabético de los ${count} términos de argot de ${SITE_NAME}, de ${countries} países.`,
  }),

  search: {
    title: `Buscar términos de argot | ${SITE_NAME}`,
    description:
      'Busca en todo el diccionario de Slang Words Online por término, significado o país.',
  },

  notFound: {
    title: `Página no encontrada | ${SITE_NAME}`,
    description: 'Esta página no existe. Busca en el diccionario o elige un país.',
  },
};
