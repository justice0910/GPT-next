/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        menuColors: {
          '50': '#f6f6f7',
          '100': '#e2e4e5',
          '200': '#c5c8ca',
          '300': '#a0a3a8',
          '400': '#7c8085',
          '500': '#62656a',
          '600': '#4d5054',
          '700': '#404245',
          '800': '#35383a',
          '900': '#2f3032',
          '950': '#202123',
        }
      },
    },
  },
  plugins: [],
}
