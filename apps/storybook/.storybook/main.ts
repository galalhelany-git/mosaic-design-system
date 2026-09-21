import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const fromWorkspaceRoot = (path: string): string =>
  fileURLToPath(new URL(`../../../${path}`, import.meta.url));

const config: StorybookConfig = {
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-vitest'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx)',
    '../../../packages/react/src/**/*.stories.@(ts|tsx)',
  ],
  viteFinal: async (baseConfig) =>
    mergeConfig(baseConfig, {
      resolve: {
        alias: [
          {
            find: '@mosaic-ds/react/styles.css',
            replacement: fromWorkspaceRoot('packages/react/src/styles/index.css'),
          },
          {
            find: '@mosaic-ds/react',
            replacement: fromWorkspaceRoot('packages/react/src/index.ts'),
          },
          {
            find: '@mosaic-ds/tokens/tokens.css',
            replacement: fromWorkspaceRoot('packages/tokens/generated/tokens.css'),
          },
          {
            find: '@mosaic-ds/tokens',
            replacement: fromWorkspaceRoot('packages/tokens/src/index.ts'),
          },
        ],
      },
    }),
};

export default config;
