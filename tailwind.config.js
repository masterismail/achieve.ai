/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightseagreen: {
          100: "#47beb9",
          200: "#45beb9",
          300: "rgba(71, 190, 185, 0.08)",
        },
        gray: {
          100: "#f9feff",
          200: "#f8fcfb",
        },
        midnightblue: "#160647",
        slategray: {
          100: "#76838f",
          200: "rgba(66, 133, 156, 0.12)",
        },
        lightcyan: "#def7f0",
        aliceblue: "#eef2f7",
        mediumturquoise: "#3fc9c3",
        darkgray: "#99a8a8",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "9980xl": "9999px",
        "17xl": "36px",
        "81xl": "100px",
        lg: "18px",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      sm: "14px",
      "2xs": "11px",
      xs: "12px",
      lgi: "19px",
      smi: "13px",
      lg: "18px",
      "31xl": "50px",
      "11xl": "30px",
      mid: "17px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
