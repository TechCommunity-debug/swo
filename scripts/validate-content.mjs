#!/usr/bin/env node
/**
 * Referential-integrity checks across the content files.
 *
 * Zod validates the shape of a single entry; it cannot see across files. This
 * catches the failures that would otherwise ship silently: a relatedTerms id
 * pointing at nothing, a region that isn't in its country's list, a duplicate
 * slug quietly overwriting an entry in the content store — and, since the URL
 * restructure, the two new ways content can break routing:
 *
 *   1. A URL collision. `/mexican-slang/people/guey/` is built from the entry's
 *      *first* category, so two entries in one country can only collide if they
 *      share a slug, but a country slug colliding with a locale prefix would
 *      shadow an entire language. Both are checked.
 *   2. A half-finished translation. A locale override whose definitions array
 *      is a different length from the English one would silently drop or
 *      mismatch a sense, so the lengths must agree exactly.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const ENTRIES_DIR = path.join(ROOT, 'src/data/entries');
const I18N_DIR = path.join(ROOT, 'src/data/i18n');

/** Kept in step with src/data/locales.ts. */
const LOCALE_PREFIXES = new Set(['es', 'pt', 'fr', 'de', 'it', 'ru', 'ja', 'ko']);

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

const readJson = async (file) => JSON.parse(await readFile(file, 'utf-8'));
const exists = async (p) => {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
};

const countries = await readJson(path.join(ROOT, 'src/data/countries.json'));
const countryById = new Map(countries.map((c) => [c.id, c]));

// --- countries -------------------------------------------------------------
const seenUrlSlugs = new Set();
for (const c of countries) {
  if (seenUrlSlugs.has(c.urlSlug)) fail(`Duplicate country urlSlug: ${c.urlSlug}`);
  seenUrlSlugs.add(c.urlSlug);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(c.urlSlug)) {
    fail(`Country "${c.id}" has a non-kebab-case urlSlug: ${c.urlSlug}`);
  }
  if (LOCALE_PREFIXES.has(c.urlSlug)) {
    fail(`Country "${c.id}" uses urlSlug "${c.urlSlug}", which is a locale prefix`);
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
  const items = await readJson(path.join(ENTRIES_DIR, file));

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
    // A term slug that matches one of its own country's category segments
    // would make /<country>/<slug>/ ambiguous with a topic page.
    if (e.categories?.includes(e.slug)) {
      fail(`${id}: slug "${e.slug}" collides with a category segment in the same country`);
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
  // Non-Latin scripts must carry a romanization: without one the term cannot
  // be searched for, sorted into the A–Z index, or read aloud by anyone who
  // does not already know the script.
  if (!e.romanization && /[^\p{Script=Latin}\p{P}\p{N}\s]/u.test(e.term)) {
    fail(`${e.id}: term "${e.term}" is not in Latin script and has no "romanization"`);
  }
}

const entryById = new Map(entries.map((e) => [e.id, e]));

// --- translations ----------------------------------------------------------
let translationCount = 0;

for (const locale of LOCALE_PREFIXES) {
  const dir = path.join(I18N_DIR, locale, 'entries');
  if (!(await exists(dir))) continue;

  for (const file of (await readdir(dir)).filter((f) => f.endsWith('.json')).sort()) {
    const countryId = path.basename(file, '.json');
    if (!countryById.has(countryId)) {
      fail(`i18n/${locale}/entries/${file} has no matching country id`);
      continue;
    }
    const overrides = await readJson(path.join(dir, file));

    for (const [slug, o] of Object.entries(overrides)) {
      const id = `${countryId}/${slug}`;
      const source = entryById.get(id);
      if (!source) {
        fail(`i18n/${locale}: translation for "${id}" has no English entry`);
        continue;
      }
      if (!Array.isArray(o.definitions)) {
        fail(`i18n/${locale}/${id}: missing "definitions"`);
        continue;
      }
      if (o.definitions.length !== source.definitions.length) {
        fail(
          `i18n/${locale}/${id}: ${o.definitions.length} definitions, English has ${source.definitions.length}`,
        );
      }
      for (const [i, def] of o.definitions.entries()) {
        if (typeof def?.text !== 'string' || def.text.length < 10) {
          fail(`i18n/${locale}/${id}: definition ${i} is missing or too short`);
        }
      }
      for (const key of Object.keys(o.examples ?? {})) {
        const i = Number(key);
        if (!Number.isInteger(i) || i < 0 || i >= source.examples.length) {
          fail(
            `i18n/${locale}/${id}: example override "${key}" is out of range (English has ${source.examples.length})`,
          );
        }
      }
      if (o.origin && !source.origin) {
        warn(`i18n/${locale}/${id}: has an origin override but the English entry has no origin`);
      }
      translationCount += 1;
    }
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
  `content ok — ${entries.length} entries (${published} published) across ${files.length} countries, ` +
    `${translationCount} translated`,
);
