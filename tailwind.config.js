import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // custom colors
      colors: {
        // custom main colors
        primary: "#3185fc",
        secondary: "#eb3b5a",
        tertiary: "#f48c06",
        // custom extra colors
        success: "#06d6a0",
        error: "#d00000",
        warning: "#ffd166",
        info: "#4cc9f0",
        // custom gray colors
        white: "#ffffff",
        gray: {
          special: "#f5f5f7",
          dark: "#5d6167",
          medium: "#dddbf1",
          light: "#f8f8ff",
        },
        // custom black colors
        black: "#030811",
        dark: {
          DEFAULT: "#070f22",
          special: "#102e4a",
          muted: "#353941",
        },
      },
      // custom font
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
      },
    },
  },
  plugins: [],
});
