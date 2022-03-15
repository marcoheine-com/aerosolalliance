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
        green: '#00948B',
        darkGrey: 'rgb(39, 47, 102, 0.3)',
      },
      fontFamily: {
        suisseIntlMono: ['SuisseIntlMono'],
        suisseIntlBold: ['SuisseIntlBold', 'sans-serif'],
        suisseIntlSemiBold: ['SuisseIntlSemiBold', 'sans-serif'],
        suisseIntlRegular: ['SuisseIntlRegular', 'sans-serif'],
        'UvasBlack-Black': ['UvasBlack-Black', 'sans-serif'],
      },
      animation: {
        slideInRight: 'slideInRight 0.2s linear',
        slideOutRight: 'slideOutRight 0.2s linear',
      },
      keyframes: {
        slideInRight: {
          '0%': {
            transform: 'translateX(300px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideOutRight: {
          '0%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
          '100%': {
            transform: 'translateX(300px)',
            opacity: 0.5,
          },
        },
      },
    },
  },
  plugins: [],
}
