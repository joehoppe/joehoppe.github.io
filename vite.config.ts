/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { coverageConfigDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      exclude: [...coverageConfigDefaults.exclude, 'src/main.tsx', 'src/setupTests.ts'],
    },
  },
});
