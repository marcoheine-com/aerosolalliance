module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        yellow: '#FFFDAF',
        white: '#fff',
        purple: '#D783FF',
        lightblue: '#D3E7FA',
        darkblue: '#272F66',
        red: '#E84E37',
        grey: '#EFEFEF',
        darkGrey: 'rgb(39, 47, 102, 0.3)',
      },
    },
  },
  plugins: [],
}
