module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Brandon Grotesque', 'Helvetica', 'sans-serif'],
      serif: ['Crimson Text', 'Arial', 'serif'],
    },
    extend: {
      colors: {
        red: {
          lightest: '#FFEBF1',
          lighter: '#FD9BBA',
          light: '#FB0E59',
          DEFAULT: '#C32B3E',
          dark: '#A10235',
          darker: '#50011A',
        },
        paper: {
          light: '#FFF',
          DEFAULT: '#F8F8F8',
          dark: '#D6D6D6',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
