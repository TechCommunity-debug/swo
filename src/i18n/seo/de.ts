import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

/**
 * German titles and meta descriptions.
 *
 * `country.adjective` arrives as the strong nominative masculine form
 * ("Amerikanischer"), so every template below keeps it directly in front of
 * "Slang" and nowhere else — see `../ui/de.ts` for the full frame.
 */
export const de: SeoStrings = {
  tagline: 'Der weltweite Wegweiser durch Slang und informelle Ausdrücke',

  home: () => ({
    title: `Slang-Wörterbuch – Bedeutungen, Beispiele & Slang nach Ländern`,
    description: truncate(
      'Entdecke Slangwörter und Ausdrücke aus aller Welt. Finde Bedeutungen, Beispiele, Aussprache, Herkunft und Slang nach Ländern im Online-Slang-Wörterbuch.',
    ),
  }),

  country: (country, count) => ({
    title: `${country.adjective} Slang: ${count}+ Wörter und Wendungen erklärt | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `${country.adjective} Slang zum Thema ${category.topic}: ${count} Begriffe | ${SITE_NAME}`,
    description: truncate(
      `${country.adjective} Slang zum Thema ${category.topic}: ${count} Wörter, jeweils mit Bedeutung, Aussprache und einem Beispiel aus dem echten Gebrauch.`,
    ),
  }),

  entry: (entry, firstDefinition, country) => {
    const parts = ['Bedeutung'];
    if (entry.pronunciation?.respelling) parts.push('Aussprache');
    parts.push('Beispiele');
    return {
      title: `${titleCase(head(entry))} – ${parts.join(', ')} | ${country.adjective} Slang`,
      description: truncate(
        `${titleCase(head(entry))} – ${country.adjective} Slang: ${firstDefinition}`,
      ),
    };
  },

  browse: (count, countries) => ({
    title: `Alle Slangbegriffe von A bis Z | ${SITE_NAME}`,
    description: `Alphabetisches Register aller ${count} Slangbegriffe auf ${SITE_NAME}, aus ${countries} Ländern.`,
  }),

  search: {
    title: `Slangbegriffe suchen | ${SITE_NAME}`,
    description:
      'Durchsuche das gesamte Wörterbuch von Slang Words Online nach Begriff, Bedeutung oder Land.',
  },

  notFound: {
    title: `Seite nicht gefunden | ${SITE_NAME}`,
    description:
      'Diese Seite existiert nicht. Durchsuche das Wörterbuch oder wähle ein Land aus.',
  },
  serverError: {
    title: `500 — Serverfehler | ${SITE_NAME}`,
    description:
      'Ein unerwarteter Serverfehler ist auf Slang Words Online aufgetreten. Bitte aktualisiere die Seite oder kehre zur Startseite zurück.',
  },
  about: (countriesCount, languagesCount) => ({
    title: `Über uns — Weltweiter Wegweiser für Slang & Umgangssprache | ${SITE_NAME}`,
    description: `Erfahre mehr über Slang Words Online, das weltweite Nachschlagewerk für lebendigen Slang, Umgangssprache, Redewendungen und informelle Ausdrücke aus ${countriesCount} Ländern in ${languagesCount} Sprachen.`,
  }),
  contact: (email) => ({
    title: `Kontakt — Fragen, Feedback & Begriffsvorschläge | ${SITE_NAME}`,
    description: `Kontaktiere das Team von Slang Words Online. Sende neue Slang-Begriffe, Korrekturen oder Kooperationsanfragen an ${email}.`,
  }),
  privacy: {
    title: `Datenschutzerklärung | ${SITE_NAME}`,
    description: 'Lies die Datenschutzerklärung von Slang Words Online. Erfahre, wie wir Daten, Cookies und deine Privatsphäre in unserem Wörterbuch schützen.',
  },
  terms: {
    title: `Nutzungsbedingungen | ${SITE_NAME}`,
    description: 'Lesen Sie die Nutzungsbedingungen von Slang Words Online. Erfahren Sie mehr über Richtlinien, sprachliche Hinweise, faire Bildungsnutzung und Urheberrechte.',
  },
};
