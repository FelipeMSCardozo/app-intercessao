import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          effects: ['canvas-confetti']
        }
      }
    },
    chunkSizeWarningLimit: 700
  },
  server: {
    port: 3000,
    host: true
  }
});
