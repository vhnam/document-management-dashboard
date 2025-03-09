import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'darkMode' | 'presets' | 'content'> = {
  content: ['./src/**/*.tsx'],
  darkMode: ['selector'],
  presets: [sharedConfig],
};

export default config;
