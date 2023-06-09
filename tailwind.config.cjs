/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/background.svg')",
      },
    },
    animation: {
      tilt: 'tilt 10s infinite linear',
      dropdown: 'rotateMenu 400ms ease-in-out forwards',
    },
    keyframes: {
      tilt: {
        '0%, 50%, 100%': {
          transform: 'rotate(0deg)',
        },
        '25%': {
          transform: 'rotate(2deg)',
        },
        '75%': {
          transform: 'rotate(-2deg)',
        },
      },
      rotateMenu: {
        '0%': {
            transform: 'rotateX(-90deg)'
        },
        '70%': {
            transform: 'rotateX(20deg)' 
        },
        '100%': {
            transform: 'rotateX(0deg) '
        },
      },
    },
  },
  plugins: [],
};