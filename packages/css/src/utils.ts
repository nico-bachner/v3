import { CSS } from './stitches'

type Responsive<T> = {
    sm: T
    md?: T
    lg?: T
}

const responsive = ({ sm, md, lg }: Responsive<CSS>): CSS => ({
    '@sm': {
        ...sm,
    },

    '@md': {
        ...md,
    },

    '@lg': {
        ...lg,
    },
})

export { responsive }

export type { Responsive }
