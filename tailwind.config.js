const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens:{
      xxs: '320px',
      xs: '414px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend:{
      ringWidth: ['hover', 'focus'],
    }
  },
  plugins: [],
}
