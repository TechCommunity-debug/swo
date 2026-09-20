// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://slangwordsonline.com',
  trailingSlash: 'always',
  integrations: [
    // /search/ is a client-rendered shell with no indexable content of its own.
    sitemap({ filter: (page) => !page.includes('/search/') }),
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
