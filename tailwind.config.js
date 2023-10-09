/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': {'min': '250px', 'max': '469px'},
      'tablet': {'min': '470px', 'max': '1023px'},
      'desktop': '1024px'
    },
    extend: {},
  },
  plugins: [],
}

