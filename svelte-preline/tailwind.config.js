const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,svelte}"
  ],
  darkMode: 'selector',
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,  
        slate: colors.slate,
        blue: colors.blue,    
        neutral: colors.neutral,
        primary: '#94FF16'
    }
  },
  plugins: [
          require('preline/plugin')
  ]
}

