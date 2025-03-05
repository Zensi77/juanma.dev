// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://zensi77.github.io',
  base: 'juanma.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  build: {
    assetsPrefix: 'https://zensi77.github.io/juanma.dev/',
  },
});
