module.exports = {
  theme: {
    extend: {
      padding: {
        '30p': '30%',
        '20p': '20%',
      },
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
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-20px)' },
          '60%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s forwards',
        bounce: 'bounce 2s infinite'
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
