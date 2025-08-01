import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~scss': path.resolve(__dirname, './src/assets/scss')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~scss/base/vars" as *;`
      }
    }
  }
});
