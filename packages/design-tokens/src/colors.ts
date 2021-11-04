const colors = {
    inherit: `var(--color-inherit)`,
    transparent: `var(--color-transparent)`,

    'neutral-0': `var(--color-neutral-0)`,
    'neutral-1': `var(--color-neutral-1)`,
    'neutral-2': `var(--color-neutral-2)`,
    'neutral-3': `var(--color-neutral-3)`,
    'neutral-4': `var(--color-neutral-4)`,
    'neutral-5': `var(--color-neutral-5)`,
    'neutral-6': `var(--color-neutral-6)`,
    'neutral-7': `var(--color-neutral-7)`,
    'neutral-8': `var(--color-neutral-8)`,
    'neutral-9': `var(--color-neutral-9)`,
    'neutral-10': `var(--color-neutral-10)`,

    red: `var(--color-red)`,
    cyan: `var(--color-cyan)`,
    blue: `var(--color-blue)`,
}

type Color = keyof typeof colors

export type { Color }

export { colors }
