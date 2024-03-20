/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'dm': ["DM Sans, sans-serif"]
      },
      maxWidth:{
        'container': "1604px"
      },
      colors: {
        'primary': '#262626',
        'scoend': '#979797',
        'third': '#F5F5F5',
        'fourth': '#767676',
      },
      lineHeight: {
        'praimary': '23px',
      }
    },
  },
  plugins: [],
}
