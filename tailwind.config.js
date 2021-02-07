const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        orange: colors.orange,
        teal: colors.teal,
        lime: colors.lime,
        amber: colors.amber,
        yellow: colors.yellow,
        emerald: colors.emerald,
      },
      fontFamily: {
        sans: ["Inter", "Source Sans Pro", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        DEFAULT:
          "background-color, border-color, border-width, color, fill, stroke, opacity, box-shadow, transform",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
      borderWidth: ["hover", "focus"],
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [],
};
