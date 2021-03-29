const { fontFamily, boxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.{tsx,mdx}', './components/*.tsx'],
    darkMode: 'media',
    theme: {
        colors: {
            transparent: 'transparent',
            black: 'black',
            white: 'white',
            gray: {
                lightest: 'hsl(220, 10%, 95%)',
                light: 'hsl(220, 10%, 85%)',
                DEFAULT: 'hsl(220, 10%, 65%)',
                dark: 'hsl(220, 10%, 35%)',
                darkest: 'hsl(220, 10%, 20%)',
            },
            blue: 'hsl(210, 100%, 60%)',
            green: 'hsl(150, 80%, 70%)',
        },
        boxShadow: {
            DEFAULT: boxShadow.lg,
            lg: boxShadow['2xl'],
        },
        fontFamily: {
            sans: ['Inter', ...fontFamily.sans],
        },
    },
};
