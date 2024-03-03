/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      borderRadius: {
        'custom': '0.25rem', // Define a custom rounded corner size
      },
    },
  },

  plugins: [],
}

