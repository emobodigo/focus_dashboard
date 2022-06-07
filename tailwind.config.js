const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'custom-dark': '#242426',
        'custom-white': '#FDFDFD'
      }
    },

  },
  plugins: [],
}
