/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        main: '#212529',
        accent: '#8B7AA8',
        light: '#F5F5F5',
        dark: '#424242',
        back: '#E7E7E7',
        gray: '#999999',
      }
    },
  },
  plugins: [],
}