// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://www.77security.com',
  integrations: [
    starlight({
      title: '77 Security',
      social: {
        github: 'https://github.com/77security',
        // You can add 'x', 'linkedin', etc.
      },
      sidebar: [
        {
          label: 'AI Security Guides',
          autogenerate: { directory: 'ai-security' },
        },
        {
          label: 'Resources',
          items: [
            { label: 'Security Tools', slug: 'resources/tools' },
            { label: 'External Links', link: 'https://owasp.org' },
          ],
        },
      ],
    }),
  ],
});
