/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'accent': '#f6993f',
      },
    },
  },
  plugins: [],
}