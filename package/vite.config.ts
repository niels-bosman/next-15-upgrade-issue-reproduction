import react from '@vitejs/plugin-react';
import * as path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// @ts-ignore
import { name } from './package.json';

export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
