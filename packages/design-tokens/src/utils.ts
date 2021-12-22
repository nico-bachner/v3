const utils = {
    sizes: {
        sm: 'var(--size-sm)',
        md: 'var(--size-md)',
        lg: 'var(--size-lg)',
        xl: 'var(--size-xl)',
    },
    shadows: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
    },
    filters: {
        grayscale: {
            on: 'var(--filter-grayscale-on)',
            off: 'var(--filter-grayscale-off)',
        },
        blur: {
            sm: 'var(--filter-blur-sm)',
            md: 'var(--filter-blur-md)',
            lg: 'var(--filter-blur-lg)',
        },
        brightness: {
            0: 'var(--filter-brightness-0)',
            10: 'var(--filter-brightness-10)',
            20: 'var(--filter-brightness-20)',
            30: 'var(--filter-brightness-30)',
            40: 'var(--filter-brightness-40)',
            50: 'var(--filter-brightness-50)',
            60: 'var(--filter-brightness-60)',
            70: 'var(--filter-brightness-70)',
            80: 'var(--filter-brightness-80)',
            90: 'var(--filter-brightness-90)',
            100: 'var(--filter-brightness-100)',
        },
    },
}

type Size = keyof typeof utils.sizes
type Shadow = keyof typeof utils.shadows
type Filter = keyof typeof utils.filters

export type { Size, Shadow, Filter }

export { utils }
