/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#E5ECF4',
        'custom-dark-blue': '#313745',
      },
    },
  },
  plugins: [],
};

module.exports = config;
