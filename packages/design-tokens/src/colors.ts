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

    'red-1': `var(--color-red-1)`,
    'red-2': `var(--color-red-2)`,
    'red-3': `var(--color-red-3)`,
    'red-4': `var(--color-red-4)`,
    'red-5': `var(--color-red-5)`,
    'red-6': `var(--color-red-6)`,
    'red-7': `var(--color-red-7)`,
    'red-8': `var(--color-red-8)`,
    'red-9': `var(--color-red-9)`,

    'cyan-1': `var(--color-cyan-1)`,
    'cyan-2': `var(--color-cyan-2)`,
    'cyan-3': `var(--color-cyan-3)`,
    'cyan-4': `var(--color-cyan-4)`,
    'cyan-5': `var(--color-cyan-5)`,
    'cyan-6': `var(--color-cyan-6)`,
    'cyan-7': `var(--color-cyan-7)`,
    'cyan-8': `var(--color-cyan-8)`,
    'cyan-9': `var(--color-cyan-9)`,

    'blue-1': `var(--color-blue-1)`,
    'blue-2': `var(--color-blue-2)`,
    'blue-3': `var(--color-blue-3)`,
    'blue-4': `var(--color-blue-4)`,
    'blue-5': `var(--color-blue-5)`,
    'blue-6': `var(--color-blue-6)`,
    'blue-7': `var(--color-blue-7)`,
    'blue-8': `var(--color-blue-8)`,
    'blue-9': `var(--color-blue-9)`,
}

type Color = keyof typeof colors

export type { Color }

export { colors }
