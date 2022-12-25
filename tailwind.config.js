/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary': '#0A66C2',
        'secondary':'rgb(243,242,239)',
        'main':'#FFFFFF',
      })
    },
  },
  plugins: [],
};
