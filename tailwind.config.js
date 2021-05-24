const { fontFamily, boxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{tsx,mdx}', './components/*.tsx'],
    darkMode: 'media',
    theme: {
        colors: {
            transparent: 'transparent',

            lightest: 'hsl(220, 10%, var(--lightest))',
            lighter: 'hsl(220, 10%, var(--lighter))',
            light: 'hsl(220, 10%, var(--light))',
            strong: 'hsl(220, 10%, var(--strong))',
            stronger: 'hsl(220, 10%, var(--stronger))',
            strongest: 'hsl(220, 10%, var(--strongest))',

            azure: 'hsl(210, 100%, 50%)',
            cyan: 'hsl(180, 100%, 50%)',
            highlight: 'hsl(330, 100%, 50%)',
        },
        borderColor: {
            DEFAULT: 'hsl(220, 10%, var(--lighter))',
            strong: 'hsl(220, 10%, var(--light))',
        },
        boxShadow: {
            DEFAULT: boxShadow.lg,
            lg: boxShadow['2xl'],
        },
        fontFamily: {
            sans: ['Inter', ...fontFamily.sans],
            mono: ['Fira Code', ...fontFamily.mono],
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
