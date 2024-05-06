/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: '6rem'
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
};
