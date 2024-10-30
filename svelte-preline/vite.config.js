import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from 'tailwindcss';
import fs from 'fs';

export default defineConfig({
    plugins: [
      svelte()
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