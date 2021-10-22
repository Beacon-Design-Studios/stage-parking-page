module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Brandon Grotesque', 'Lato', 'Helvetica', 'sans-serif'],
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
        },
        orange: {
          lighter: '#eb9e98',
          DEFAULT: '#db4d43',
          darker: '#9a261d'
        },
        yellow: {
          DEFAULT: '#fbcc4b',
        },
        black: {
          dark: '#000',
          DEFAULT: '#212224',
          lighter: '#585b5f'
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      ringWidth: ['active'],
      ringColor: ['active'],
      textColor: ['visited'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
