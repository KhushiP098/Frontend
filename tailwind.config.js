/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'xs': '400px',
      'sm': '500px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1250px',
      

    },
    extend: {},
  },
  plugins: [],
}

