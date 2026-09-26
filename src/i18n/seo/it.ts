import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

export const it: SeoStrings = {
  tagline: 'La guida globale allo slang e alle espressioni informali',

  home: () => ({
    title: `${SITE_NAME} — La guida globale allo slang e alle espressioni informali`,
    description: truncate(
      'Dizionario di slang in italiano: significati reali, pronuncia e frasi di esempio per ogni termine, paese per paese.',
    ),
  }),

  country: (country, count) => ({
    title: `Slang ${country.adjective.toLowerCase()}: ${count} parole ed espressioni spiegate | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `Slang ${country.adjective.toLowerCase()} per ${category.topic}: ${count} termini | ${SITE_NAME}`,
    description: truncate(
      `${count} parole di slang ${country.adjective.toLowerCase()} per ${category.topic}: che cosa significa ciascuna, come si pronuncia e come si usa davvero in una frase.`,
    ),
  }),

  entry: (entry, firstDefinition, country) => {
    const parts = ['Significato'];
    if (entry.pronunciation?.respelling) parts.push('pronuncia');
    parts.push('esempi');
    return {
      title: `${titleCase(head(entry))} — ${parts.join(', ')} | Slang ${country.adjective.toLowerCase()}`,
      description: truncate(
        `${titleCase(head(entry))} nello slang ${country.adjective.toLowerCase()}: ${firstDefinition}`,
      ),
    };
  },

  browse: (count, countries) => ({
    title: `Indice A–Z di tutto lo slang | ${SITE_NAME}`,
    description: `Indice alfabetico dei ${count} termini di slang di ${SITE_NAME}, da ${countries} paesi.`,
  }),

  search: {
    title: `Cerca termini di slang | ${SITE_NAME}`,
    description:
      'Cerca in tutto il dizionario di Slang Words Online per termine, significato o paese.',
  },

  notFound: {
    title: `Pagina non trovata | ${SITE_NAME}`,
    description: 'Questa pagina non esiste. Cerca nel dizionario oppure scegli un paese.',
  },
  serverError: {
    title: `500 — Errore del server | ${SITE_NAME}`,
    description:
      'Si è verificato un errore imprevisto del server su Slang Words Online. Ricarica la pagina o torna alla home page del dizionario.',
  },
};
