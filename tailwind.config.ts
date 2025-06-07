import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        wine: "#702632",
        white: "#FFFFFA",
        black: "#080705",
        red: "#912F40",
        grey: "#40434E",
      },
      // fontFamily: {
      //   title: ["Bebas Neue", "sans-serif"],
      //   body: ["Switzer-Regular", "Open Sans", "sans-serif"],
      //   quote: ["Special Elite", "monospace"],
      //   heading: ["Besley", "serif"],
      // },
      fontSize: {
        huge: "3.5rem",
        big: "2.5rem",
        medium: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
