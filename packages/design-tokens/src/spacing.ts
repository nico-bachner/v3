const spacing = {
    0: 'var(--space-0)',
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    7: 'var(--space-7)',
    8: 'var(--space-8)',
    9: 'var(--space-9)',
    10: 'var(--space-10)',
    11: 'var(--space-11)',
    12: 'var(--space-12)',
    13: 'var(--space-13)',
    14: 'var(--space-14)',
    15: 'var(--space-15)',
    16: 'var(--space-16)',
    17: 'var(--space-17)',
    18: 'var(--space-18)',
    19: 'var(--space-19)',
    20: 'var(--space-20)',
}

type Space = keyof typeof spacing

export type { Space }

export { spacing }
