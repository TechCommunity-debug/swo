import { SITE_URL } from './seo';
import type { Locale } from '../data/locales';
import { localeConfig } from '../data/locales';

/**
 * Structured-data builders.
 *
 * Kept out of the page templates because the breadcrumb trail now has four
 * levels and three of them are localized — written inline, the JSON-LD trail
 * and the visible `<Breadcrumbs>` drift apart within a couple of edits.
 */

export const absolute = (path: string) => new URL(path, SITE_URL).href;

export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function collectionPage(opts: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
  items: { name: string; path: string }[];
  /** Cap the ItemList: a list of 400 URLs is not read, it is skipped. */
  limit?: number;
}) {
  const { name, description, path, locale, items, limit = 100 } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: absolute(path),
    inLanguage: localeConfig(locale).hreflang,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.slice(0, limit).map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: absolute(item.path),
      })),
    },
  };
}

export function definedTerm(opts: {
  term: string;
  romanization?: string;
  description: string;
  path: string;
  /** The language the *term* is in — not the language of the page. */
  termLanguage: string;
  termSetId: string;
  variants: string[];
}) {
  const alternateName = [
    ...(opts.romanization ? [opts.romanization] : []),
    ...opts.variants,
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${absolute(opts.path)}#term`,
    name: opts.term,
    description: opts.description,
    inDefinedTermSet: { '@id': opts.termSetId },
    url: absolute(opts.path),
    inLanguage: opts.termLanguage,
    ...(alternateName.length > 0 ? { alternateName } : {}),
  };
}
