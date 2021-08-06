module.exports = {
  mode:'jit',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge:[
    './**/*.{liquid,html,js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    namedGroups: ['group-1', 'group-2', 'group-3'],
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('./tailwind/plugins/nestedGroup'),
    require('./tailwind/plugins/typography'),
  ],
}
