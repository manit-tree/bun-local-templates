# Template Vite + Lit + Tailwind

Starter template for custom element development using Vite + Lit + Tailwind

### src/index.ts

```ts
import {LitElement, unsafeCSS, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './style.css?inline';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    version = '1.0.0';

    render() {
        return html`
            <p><strong>Lit Component</strong> v ${this.version}</p>
        `;
    }

    static get styles() {
        return unsafeCSS(styles);
    }
}
```

### src/style.css

```css
p {
    strong {
        @apply text-red-500;
    }
}
```

### package.json

```json
{
  "name": "86",
  "description": "Starting template for develop Lit Component",
  "version": "1.0.0",
  "main": "./src/index.ts",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "author": "Mr.Manit Treeprapankit",
  "license": "MIT",
  "dependencies": {
    "lit": "^3.2.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.14",
    "typescript": "~5.6.2",
    "vite": "^5.4.10"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

### vite.config.js

```js
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
    plugins: [
       tailwindcss()
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
        minify: 'esbuild',
        sourcemap: false,
        emptyOutDir: true,   
        lib: {
            entry: './src/index.ts',
            name:'___',
            formats: ['es','iife'],
            fileName: (format) => `[name].[format].js`
        },
        esbuild: {
            minify: true
        }
    }
})
```

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content:[
    "./index.html",
    "./src/**/*.{html,js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
