import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import fs from 'fs';

export default defineConfig({
    plugins: [
    ],
    css: {
        postcss: {
            plugins: [
                tailwindcss()
            ]
        }
    },
    build: {
        outDir: './dist',
        minify: false,
        sourcemap: false,
        emptyOutDir: true
    },
    server: {
        https: {
            key: fs.readFileSync(`./server.key`),
            cert: fs.readFileSync(`./server.crt`)
        }
    }
})