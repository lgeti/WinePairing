/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': {
          100: '#FF6363',
          200: '#C11A1A',
          300: '#E53D3D',
          400: '#FF8787',
          500: '#FE464B',
        },
        'secondary': {
          100: '#E2E2D5',
          200: '#000000',
          300: '#6C6C6C',
          400: '#A5A59A',
        },
      },
    },
  },
  plugins: [],
}

