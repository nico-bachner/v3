const { fontFamily, boxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.{tsx,mdx}', './components/*.tsx'],
    darkMode: 'media',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: 'black',
            white: 'white',
            gray: {
                lightest: '#F3F4F6',
                light: '#D1D5DB',
                DEFAULT: '#9CA3AF',
                dark: '#4B5563',
                darkest: '#1F2937',
            },
            blue: {
                light: '#93C5FD',
                DEFAULT: '#60A5FA',
                dark: '#3B82F6',
            },
            green: {
                DEFAULT: '#6EE7B7',
            },
        },
        boxShadow: {
            DEFAULT: boxShadow.lg,
            lg: boxShadow['2xl'],
        },
        extend: {
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans],
            },
            gridTemplateRows: {
                8: 'repeat(8, minmax(0, 1fr))',
            },
        },
    },
};
