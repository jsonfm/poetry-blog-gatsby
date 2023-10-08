/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
    theme: {
        extend: {
            colors: {
                neutral: "#1e1e1e",
            },
        },
    },
    plugins: [],
};
