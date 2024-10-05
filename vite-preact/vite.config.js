import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.IS_PREACT": JSON.stringify("true"),
  },
  plugins: [
    cssInjectedByJsPlugin(),
    preact()
  ],
  css: {
        transformer: 'lightningcss',
    },
    build: {
      outDir: './dist',
      minify: false,
      sourcemap: false,
      emptyOutDir: true,
      rollupOptions: {
          output: {
              entryFileNames: `assets/[name].js`,
              chunkFileNames: `assets/[name].js`,
              assetFileNames: `assets/[name].[ext]`
          }
      }    
    }
})
