/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // customs-colors
      colors: {
        "color-name": "#color-hex",
      },
    },
  },
  plugins: [],
};
