import tokens from '@repo/tokens-config/tokens';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../apps/**/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../apps/**/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: {
          light: {
            '01': tokens.Text.Light['01'].value,
            '02': tokens.Text.Light['02'].value,
            '03': tokens.Text.Light['03'].value,
          },
          dark: {
            '01': tokens.Text.Dark['01'].value,
            '02': tokens.Text.Dark['02'].value,
            '03': tokens.Text.Dark['03'].value,
          },
        },
        default: {
          white: tokens.Default.White.value,
          brand: tokens.Default.Brand.value,
        },
        accent: {
          red: tokens.Accent.Red.value,
          blue: tokens.Accent.Blue.value,
          green: tokens.Accent.Green.value,
          pink: tokens.Accent.Pink.value,
          orange: tokens.Accent.Orange.value,
        },
      },
      fontFamily: {
        poppins: [tokens.fontFamilies.poppins.value, 'sans-serif'],
      },
      fontSize: {
        10: tokens.fontSize['0'].value,
        12: tokens.fontSize['1'].value,
        14: tokens.fontSize['2'].value,
        15: tokens.fontSize['3'].value,
        16: tokens.fontSize['4'].value,
        18: tokens.fontSize['5'].value,
        20: tokens.fontSize['6'].value,
        24: tokens.fontSize['7'].value,
        46: tokens.fontSize['8'].value,
      },
      lineHeight: {
        56: `${tokens.lineHeights['0'].value}px`,
        36: `${tokens.lineHeights['1'].value}px`,
        26: `${tokens.lineHeights['2'].value}px`,
        20: `${tokens.lineHeights['3'].value}px`,
        24: `${tokens.lineHeights['4'].value}px`,
        16: `${tokens.lineHeights['5'].value}px`,
        14: `${tokens.lineHeights['6'].value}px`,
      },
      fontWeight: {
        bold: tokens.fontWeights['poppins-0'].value,
        semibold: tokens.fontWeights['poppins-1'].value,
        medium: tokens.fontWeights['poppins-2'].value,
        regular: tokens.fontWeights['poppins-3'].value,
      },
      boxShadow: {
        '01': tokens['shadow 1'].value,
        '02': tokens['shadow 2'].value,
        '03': tokens['Shadow 3'].value,
        dark: tokens['Shadow Dark'].value,
      },
    },
  },
  plugins: [],
};

export default config;
