import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

export const pt: SeoStrings = {
  tagline: 'O guia global da gíria e das expressões informais',

  home: () => ({
    title: `${SITE_NAME} — O guia global da gíria e das expressões informais`,
    description: truncate(
      'Dicionário de gíria em português: significados reais, pronúncia e frases de exemplo para cada termo, país por país.',
    ),
  }),

  country: (country, count) => ({
    title: `Gíria ${country.adjective}: ${count} palavras e expressões explicadas | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `Gíria ${country.adjective} sobre ${category.topic}: ${count} termos | ${SITE_NAME}`,
    description: truncate(
      `${count} palavras da gíria ${country.adjective} sobre ${category.topic}: o que cada uma significa, como se pronuncia e como é usada de verdade numa frase.`,
    ),
  }),

  entry: (entry, firstDefinition, country) => {
    const parts = ['Significado'];
    if (entry.pronunciation?.respelling) parts.push('pronúncia');
    parts.push('exemplos');
    return {
      title: `${titleCase(head(entry))} — ${parts.join(', ')} | Gíria ${country.adjective}`,
      description: truncate(
        `${titleCase(head(entry))} na gíria ${country.adjective}: ${firstDefinition}`,
      ),
    };
  },

  browse: (count, countries) => ({
    title: `Índice A–Z de toda a gíria | ${SITE_NAME}`,
    description: `Índice alfabético dos ${count} termos de gíria do ${SITE_NAME}, de ${countries} países.`,
  }),

  search: {
    title: `Buscar termos de gíria | ${SITE_NAME}`,
    description:
      'Busque em todo o dicionário do Slang Words Online por termo, significado ou país.',
  },

  notFound: {
    title: `Página não encontrada | ${SITE_NAME}`,
    description: 'Esta página não existe. Busque no dicionário ou escolha um país.',
  },
  serverError: {
    title: `500 — Erro do servidor | ${SITE_NAME}`,
    description:
      'Ocorreu um erro inesperado no servidor em Slang Words Online. Atualize a página ou retorne à página inicial.',
  },
};
