/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#0052E6",
        secondary: "#ffffff",
        pink: "#FF494E",
        yellow: "#FAD901",
        grey: "#d2d2d2",
      },
    },
  },
  plugins: [],
}
