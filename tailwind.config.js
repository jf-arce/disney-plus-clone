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
        'bg-inicio': 'url(/public/assets/img/disney-inicio.jpeg)',
        'bg-mobile':'url(/public/assets/img/disney-hero-mobile.jpeg)'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


