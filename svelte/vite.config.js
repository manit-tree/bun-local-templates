import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    svelte()
  ],
  css: {
    transformer: 'lightningcss',
  },
  build: {
    outDir: './dist',
    minify: true,
    sourcemap: false,
    emptyOutDir: true,   
  }
})
