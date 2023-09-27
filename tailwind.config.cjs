/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.jpg')",
      // },
    },
  },
  plugins: [],
}