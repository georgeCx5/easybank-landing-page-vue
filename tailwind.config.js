/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ### Primary
        'neo-dark-blue': 'hsl(233, 26%, 24%)',
        'neo-lime-green': 'hsl(136, 65%, 51%)',
        'neo-bright-cyan': 'hsl(192, 70%, 51%)',

        // ### Neutral
        'neo-grayish-blue': 'hsl(233, 8%, 62%)',
        'neo-light-grayish-blue': 'hsl(220, 16%, 96%)',
        'neo-very-light-gray': 'hsl(0, 0%, 98%)',
        'neo-white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'public': 'Public Sans',
      },
      screens: {
        'DT': '1440px',
      }
    },
  },
  plugins: [],
}