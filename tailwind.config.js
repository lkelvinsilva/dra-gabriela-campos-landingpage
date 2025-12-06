
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#B48484',
        secondary: '#2E2E2E',
        background: '#F7F3F1',
        accent: '#E9DCC9',
      },
      fontFamily: {
        serif: ['Cormorant', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

