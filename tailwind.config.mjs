/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE9F00",
        text: "#1A1D26",
        rating: "#FECE00",
        error: "#FF4244",
        border: "#EBECEF",
      },
    },
    screens: {
      sm: "576px",
      md: "760px",
      lg: "1440px",
    },

    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "760px",
        lg: "1200px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
