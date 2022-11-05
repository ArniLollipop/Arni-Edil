/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#212529",
        accent: "#8B7AA8",
        accentLight: "#F2EEF9",
        light: "#F5F5F5",
        dark: "#424242",
        back: "#E7E7E7",
        gray: "#999999",
        pink: "#F2EEF9",
        blue: "#1437AD",
        blueText: "#5477E7",
        red: "#B73D25",
        aqua: "#E5F5FF",
        pink2: "#E358A6",
        green: "#679B00",
      },
      backgroundImage: {
        send: 'url("@/img/send.svg")',
        map: 'url("@/img/map.svg")',
        banner: 'linear-gradient(90.77deg, #FFE6E6 1.76%, #F7CCC8 92.9%)',
      },
    },
  },
  plugins: [],
};
