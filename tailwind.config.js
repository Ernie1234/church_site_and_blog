/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      backgroundColor: {
        // mainColor: "#FBF8F9",
        // secondaryColor: "#F0F0F0",
        blackOverlay: "rgba(0, 0 ,0 ,0.95)",
      },
      colors: {
        bgBlack: {
          100: "#1e1e1eca",
          900: "#1e1e1e",
        },
        csBrown: {
          100: "#BA765F",
          200: "#BA765Fcc",
        },
      },
    },
  },
  plugins: [],
};
