import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    css: {
        transformer: 'lightningcss',
    },
    build: {
        outDir: './dist/teriyaki',
        minify: true,
        sourcemap: false,
        emptyOutDir: false,

        lib: {
            entry: './modules/teriyaki/index.js',
            name:'$',
            formats: ['iife','umd','es'],
            fileName: (format) => `[name].[format].min.js`
        }
    }
})