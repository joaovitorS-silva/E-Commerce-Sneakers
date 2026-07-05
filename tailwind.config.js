/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        loja: {
           fundo: "#080808",
           card: "#18181c",
           destaque:"#dfe31d",
           texto: "#ffffff",
           navtexto: "#d4d4d8"
        },
      },
      fontFamily:{
        loja: ['"Neue Haas Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
