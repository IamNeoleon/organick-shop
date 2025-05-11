/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',            // ваш корневой HTML
    './src/**/*.{ts,tsx,js,jsx}' // все компоненты в src
  ],
  theme: {
    container: {
      center: false,
      padding: '15px',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',             // своя ширина контейнера на xl
        '2xl': '1430px',
      },
    },
    extend: {
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

