import type { Loader } from 'astro/loaders';
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * Loads slang entries from one JSON file per country.
 *
 * Neither built-in loader fits this shape: `glob()` treats each *file* as a
 * single entry (so it would yield 8 array-valued entries), and `file()` reads
 * one file only, which would force 8 sibling collections and break both
 * `getCollection('entries')` and `reference()`.
 *
 * Entry ids are namespaced as `<countryId>/<slug>` — e.g. `mexican/chido`.
 * This is load-bearing, not cosmetic: `mate`, `sick`, `bloody` and `bro` all
 * exist in more than one country, and the content store is a plain key-value
 * map, so a bare-term id would silently overwrite with no build error.
 */
export function entriesLoader(dir = 'src/data/entries'): Loader {
  return {
    name: 'slang-entries',
    load: async ({ config, store, parseData, generateDigest, logger, watcher }) => {
      const baseUrl = new URL(`${dir}/`, config.root);
      const basePath = fileURLToPath(baseUrl);

      const sync = async () => {
        store.clear();

        const files = (await readdir(basePath)).filter((f) => f.endsWith('.json')).sort();
        let total = 0;

        for (const file of files) {
          const countryId = path.basename(file, '.json');
          const raw = await readFile(path.join(basePath, file), 'utf-8');

          let items: unknown;
          try {
            items = JSON.parse(raw);
          } catch (cause) {
            throw new Error(`${dir}/${file} is not valid JSON`, { cause });
          }
          if (!Array.isArray(items)) {
            throw new Error(`${dir}/${file} must contain an array of entries`);
          }

          const seen = new Set<string>();
          for (const item of items as Array<Record<string, unknown>>) {
            const slug = item.slug;
            if (typeof slug !== 'string' || slug.length === 0) {
              throw new Error(`An entry in ${dir}/${file} is missing a "slug"`);
            }
            if (seen.has(slug)) {
              throw new Error(`Duplicate slug "${slug}" in ${dir}/${file}`);
            }
            seen.add(slug);

            const id = `${countryId}/${slug}`;
            const data = await parseData({
              id,
              // `country` is derived from the filename so it can never drift
              // out of sync with the file the entry actually lives in.
              data: { ...item, country: countryId },
              filePath: `${dir}/${file}`,
            });
            store.set({
              id,
              data,
              digest: generateDigest(data),
              filePath: `${dir}/${file}`,
            });
          }
          total += items.length;
        }

        logger.info(`Loaded ${total} slang entries from ${files.length} countries`);
      };

      await sync();

      watcher?.on('change', (changed: string) => {
        if (changed.startsWith(basePath)) {
          logger.info('Slang entry data changed, reloading');
          void sync();
        }
      });
    },
  };
}
