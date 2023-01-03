/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'bg1': "url('/background1.jpg')"
      },
      fontFamily : {
        'Amaranth': ['"Amaranth"', 'sans-serif']
      }
    },
  },
  plugins: [],
}