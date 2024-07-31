/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#70E0C5",
        primary_dark: "#00C493",
        primary_light: "#CDE8E4",
        secondary: "#FECD6C",
        accent: "#428A6F",
        text: "#1D111C",
        bgd: "#1D111C", 
      },
      fontFamily: {
        anltp: ["anltp", "sans-serif"],
        anltpB: ["anltp-bo", "sans-serif"],
        anltpI: ["anltp-it", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sl: "930px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

