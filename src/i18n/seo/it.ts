import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

export const it: SeoStrings = {
  tagline: 'La guida globale allo slang e alle espressioni informali',

  home: () => ({
    title: `Dizionario dello slang – Significati, esempi e slang per paese`,
    description: truncate(
      'Scopri parole ed espressioni di slang da tutto il mondo. Trova significati, esempi, pronuncia, origini e slang per paese con il nostro dizionario online.',
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
  about: (countriesCount, languagesCount) => ({
    title: `Chi siamo — Guida globale allo slang e ai modi di dire | ${SITE_NAME}`,
    description: `Scopri Slang Words Online, la guida globale al gergo vivo, al linguaggio colloquiale, ai modi di dire e alle espressioni informali in ${countriesCount} paesi e ${languagesCount} lingue.`,
  }),
  contact: (email) => ({
    title: `Contatti — Domande, feedback e proposte di slang | ${SITE_NAME}`,
    description: `Contatta il team di Slang Words Online. Invia suggerimenti di slang, correzioni dialettali o richieste di collaborazione a ${email}.`,
  }),
  privacy: {
    title: `Informativa sulla privacy | ${SITE_NAME}`,
    description: 'Leggi l\'informativa sulla privacy di Slang Words Online. Scopri come gestiamo dati, cookie e la riservatezza degli utenti nel nostro dizionario.',
  },
  terms: {
    title: `Termini e Condizioni | ${SITE_NAME}`,
    description: 'Leggi i Termini e Condizioni d’uso di Slang Words Online. Linee guida per gli utenti, avvertenze linguistiche, uso didattico e diritti di proprietà intellettuale.',
  },
};
