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
    },
    fontFamily: {
      heading: ['Oswald', 'serif'],
      body: ['Lora', 'serif'],
      italic: ['LoraItalic', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
