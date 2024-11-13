import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    css: {
        transformer: 'lightningcss',
    },
    build: {
        outDir: './dist',
        minify: true,
        sourcemap: true,
        emptyOutDir: true,   
        lib: {
            entry: './src/index.js',
            formats: ['es'],
            fileName: (format) => `[name].js`
        }
    },
    server: {
        https: {
            key: fs.readFileSync(`./server.key`),
            cert: fs.readFileSync(`./server.crt`)
        }
    }
})