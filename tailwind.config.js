/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: "#0a192f",
        text: "#8892b0",
        lightText: "#a8b2d1",
        lightest: "#ccd6f6",
        accent: "#64ffda",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sourceSans: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};