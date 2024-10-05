import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    build: {
        lib: {
            entry: './app.js',
            name: '_$$$',
            formats: ['iife'],
            fileName: () => 'app.bundle.js'
        },
        minify: false,
        sourcemap: false,
        emptyOutDir: false
    }
})