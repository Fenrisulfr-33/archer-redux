const percentageWidth = require('tailwindcss-percentage-width'); // load the plugin

module.exports = {
  important: true,
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    // "./components/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: "480px",
      tablet: "768px",
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
        },
        teal: {
          300: "#47E9BA",
        },
        normal: "#9ca3af", // gray-400
        fire: "#ef4444", // orange-500
        water: "#0ea5e9", // sky-500 : #0ea5e9
        electric: "#fde047", // yellow-300
        grass: "#22c55e", // green-500
        ice: "#a5f3fc", // cyan-200
        fighting: "#9d174d", // pink-800
        poison: "#a855f7", // purple-500
        ground: "#b45309", // amber-700
        flying: "#93c5fd", // blue-300
        psychic: "#fb7185", // rose-400
        bug: "#a3e635", // lime-400
        rock: "#fdba74", // orange-300
        ghost: "#6366f1", // indigo-500
        dragon: "#2563eb", // blue-600
        dark: "#3f3f46", // zinc-700
        steel: "#155e75", // cyan-800
        fairy: "#f0abfc", // fuchsia-300
        NOR: "#9ca3af", // gray-400
        FIR: "#ef4444", // orange-500
        WAT: "#0ea5e9", // sky-500 : #0ea5e9
        ELE: "#fde047", // yellow-300
        GRA: "#22c55e", // green-500
        ICE: "#a5f3fc", // cyan-200
        FIG: "#9d174d", // pink-800
        POI: "#a855f7", // purple-500
        GRO: "#b45309", // amber-700
        FLY: "#93c5fd", // blue-300
        PSY: "#fb7185", // rose-400
        BUG: "#a3e635", // lime-400
        ROC: "#fdba74", // orange-300
        GHO: "#6366f1", // indigo-500
        DRA: "#2563eb", // blue-600
        DAR: "#3f3f46", // zinc-700
        STE: "#155e75", // cyan-800
        FAI: "#f0abfc", // fuchsia-300
      },
      width: {
        '1': "0.25rem",
        '2': "0.5rem",
        '3': "0.75rem",
        '4': "1rem",
        '5': "1.25rem",
        '6': "1.5rem",
        '7': "1.75rem",
        '8': "2rem",
        '9': "2.25rem",
        '10': "2.5rem",
        '11': "2.75rem",
        '12': "3rem",
        '13': "3.25rem",
        '14': "3.5rem",
        '15': "3.75rem",
        '16': "4rem",
        '17': "4.25rem",
        '18': "4.5rem",
        '19': "4.75rem",
        '20': "5rem",
        '21': "5.25rem",
        '22': "5.5rem",
        '23': "5.75rem",
        '24': "6rem",
        '25': "6.25rem",
        '26': "6.5rem",
        '27': "6.75rem",
        '29': "7.25rem",
        '30': "8rem",
        '31': "7.75rem",
        '33': "8.25rem",
        '34': "8.5rem",
        '35': "8.75rem",
        '37': "9.25rem",
        '38': "9.5rem",
        '39': "9.75rem",
        '41': "10.25rem",
        '42': "10.5rem",
        '43': "10.75rem",
        '45': "11.25rem",
        '46': "11.5rem",
        '47': "11.75rem",
        '49': "12.25rem",
        '50': "12.5rem",
        '51': "12.75rem",
        '53': "13.25rem",
        '54': "13.5rem",
        '55': "13.75rem",
        '57': "14.24rem",
        '58': "14.5rem",
        '59': "14.75rem",
        '61': "15.25rem",
        '62': "15.5rem",
        '63': "15.75rem",
        '65': "16rem",
        '66': "16.5rem",
        '67': "16.75rem",
        '68': "17rem",
        '69': "17.25rem",
        '70': "17.5rem",
        '71': "17.75rem",
        '73': "18.25rem",
        '74': "18.5rem",
        '75': "18.75rem",
        '76': "19rem",
        '77': "19.25rem",
        '78': "19.5rem",
        '79': "19.75rem",
        '81': "20.25rem",
        '82': "20.5rem",
        '83': "20.75rem",
        '84': "21rem",
        '85': "21.25rem",
        '86': "21.5rem",
        '87': "21.75rem",
        '88': "22rem",
        '89': "22.25rem",
        '90': "22.5rem",
        '91': "22.75rem",
        '92': "23rem",
        '93': "23.25rem",
        '94': "23.5rem",
        '95': "23.75rem",
        '97': "24.25rem",
        '98': "24.5rem",
        '99': "24.75rem",
        '100': "25rem",
        '101': "25.25rem",
        '102': "25.5rem",
        '103': "25.75rem",
        '104': "26rem",
        '105': "26.25rem",
        '106': "26.5rem",
        '107': "26.75rem",
        '108': "27rem",
        '109': "27.25rem",
        '110': "27.5rem",
        '111': "27.75rem",
        '112': "28rem",
        '113': "28.25rem",
        '114': "28.5rem",
        '115': "28.75rem",
        '116': "29rem",
        '117': "29.25rem",
        '118': "29.5rem",
        '119': "29.75rem",
        '120': "30rem",
        '121': "30.25rem",
        '122': "30.5rem",
        '123': "30.75rem",
        '124': "31rem",
        '125': "31.25rem",
        '126': "31.5rem",
        '127': "31.75rem",
        '128': "32rem",
      },
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
