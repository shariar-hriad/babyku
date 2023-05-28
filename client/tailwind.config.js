/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '15px',
            },
            colors: {
                primary: '#f47c7c',
            },
        },
        fontFamily: {
            sriracha: ['Sriracha', 'sans-serif'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
