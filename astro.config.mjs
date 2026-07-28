import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://horizonhvacinc.com',
  integrations: [
    sitemap({
      // Ad-only landing pages are noindex — keep them out of the sitemap too, so we're
      // not sending search engines a mixed signal.
      filter: (page) => !page.includes('/free-estimate'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
