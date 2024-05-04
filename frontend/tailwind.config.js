/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0B0C10',
        turquoise: '#66FCF1',
        slate: '#45A29E',
        lightGrey: '#C5C6C7',
      }
    },
  },
  plugins: [],
}
