/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  },
  esbuild: {
    target: 'esnext', 
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss, 
        autoprefixer
      ],
    },
  },
  resolve: {
    alias: {
      '@shadcn/ui': path.resolve(__dirname, 'node_modules/@shadcn/ui'),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080', 
    },
  },
})
