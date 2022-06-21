module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0B0C0F',
        'secondary-dark': '#0E0F13',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
