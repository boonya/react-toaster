import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  clean: true,
  dts: true,
  minify: false,
  sourcemap: true,
  splitting: false,
});
