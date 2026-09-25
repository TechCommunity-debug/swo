// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://slangwordsonline.com',
  trailingSlash: 'always',

  /**
   * English is the root locale: its pages live at `/`, not `/en/`. Every other
   * edition is prefixed (`/es/`, `/pt/`, `/ja/`…). Country and topic slugs are
   * *not* translated, so the same entry is `/mexican-slang/people/guey/` and
   * `/es/mexican-slang/people/guey/` — which is what lets the editions be
   * paired with hreflang without a slug translation table.
   *
   * Keep this list in step with `src/data/locales.ts`, which is the source of
   * truth for everything else (prefixes, endonyms, og:locale, date formats).
   */
  i18n: {
    locales: ['en', 'es', 'pt', 'fr', 'de', 'it', 'ru', 'ja', 'ko'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      // The search shells are client-rendered and have no indexable content.
      //
      // Note the sitemap's own `i18n` option is deliberately *not* used: it
      // assumes every page exists in every locale and would emit alternates
      // pointing at URLs that 404, since a page only exists in a language once
      // its content has actually been translated. The per-page `<link
      // rel="alternate">` tags in Layout.astro carry the annotations instead,
      // which Google treats as equivalent.
      filter: (page) => !/\/([a-z]{2}\/)?search\/$/.test(page),
    }),
  ],

  fonts: [
    {
      // DESIGN.md specifies the proprietary "Pin Sans"; its own
      // "Note on Font Substitutes" prescribes Inter as the substitute.
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
