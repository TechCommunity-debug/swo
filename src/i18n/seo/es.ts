import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

export const es: SeoStrings = {
  tagline: 'La guía global del argot y las expresiones informales',

  home: () => ({
    title: `Diccionario de argot – Significados, ejemplos y argot por país`,
    description: truncate(
      'Descubre palabras y frases de argot de todo el mundo. Encuentra significados, ejemplos, pronunciación, origen y argot por país en nuestro diccionario online.',
    ),
  }),

  country: (country, count) => ({
    title: `Argot ${country.adjective}: ${count}+ palabras y expresiones explicadas | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `Argot ${country.adjective} para ${category.topic}: ${count} términos | ${SITE_NAME}`,
    description: truncate(
      `${count} palabras del argot ${country.adjective} sobre ${category.topic}: qué significa cada una, cómo se pronuncia y cómo se usa de verdad en una frase.`,
    ),
  }),

  entry: (entry, _firstDefinition, country) => {
    const term = titleCase(head(entry));
    return {
      title: `¿Qué significa ${term}? Argot ${country.adjective.toLowerCase()} explicado`,
      description: truncate(
        `¿Qué significa ${entry.term} en el argot ${country.adjective.toLowerCase()}? Descubre sus diferentes significados, cómo se usa, ejemplos, pronunciación y expresiones relacionadas.`,
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
  serverError: {
    title: `500 — Error del servidor | ${SITE_NAME}`,
    description:
      'Se ha producido un error inesperado del servidor en Slang Words Online. Actualiza la página o vuelve a la página de inicio.',
  },
  about: (countriesCount, languagesCount) => ({
    title: `Sobre nosotros — Guía global de argot y modismos | ${SITE_NAME}`,
    description: `Conoce Slang Words Online, la guía global de jerga viva, habla coloquial, modismos y expresiones informales en ${countriesCount} países y ${languagesCount} idiomas.`,
  }),
  contact: (email) => ({
    title: `Contacto — Preguntas, sugerencias y colaboraciones | ${SITE_NAME}`,
    description: `Ponte en contacto con el equipo de Slang Words Online. Envía sugerencias de jerga, correcciones dialectales o consultas a ${email}.`,
  }),
  privacy: {
    title: `Política de privacidad | ${SITE_NAME}`,
    description: 'Lee la política de privacidad de Slang Words Online. Conoce cómo gestionamos datos, cookies y la privacidad en nuestro diccionario global.',
  },
  terms: {
    title: `Términos y condiciones | ${SITE_NAME}`,
    description: 'Lee los términos y condiciones de uso de Slang Words Online. Conoce las directrices de uso, aviso lingüístico, uso legítimo educativo y propiedad intelectual.',
  },
};
