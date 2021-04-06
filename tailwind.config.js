const { fontFamily, boxShadow } = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{tsx,mdx}', './components/*.tsx'],
    theme: {
        colors: {
            transparent: 'transparent',
            gray: {
                lightest: 'hsl(220, 10%, var(--lightest))',
                lighter: 'hsl(220, 10%, var(--lighter))',
                light: 'hsl(220, 10%, var(--light))',
                strong: 'hsl(220, 10%, var(--strong))',
                stronger: 'hsl(220, 10%, var(--stronger))',
                strongest: 'hsl(220, 10%, var(--strongest))',
            },
            red: 'hsl(0, 100%, 50%))',
            orange: 'hsl(30, 100%, 50%)',
            yellow: 'hsl(60, 100%, 50%)',
            chartreuse: 'hsl(90, 100%, 50%)',
            green: 'hsl(120, 100%, 50%)',
            spring: 'hsl(150, 100%, 50%)',
            cyan: 'hsl(180, 100%, 50%)',
            azure: 'hsl(210, 100%, var(--light))',
            blue: 'hsl(240, 100%, 50%)',
            violet: 'hsl(270, 100%, 50%)',
            magenta: 'hsl(300, 100%, 50%)',
            rose: 'hsl(330, 100%, 50%)',
        },
        boxShadow: {
            DEFAULT: boxShadow.lg,
            lg: boxShadow['2xl'],
        },
        fontFamily: {
            sans: ['Inter', ...fontFamily.sans],
        },
    },
}
