module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: 'media',
    presets: [require('@nico-bachner/tailwind-preset')],
    theme: {
        borderColor: {
            DEFAULT: 'var(--color-lighter)',
            strong: 'var(--color-light)',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['Fira Code', 'monospace'],
        },
    },
};
