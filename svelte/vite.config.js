import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
        outDir: './dist',
        minify: false,
        sourcemap: false,
        emptyOutDir: true,   

        lib: {
            entry: './src/App.svelte',
            name:'App',
            formats: ['iife','esm'],
            fileName: (format) => `[name].[format].js`
        }
    },
})
