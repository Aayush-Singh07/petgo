/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfb',
          100: '#ccf0eb',
          200: '#a0e9e1',
          300: '#5dd9cd',
          400: '#2fc9bd',
          500: '#18a697',
          600: '#0d8a7d',
          700: '#086d65',
          800: '#055349',
          900: '#034139',
        },
        'petgo-teal': '#18a697',
        'petgo-dark': '#2c3e50',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-lg': '2.5rem',
        'section-title': '2rem',
      },
    },
  },
  plugins: [],
};
