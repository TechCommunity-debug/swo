import type { APIRoute } from 'astro';

/**
 * Both search shells are disallowed: they are client-rendered, carry no
 * indexable content of their own and would otherwise generate an unbounded
 * `?q=` crawl surface.
 */
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *
Allow: /
Disallow: /search/
Disallow: /es/search/

Sitemap: ${new URL('sitemap-index.xml', site).href}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
