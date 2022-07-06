/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
        secondary: "#ff9100",
      },
      fontFamily: {
        'teko': ['Teko', 'sans-serif'],
      },
      screens: {
        'sm': '350px',
        // => @media (min-width: 640px) { ... }
  
        'md': '547px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '768px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1024px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1600px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
