export {}; 


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "neutral-40": "#e2e8f0",
        "violet-main-500": "#4f46e5",
        "violet-200": "#f7f8fd",
        "neutral-80": "#5b6776",
        plum: "#b8b6f7",
        "neutral-70": "#79808a",
        tomato: "#f93939",
        mediumseagreen: "#3aa96d",
        "neutral-90": "#344155",
        honeydew: "#e2eee2",
        lightgray: "#d1d5db",
        darkgray: "#95a8b2",
        black: "#000",
        lightseagreen: {
          "100": "#40b5b5",
          "200": "rgba(64, 181, 181, 0.8)",
        },
        darkcyan: "#219d98",
        gray: "#fafbfd",
        slategray: {
          "100": "#827a9c",
          "200": "#5e7682",
        },
        midnightblue: "#160647",
        dimgray: "#515f67",
        whitesmoke: "#e6ecef",
        darkslategray: {
          "100": "#45565e",
          "200": "#005252",
        },
      },
      spacing: {},
      fontFamily: {
        "text-sm-regular": "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
      "2xs": "11px",
      base: "16px",
      smi: "13px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
