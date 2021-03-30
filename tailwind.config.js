const { fontFamily, boxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.{tsx,mdx}', './components/*.tsx'],
    theme: {
        colors: {
            transparent: 'transparent',
            foreground: 'hsl(0, 0%, var(--foreground))',
            background: 'hsl(0, 0%, var(--background))',
            gray: {
                lightest: 'hsl(220, 10%, var(--lightest))',
                light: 'hsl(220, 10%, var(--light))',
                DEFAULT: 'hsl(220, 10%, var(--default))',
                strong: 'hsl(220, 10%, var(--strong))',
                strongest: 'hsl(220, 10%, var(--strongest))',
            },
            blue: {
                light: 'hsl(210, 100%, var(--light))',
                DEFAULT: 'hsl(210, 100%, var(--default))',
                strong: 'hsl(210, 100%, var(--strong))',
            },
            green: {
                light: 'hsl(150, 100%, var(--light))',
                DEFAULT: 'hsl(150, 100%, var(--default))',
                strong: 'hsl(150, 100%, var(--strong))',
            },
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
