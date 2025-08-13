/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out',
        fadeOut: 'fadeOut 0.7s ease-in-out',
        slideIn: 'slideIn 0.6s ease-out',
      },

      colors: {
        // 'nm-900': '#f28482', // Coral
        // 'nm-800': '#84a59d', // Sage Green
        // 'nm-700': '#f5cac3', // Soft Pink
        // 'nm-600': '#f7ede2', // Cream
        // 'nm-500': '#f6bd60'  // Golden Yellow

        'nm-900': '#0d1b2a', 
        'nm-800': '#1b263b', 
        'nm-700': '#778da9', 
        'nm-600': '#e5d8ca', 
        'nm-500': '#415a77', 

        // 'nm-900': '#f07167', // Coral Red
        // 'nm-800': '#fed9b7', // Peach Beige
        // 'nm-700': '#fdfcdc', // Soft Cream
        // 'nm-600': '#00afb9', // Aqua Blue
        // 'nm-500': '#0081a7'  // Deep Teal

      }
    }
  },
  plugins: [],
}


