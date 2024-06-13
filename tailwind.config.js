/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: '#D8EFD3',
        sec: "#95D2B3",
        accent: "#55AD9B",
      },
      fontFamily: {
        body: ['Montserrat']
      }
    },
  },
  plugins: [],
}

