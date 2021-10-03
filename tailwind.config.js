module.exports = {
  // mode:'jit', // added jit future here
  purge: [
    '.public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
