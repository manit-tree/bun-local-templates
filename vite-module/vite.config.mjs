import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
    // plugins: [cssInjectedByJsPlugin()],
    css: {
        transformer: 'lightningcss',
    },
    build: {
        outDir: './dist/dog',
        minify: false,
        sourcemap: false,
        emptyOutDir: true,   
        lib: {
            entry: './modules/dog/index.ts',
            name:'$',
            formats: ['iife','cjs','es'],
            fileName: (format) => `[name].[format].js`
        }
    },
    server: {
        https: {
            key: fs.readFileSync(`./server.key`),
            cert: fs.readFileSync(`./server.crt`)
        }
    }
})