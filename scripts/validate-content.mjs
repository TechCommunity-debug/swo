#!/usr/bin/env node
/**
 * Referential-integrity checks across the content files.
 *
 * Zod validates the shape of a single entry; it cannot see across files. This
 * catches the failures that would otherwise ship silently: a relatedTerms id
 * pointing at nothing, a region that isn't in its country's list, a duplicate
 * slug quietly overwriting an entry in the content store.
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const ENTRIES_DIR = path.join(ROOT, 'src/data/entries');

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

const countries = JSON.parse(
  await readFile(path.join(ROOT, 'src/data/countries.json'), 'utf-8'),
);
const countryById = new Map(countries.map((c) => [c.id, c]));

// --- countries -------------------------------------------------------------
const seenUrlSlugs = new Set();
for (const c of countries) {
  if (seenUrlSlugs.has(c.urlSlug)) fail(`Duplicate country urlSlug: ${c.urlSlug}`);
  seenUrlSlugs.add(c.urlSlug);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(c.urlSlug)) {
    fail(`Country "${c.id}" has a non-kebab-case urlSlug: ${c.urlSlug}`);
  }
}

// --- entries ---------------------------------------------------------------
const files = (await readdir(ENTRIES_DIR)).filter((f) => f.endsWith('.json')).sort();
const allIds = new Set();
const entries = [];

for (const file of files) {
  const countryId = path.basename(file, '.json');
  if (!countryById.has(countryId)) {
    fail(`entries/${file} has no matching country id in countries.json`);
    continue;
  }
  const country = countryById.get(countryId);
  const items = JSON.parse(await readFile(path.join(ENTRIES_DIR, file), 'utf-8'));

  const seen = new Set();
  for (const e of items) {
    if (seen.has(e.slug)) fail(`Duplicate slug "${e.slug}" in entries/${file}`);
    seen.add(e.slug);

    const id = `${countryId}/${e.slug}`;
    allIds.add(id);
    entries.push({ id, countryId, ...e });

    if (e.region && !country.regions.includes(e.region)) {
      fail(`${id}: region "${e.region}" is not listed in ${countryId}.regions`);
    }
    for (const c of e.alsoUsedIn ?? []) {
      if (!countryById.has(c)) fail(`${id}: alsoUsedIn references unknown country "${c}"`);
      if (c === countryId) fail(`${id}: alsoUsedIn lists its own country`);
    }
  }
}

for (const e of entries) {
  for (const r of e.relatedTerms ?? []) {
    if (!allIds.has(r)) fail(`${e.id}: relatedTerms references unknown entry "${r}"`);
    if (r === e.id) fail(`${e.id}: relatedTerms references itself`);
  }
  // Curated only, never padded — see the internal-linking rules.
  if ((e.relatedTerms ?? []).length > 6) {
    warn(`${e.id}: ${e.relatedTerms.length} related terms; the entry page renders at most 6`);
  }
}

// --- report ----------------------------------------------------------------
const published = entries.filter((e) => e.status === 'published').length;
for (const w of warnings) console.warn(`  warn  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`  error ${e}`);
  console.error(`\ncontent validation failed: ${errors.length} error(s)`);
  process.exit(1);
}
console.log(
  `content ok — ${entries.length} entries (${published} published) across ${files.length} countries`,
);
