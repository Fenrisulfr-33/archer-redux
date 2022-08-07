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
        }
      }
    },
  },
  variants: {
      scrollbar: ['rounded'],
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('tailwind-scrollbar'),
    // require('@tailwindcss/forms')
  ],
}
