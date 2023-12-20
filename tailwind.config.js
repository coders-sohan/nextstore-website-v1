import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // custom colors
      colors: {
        primary: "#2caeba",
      },
      // custom font
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
