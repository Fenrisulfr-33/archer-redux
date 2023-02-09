module.exports = {
  important: true,
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      phone: '480px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1200px',
      wide: '1280px',
      ultrawide: '1536px',
    },
    extend: {
      fontSize: {
        'xxs': [
          '8px', {
            letterSpacing: '-0.02em',
            lineHeight: '20px'
          }
        ]
      },
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        purp: {
          100: '#b289f3',
          200: '#9c78d5',
          300: '#8567b6',
          400: '#6f5698',
          500: '#594579',
          600: '#43335b',
          700: '#2c223d',
          800: '#16111e',
        },
        purple: {
          900: '#633974', // main color, tinits pallet
          800: '#775285',
          700: '#8A6B97',
          600: '#9E83A8',
          400: '#B19CBA',
          300: '#C4B5CB',
          200: '#D8CEDC',
          100: '#EBE6EE',
          50: '#B289F3',
        },
        teal: {
          300: '#47E9BA',
        },
        normal: '#9ca3af', // gray-400
        fire: '#ef4444', // orange-500
        water: '#0ea5e9', // sky-500 : #0ea5e9
        electric: '#fde047', // yellow-300
        grass: '#22c55e',  // green-500
        ice: '#a5f3fc', // cyan-200
        fighting: '#9d174d', // pink-800
        poison: '#a855f7', // purple-500
        ground: '#b45309', // amber-700
        flying: '#93c5fd', // blue-300
        psychic: '#fb7185', // rose-400
        bug: '#a3e635', // lime-400
        rock: '#fdba74', // orange-300
        ghost: '#6366f1', // indigo-500
        dragon: '#2563eb', // blue-600
        dark: '#3f3f46', // zinc-700
        steel: '#155e75', // cyan-800
        fairy: '#f0abfc', // fuchsia-300
        NOR: '#9ca3af', // gray-400
        FIR: '#ef4444', // orange-500
        WAT: '#0ea5e9', // sky-500 : #0ea5e9
        ELE: '#fde047', // yellow-300
        GRA: '#22c55e',  // green-500
        ICE: '#a5f3fc', // cyan-200
        FIG: '#9d174d', // pink-800
        POI: '#a855f7', // purple-500
        GRO: '#b45309', // amber-700
        FLY: '#93c5fd', // blue-300
        PSY: '#fb7185', // rose-400
        BUG: '#a3e635', // lime-400
        ROC: '#fdba74', // orange-300
        GHO: '#6366f1', // indigo-500
        DRA: '#2563eb', // blue-600
        DAR: '#3f3f46', // zinc-700
        STE: '#155e75', // cyan-800
        FAI: '#f0abfc', // fuchsia-300
      }
    },
  },
  variants: {
      scrollbar: ['rounded'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    // require('@tailwindcss/forms')
  ],
}
