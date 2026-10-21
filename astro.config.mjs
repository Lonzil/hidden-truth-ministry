// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // NOTE: This must be a valid URL for the build to succeed. 
  // Before deploying to production, change this to your real domain (e.g., 'https://hiddenstrueministry.org')
  site: 'https://example.com', 
  integrations: [sitemap()]
});