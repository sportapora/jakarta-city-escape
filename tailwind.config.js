/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./tailwind.animation.css",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("./tailwind.plugin.js")],
  darkMode: "selector",
};
