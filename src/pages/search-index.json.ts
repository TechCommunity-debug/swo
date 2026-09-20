import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { countriesById, entryPath, splitEntryId } from '../lib/urls';

/**
 * The client-side search index.
 *
 * Deliberately a strict minimal projection stored as a tuple array rather than
 * objects: term, country adjective, flag, href, one-line gloss. At ~430 entries
 * this is roughly 50KB. Keeping it this narrow is what makes swapping in
 * per-country shards or Pagefind later a two-file change — as soon as the
 * result card renders a field that only exists in a fat index, that door shuts.
 */
export const GET: APIRoute = async () => {
  const countries = await getCollection('countries');
  const byId = countriesById(countries);
  const entries = await getCollection('entries', (e) => e.data.status === 'published');

  const rows = entries
    .map((e) => {
      const [countryId, termSlug] = splitEntryId(e.id);
      const country = byId.get(countryId);
      if (!country) return null;
      const gloss = e.data.definitions[0].text;
      return [
        e.data.term,
        country.data.adjective,
        country.data.flagEmoji,
        entryPath(country.data.urlSlug, termSlug),
        gloss.length > 110 ? `${gloss.slice(0, 109).trimEnd()}…` : gloss,
      ];
    })
    .filter(Boolean)
    .sort((a, b) => (a as string[])[0].localeCompare((b as string[])[0], 'en', { sensitivity: 'base' }));

  return new Response(JSON.stringify(rows), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
