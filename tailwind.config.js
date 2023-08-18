/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      colors: {
        bgBlack: {
          100: "#1e1e1eca",
          900: "#1e1e1e",
        },
        csBrown: {
          100: "#BA765F",
          200: "#BA765F",
        },
      },
    },
  },
  plugins: [],
};
