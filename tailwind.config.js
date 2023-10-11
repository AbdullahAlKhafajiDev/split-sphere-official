/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': {'min': '300px', 'max': '480px'},
      'tablet': {'min': '481px', 'max': '768px'},
      'laptop': {'min': '769px', 'max': '1024px'},
      'desktop': '1025px'
    },
    extend: {
      fontFamily: {
        'Hind': ['Hind']
      }
    },
  },
  plugins: [],
}

