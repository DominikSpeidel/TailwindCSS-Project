/** @type {import('tailwindcss').Config} */
const { withUt } = require("uploadthing/tw");

module.exports = withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Chilanka"],
      },
    },
  },
  plugins: [],
});
