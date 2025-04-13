/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // React ve Tailwind içeriği burada taranacak
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5d3ebc', // your custom primary color
        secondary: '#7849f7', // your custom secondary color
      },
    },
  },
  plugins: [],
}