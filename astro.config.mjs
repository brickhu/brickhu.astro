import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(),tailwind()]
} // 你的配置项都在这里
// https://docs.astro.build/zh-cn/reference/configuration-reference/
);