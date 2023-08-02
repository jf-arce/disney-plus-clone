/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body': 'radial-gradient(#06070A,#1E222F)',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


