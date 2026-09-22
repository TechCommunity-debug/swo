# Slang Words Online

A static slang dictionary built with Astro 7 and Tailwind 4. Sixteen countries,
eight languages, ~860 hand-written entries.

## Commands

| Command            | Action                                                  |
| :----------------- | :------------------------------------------------------ |
| `npm install`      | Install dependencies                                     |
| `npm run dev`      | Dev server at `localhost:4321`                           |
| `npm run validate` | Cross-file content checks (runs automatically on build)  |
| `npm run build`    | Validate, then build to `./dist/`                        |
| `npm run preview`  | Preview the production build                             |
| `npx astro check`  | Typecheck `.astro` and `.ts` files                       |

## URL structure

Country → topic → term, with the language as an optional prefix:

```
/                                     home (English, the root locale)
/mexican-slang/                       country hub
/mexican-slang/people/                country × topic
/mexican-slang/people/guey/           term
/browse/  /about/  /search/

/es/                                  the same tree, explained in Spanish
/es/mexican-slang/people/guey/
```

Three rules hold this together:

1. **Country is the primary taxonomy.** Not language — Mexican and peninsular
   Spanish share a grammar and almost none of their informal vocabulary. There is
   no standalone topic section: `/people/` is not a page, because "slang for
   people" with no country attached is not a search anyone makes. `Mexican slang
   for people` is, which is exactly what `/mexican-slang/people/` is titled.
2. **One term, one URL.** An entry may be filed under several topics but its
   address is built from `categories[0]`, its *primary* topic. Secondary topic
   pages list it and link to that one canonical URL — reordering `categories`
   moves a live URL, so it needs a redirect like any other rename.
3. **The `-slang` suffix lives only in `countries.json.urlSlug`.** Never build a
   path by concatenating onto a country id; the first section that isn't a
   country (`internet-slang`) would break every link. All paths come from
   `src/lib/urls.ts`.

## Languages

English is the root locale (`/`), Spanish is prefixed (`/es/`). Adding a locale
means adding it to `src/data/locales.ts`, a dictionary in `src/i18n/ui.ts`, and
content files under `src/data/i18n/<locale>/`.

**A page exists in a locale only where its content is genuinely translated.**
There is no fallback to English. A `/es/` page carrying English definitions would
be a near-duplicate of its English original, and pairing two substantially
identical pages with hreflang is the case Google's canonicalization guidance
tells you not to create. So an untranslated entry has no Spanish page, no
hreflang annotation and no sitemap row; each localized page canonicalizes to
itself, and `alternatesFor()` in `src/lib/site.ts` emits `rel="alternate"` links
only between pages that both exist, plus `x-default` pointing at English.

Spanish currently covers every entry. Dropping
`src/data/i18n/es/entries/<country>.json` into place is all it takes to add
another country: the pages, the alternates and the internal links appear on the
next build.

## Non-Latin scripts

An entry whose `term` is not in Latin script must carry a `romanization`
(`ヤバい` → `yabai`). The build fails otherwise. It is load-bearing rather than
decorative: it drives the A–Z bucket, the sort order, the search index and the
page title, because nobody searches for a word in a script they cannot type. Both
forms are shown wherever the term appears.

## Layout

```
src/
├── data/
│   ├── countries.json          country metadata (English)
│   ├── locales.ts              locale table; English has an empty path prefix
│   ├── taxonomy.ts             categories, registers, usage warnings (+ es)
│   ├── entries/<country>.json  the entries themselves
│   └── i18n/es/                Spanish country data and entry overrides
├── i18n/ui.ts                  every chrome string, in every locale
├── lib/
│   ├── urls.ts                 the only place paths are constructed
│   ├── localize.ts             overlays translations; decides what exists where
│   ├── site.ts                 the site graph and the hreflang builder
│   ├── routes.ts               getStaticPaths bodies, one per route level
│   ├── seo.ts  schema.ts       titles, descriptions, JSON-LD
│   └── search-index.ts         the per-locale client search index
├── components/pages/           the page bodies, shared by both locales
└── pages/                      thin route files: en at the root, es under /es/
```

Route files are deliberately two lines of frontmatter. Everything a page needs is
computed once per route file in `src/lib/routes.ts` and handed over as props —
the page bodies never call `getCollection()`, which is what keeps the build from
degrading into one full-collection scan per page.

Design tokens come from `DESIGN.md` and live in `src/styles/global.css`.
