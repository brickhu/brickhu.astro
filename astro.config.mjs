import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

export default defineConfig({
    integrations: [react(), mdx(), tailwind()],
    markdown: {
      drafts: false,
    },
    redirects: {
      '/blogs': '/blogs/1'
    }
  }
);