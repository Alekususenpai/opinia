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
    extend: {
      'btn': {
        background: 'none',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        textAlign: 'center',
        transition: 'background-color 0.2s ease-in-out',
        padding: '12px 24px',
        borderRadius: '10px',
        minWidth: '160px',
        fontSize: '14px',
      },
    },
  },
    plugins: [],
}