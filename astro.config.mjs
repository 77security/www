// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.77security.com',
  integrations: [
    starlight({
      title: '77 Security',
      // NEW SYNTAX: 'social' is now an array of objects
      social: [
        { 
          label: 'GitHub', 
          link: 'https://github.com/77security/', 
          icon: 'github' 
        },
      ],
      sidebar: [
        {
          label: 'AI Security Guides',
          autogenerate: { directory: 'ai-security' },
        },
        {
          label: 'Resources',
          items: [
            { label: 'Security Tools', slug: 'resources/tools' },
          ],
        },
      ],
    }),
    sitemap(),
  ],
});
