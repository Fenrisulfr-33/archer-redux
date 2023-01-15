module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
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
        purple: {
          900: '#87848F',
          800: '#8E899F',
          700: '#968EAF',
          600: '#9D93BF',
          400: '#A598CF',
          300: '#AC9DDF',
          200: '#B4A2EF',
          100: '#BBA7FF',
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
      }
    },
  },
  variants: {
      scrollbar: ['rounded'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('tailwind-scrollbar'),
    // require('@tailwindcss/forms')
  ],
}
