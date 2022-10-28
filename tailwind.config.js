/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    screens: {
      'xxl': {'max': '1440px'},
      'xl': {'max': '1280px'},
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' },
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        main: '#212529',
        accent: '#8B7AA8',
        light: '#F5F5F5',
        dark: '#424242',
        back: '#E7E7E7',
      }
    },
    backgroundImage : {
      'boxes' : 'url("/src/img/boxes.svg")',
    },
  },
  plugins: [],
}