/** @type {import('tailwindcss').Config} */
const tailwindcssForms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#B3AEE3',
          400: '#847CC6',
          600: '#5A4AD1',
        },
        gray: {
          100: '#e5eaf5',
          200: '#BDC5D6',
          400: '#9BA0AB',
          600: '#40434A',
          800: '#808896',
        },
      },
    },
  },
  plugins: [tailwindcssForms],
};
