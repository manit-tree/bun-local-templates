/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,svelte}"
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [],
}

