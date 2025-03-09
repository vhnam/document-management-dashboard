import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts', 'postcss.config.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
});
