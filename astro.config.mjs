import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://YoonjaeH.github.io',
  integrations: [react(), tailwind()],
  output: 'static',
});
