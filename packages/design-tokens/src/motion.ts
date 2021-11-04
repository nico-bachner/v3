const motion = {
    easings: {
        default: 'var(--ease)',
        in: 'var(--ease-in)',
        out: 'var(--ease-out)',
    },
    durations: {
        fast: 'var(--duration-fast)',
        medium: 'var(--duration-medium)',
        slow: 'var(--duration-slow)',
    },
}

type Easing = keyof typeof motion.easings
type Duration = keyof typeof motion.durations

export type { Easing, Duration }

export { motion }
