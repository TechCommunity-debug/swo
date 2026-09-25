import type { SeoStrings } from './types';
import { head, SITE_NAME, titleCase, truncate } from './helpers';

export const fr: SeoStrings = {
  tagline: 'Le guide mondial de l’argot et des expressions familières',

  home: () => ({
    title: `${SITE_NAME} — Le guide mondial de l’argot et des expressions familières`,
    description: truncate(
      'Dictionnaire d’argot en français : sens réels, prononciation et phrases d’exemple pour chaque terme, pays par pays.',
    ),
  }),

  country: (country, count) => ({
    title: `Argot ${country.adjective} : ${count} mots et expressions expliqués | ${SITE_NAME}`,
    description: country.metaDescription,
  }),

  countryCategory: (country, category, count) => ({
    title: `Argot ${country.adjective} sur ${category.topic} : ${count} termes | ${SITE_NAME}`,
    description: truncate(
      `${count} mots d’argot ${country.adjective} sur ${category.topic} : ce que chacun veut dire, comment il se prononce et comment il s’emploie vraiment dans une phrase.`,
    ),
  }),

  entry: (entry, firstDefinition, country) => {
    const parts = ['Sens'];
    if (entry.pronunciation?.respelling) parts.push('prononciation');
    parts.push('exemples');
    return {
      title: `${titleCase(head(entry))} — ${parts.join(', ')} | Argot ${country.adjective}`,
      description: truncate(
        `${titleCase(head(entry))} en argot ${country.adjective} : ${firstDefinition}`,
      ),
    };
  },

  browse: (count, countries) => ({
    title: `Index A–Z de tout l’argot | ${SITE_NAME}`,
    description: `Index alphabétique des ${count} termes d’argot de ${SITE_NAME}, pour ${countries} pays.`,
  }),

  search: {
    title: `Rechercher un terme d’argot | ${SITE_NAME}`,
    description:
      'Cherchez dans tout le dictionnaire Slang Words Online par terme, par sens ou par pays.',
  },

  notFound: {
    title: `Page introuvable | ${SITE_NAME}`,
    description:
      'Cette page n’existe pas. Cherchez dans le dictionnaire ou choisissez un pays à parcourir.',
  },
};
