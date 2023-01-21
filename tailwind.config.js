/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        questrial: "Questrial",
        roboto: "Roboto",
        vivaldi: "Vivaldi",
      },
      colors: {
        primary: "#0b0f19",
        secondary: "#111827",
        accent: "#ff9900",
        "text-color": "#656c6f",
      },
      gridTemplateColumns: {
        "1fr": "repeat(auto-fit, minmax(180px, 1fr))",
        200: "repeat(auto-fit, minmax(200px, 1fr))",
        "2fr": "repeat(auto-fit, minmax(320px, 1fr))",
      },
      backgroundImage: {
        newsLetterBg:
          "linear-gradient(rgba(6, 7, 46, 0.832), rgba(6, 7, 46, 0.832)),url('/public/images/b10.jpg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".transition-a": {
          transition: "all .3s ease-in-out",
        },
        ".shadow-light": {
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
        },
        ".input-shadow": {
          boxShadow: "0 0 0 1000px #fff inset !important",
        },
        ".border-light": {
          border: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".border-top-light": {
          borderTop: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".text-shadow": {
          textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(function ({ addComponents }) {
      const newComponets = {
        ".form-control": {
          border: "1px solid rgb(174, 200, 206)",
          outline: "none",
          borderRadius: "0.5rem",
          fontFamily: "inherit",
          padding: "0.35rem 0.5rem",
          display: "block",
          fontSize: "1rem",
          width: "100%",
          "&:focus": {
            border: "1px solid rgb(83, 182, 247)",
          },
        },
      };
      addComponents(newComponets);
    }),
  ],
};
