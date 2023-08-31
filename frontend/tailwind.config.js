const percentageWidth = require('tailwindcss-percentage-width'); // load the plugin

module.exports = {
  important: true,
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: "480px",
      tablet: "769px",
      laptop: "1024px",
      desktop: "1200px",
      wide: "1280px",
      ultrawide: "1536px",
    },
    extend: {
      fontSize: {
        xxs: [
          "8px",
          {
            letterSpacing: "-0.02em",
            lineHeight: "20px",
          },
        ],
      },
      fontFamily: {
        'newMonoR': ['newMonoR', 'mono'],
      },
      colors: {
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
        purple: {
          // DO NOT TOUCH, this color scheme was hand picked from gengars icon in the bottom left corner
          50: "#8d7ec4",
          100: "#8275b5",
          200: "#7a6ea8",
          300: "#7562a2", 
          400: "#69578f", 
          500: "#625386", 
          600: "#574a74",
          700: "#4d4264",
          800: "#443b57",
          900: "#363142",
        }
      },
      width: ['responsive'],
      boxShadow: {
        'selected': '5px 5px 0px 0px rgba(141,126,196)',
        'dark-selected': '5px 5px 0px 0px rgba(32,34,37)',
      }
    },
  },
  variants: {
    scrollbar: ["rounded"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    percentageWidth,
  ],
};
