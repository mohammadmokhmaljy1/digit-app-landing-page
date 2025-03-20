/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                text: 'var(--text-color)',
            },
        },
    },
    plugins: [],
}