const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose,
      },
    },
  },
  variants: {},
  plugins: [],
}
