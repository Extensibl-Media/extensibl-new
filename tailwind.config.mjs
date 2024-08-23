/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: "#effefb",
          100: "#c7fff5",
          200: "#8fffeb",
          300: "#4ff9e0",
          400: "#1be6ce",
          500: "#03dac5",
          600: "#00a296",
          700: "#048179",
          800: "#096661",
          900: "#0d5450",
          950: "#003433",
        },
        lavender: {
          50: "#faf5ff",
          100: "#f2e9fe",
          200: "#e8d7fd",
          300: "#d6b7fb",
          400: "#bb86f7",
          500: "#a35bf1",
          600: "#8e3ae3",
          700: "#7929c7",
          800: "#6626a3",
          900: "#542083",
          950: "#380b60",
        },
      },
    },
  },
  plugins: [],
};
