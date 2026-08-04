import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://ryanwynn.dev',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
