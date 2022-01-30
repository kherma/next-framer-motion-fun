module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgGray: {
          100: "#F1F5FF",
          200: "#F6F7FE",
        },
        bgBlue: {
          100: "#577FFB",
          200: "#698DFC",
          300: "#2c3140",
        },
        bgRed: {
          100: "#DB4676",
          200: "#F6729C",
        },
        bgViolet: {
          100: "#885FDD",
          200: "#A881F6",
          300: "#cf8dcb",
          400: "#372746",
          500: "#593e70",
        },
        bgGreen: {
          100: "#5CDB69",
          200: "#28ED3D",
        },
        bgBluelight: {
          100: "#30B6DB",
          200: "#258CA8",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
