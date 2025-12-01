/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        osans: ['"Open Sans"', 'sans-serif'],
        ytl: ['Yellowtail', 'cursive'],
      },
      colors: {
        primary: '#274c5b',
        mint: '#7eb693',
        yellow: '#efd372',
        grey: '#d4d4d4',
        lgGrey: '#f9f8f8',
        lgMint: '#eff6f1',
        darkGrey: '#525c60',
        bgGrey: '#fafafa'
      },
      transitionProperty: {
        left: 'left',
      },
    },
  },
  plugins: [],
}

