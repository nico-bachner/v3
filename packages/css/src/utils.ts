import { CSS } from './stitches'

type Responsive<T> = {
    sm?: T
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

const linearGradient = (args: string[]) => `linear-gradient(${args.join(', ')})`

export { responsive, linearGradient }

export type { Responsive }
