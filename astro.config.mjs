// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.77security.com',
  integrations: [
    starlight({
      title: '77 Security',
      description: '77 Security is an AI security research firm specializing in LLM red teaming, prompt injection defense, adversarial ML, and securing AI-powered applications.',
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://www.77security.com/77security.png' },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#0f172a' },
        },
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3109696245511304', // Replace with your ID
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                name: '77 Security',
                url: 'https://www.77security.com',
                logo: 'https://www.77security.com/favicon.svg',
                description: 'AI security research firm specializing in LLM red teaming, prompt injection, adversarial ML, and securing AI-powered applications.',
                sameAs: ['https://github.com/77security/'],
              },
              {
                '@type': 'WebSite',
                name: '77 Security',
                url: 'https://www.77security.com',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://www.77security.com/?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ],
          }),
        },
      ],
      // NEW SYNTAX: 'social' is now an array of objects
      social: [
        { 
          label: 'GitHub', 
          href: 'https://github.com/77security/', 
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
        { label: 'Privacy Policy', slug: 'privacy' },
      ],
    }),
    sitemap(),
  ],
});
