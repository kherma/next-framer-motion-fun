module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        },
        bgRed: {
          100: "#DB4676",
          200: "#F6729C",
        },
        bgViolet: {
          100: "#885FDD",
          200: "#A881F6",
        },
      },
    },
  },
  plugins: [],
};
