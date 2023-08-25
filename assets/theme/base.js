const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    body: {
      margin: '0',
    },
    '#__nuxt': {
      width: '100%',
      minHeight: '100%',
    },
    '#__layout': {
      width: '100%',
      height: '100vh',
    },
  })
})
