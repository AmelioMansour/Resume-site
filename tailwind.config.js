module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        'e6e6e6': '#e6e6e6'
      },
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s forwards'
      }
    }
  },
  variants: {
    extend: {
      display: ['responsive']
    }
  },
  plugins: []
}
