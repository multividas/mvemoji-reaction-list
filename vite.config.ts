import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        html: resolve(__dirname, 'src/index.html'),
      },
      output: {
        dir: resolve(__dirname, 'dist')
      }
    }
  }
});
