/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f5fa',
          100: '#e1ebf5',
          200: '#c5d7ed',
          300: '#9abbdf',
          400: '#6a97ce',
          500: '#487cbe',
          600: '#35619e',
          700: '#2c4e80',
          800: '#26426a',
          900: '#233959',
          950: '#17253b',
        },
        accent: {
          50: '#fef9ec',
          100: '#fcf0cd',
          200: '#f8de9a',
          300: '#f4c75b',
          400: '#f0ae27',
          500: '#eb9310',
          600: '#cd6f07',
          700: '#aa5008',
          800: '#8b400f',
          900: '#713511',
          950: '#401a05',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
