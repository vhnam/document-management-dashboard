import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'darkMode' | 'presets' | 'content'> = {
  content: [
    './{app,src}/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: ['selector'],
  presets: [sharedConfig],
};

export default config;
