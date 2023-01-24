/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ABC Social',
          'Arial',
          'sans-serif'
        ],
        time: 'Times New Roman',
        btk: ['STK Bureau',
             'Times New Roman',
             'sans-serif']
      },
      screens: {
        'xs': '362px',
        // => @media (min-width: 362px) { ... }
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite'
    },
    lineHeight: {
      'tighter': '1.1',
      'wel': '3rem',
      'big': '5.76rem'
    }
  },

  plugins: [],
},
}
