import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  // Default to relative paths so the build works at ANY sub-path without
  // needing the host to configure PUBLIC_BASE_PATH. When PUBLIC_BASE_PATH
  // IS set (e.g. CI passes `/my-slug/`), absolute paths are used instead
  // — that's better for SEO and for deep-link refreshes on hosts with
  // SPA fallback.
  base: process.env.PUBLIC_BASE_PATH || './',
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
