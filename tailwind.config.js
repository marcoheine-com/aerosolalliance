module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      screens: {
        desktop: '1200px',
      },
      colors: {
        yellow: '#FFFDAF',
        white: '#fff',
        purple: '#D783FF',
        lightblue: '#D3E7FA',
        darkblue: '#272F66',
        red: '#E84E37',
        grey: '#EFEFEF',
        green: '#00948B',
        darkGrey: 'rgb(39, 47, 102, 0.3)',
        header: '#c8aa82',
      },
      fontSize: {
        headline: ['2.5rem', { lineHeight: '1.3' }],
      },
      fontFamily: {
        suisseIntlMono: ['SuisseIntlMono'],
        suisseIntlBold: ['SuisseIntlBold', 'sans-serif'],
        suisseIntlSemiBold: ['SuisseIntlSemiBold', 'sans-serif'],
        suisseIntlRegular: ['SuisseIntlRegular', 'sans-serif'],
        'UvasBlack-Black': ['UvasBlack-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
