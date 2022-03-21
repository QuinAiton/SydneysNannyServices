module.exports = {
  mode: "jit",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: "#fef8e4",
      secondary: "white",
      tertiary: "pink-400",
      buttonPrimary: "black",
      buttonSecondary: "pink-400",
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
