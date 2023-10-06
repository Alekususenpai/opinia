
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
      //   "img-spinner": "url('/src/assets/bg.jpg')",
      // },
    },
  },
  plugins: [],
}

