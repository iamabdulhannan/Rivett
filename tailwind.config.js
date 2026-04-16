/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          light: '#132240',
        },
        brass: {
          DEFAULT: '#c8a45c',
          light: '#d4b76e',
        },
        denim: '#264070',
        steel: '#8a9bb5',
        'off-white': '#f5f5f0',
      },
      fontFamily: {
        heading: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
        accent: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
