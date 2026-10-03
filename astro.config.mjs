import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import remarkBlocks, { rehypeTableWrap } from './src/lib/remark-blocks.mjs';
import { SITE } from './src/lib/site.mjs';

export default defineConfig({
  site: SITE.origin,
  base: SITE.base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [react(), sitemap()],
  markdown: {
    remarkPlugins: [remarkDirective, [remarkBlocks, { base: SITE.base }]],
    rehypePlugins: [rehypeTableWrap],
  },
});
