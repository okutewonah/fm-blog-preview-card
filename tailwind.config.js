/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      yellow: "hsl(47, 88%, 63%)",
      grey: "hsl(0, 0%, 50%)",
      black: "hsl(0, 0, 7%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        Figtree: ["Figtree", "sans-serif"],
      },
      boxShadow: {
        "3xl": "16px 10px 0px 0px hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
