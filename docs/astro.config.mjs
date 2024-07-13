import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://coresworks.github.io',
  base: 'node-fs-cli',

  integrations: [
    starlight({
      title: 'fs',
      favicon: '/node.png',
      social: {
        github: 'https://github.com/CoresWorks/node-fs-cli',
      },
      sidebar: [
        {
          label: 'CLI',
          autogenerate: { directory: 'cli' },
        },
      ],
    }),
  ],
});
