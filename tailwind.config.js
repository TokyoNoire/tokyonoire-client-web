/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src//Components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: "#FFFFF",
      black: "#121212",
      darkGrey: "#373535"
    },
    fontFamily: {
      title: ['Britannic', 'serif'],
      heading: ['Oswald', 'serif'],
      body1: ['npLora', 'serif'],
      body2: ['Noir', 'serif'],
      italic: ['LoraItalic', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'inset1': ' -30px -40px 60px #242222, 40px 20px 50px #2a2828',
      }
    },
  },
  plugins: [],
}
