module.exports = {
  content: ['./src/**/*.{html,js,jsx,astro,md}',],
  plugins: [require('@tailwindcss/typography'),require('daisyui')],
  daisyui: {
    darkTheme: "forest",
    themes: ["cupcake","forest","synthwave"]
  },
};
