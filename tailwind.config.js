/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'win95-gray': '#C0C0C0',
        'win95-darkgray': '#808080',
        'win95-blue': '#000080',
        'win95-lightblue': '#0000FF',
      },
      fontFamily: {
        'retro': ['"Courier New"', 'Courier', 'monospace'],
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        'win95-inset': 'inset -1px -1px 0px 0px #000000, inset 1px 1px 0px 0px #ffffff, inset -2px -2px 0px 0px #808080, inset 2px 2px 0px 0px #dfdfdf',
        'win95-outset': 'inset -1px -1px 0px 0px #000000, inset 1px 1px 0px 0px #ffffff, inset -2px -2px 0px 0px #808080, inset 2px 2px 0px 0px #dfdfdf',
        'win95-raised': '1px 1px 0px 0px #ffffff, 2px 2px 0px 0px #808080, -1px -1px 0px 0px #808080',
        'win95-sunken': 'inset 1px 1px 0px 0px #000000, inset 2px 2px 0px 0px #808080',
      },
    },
  },
  plugins: [],
}
