const typography = {
    fonts: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
    },
    fontWeights: {
        1: `var(--font-weight-1)`,
        2: `var(--font-weight-2)`,
        3: `var(--font-weight-3)`,
        4: `var(--font-weight-4)`,
        5: `var(--font-weight-5)`,
        6: `var(--font-weight-6)`,
        7: `var(--font-weight-7)`,
        8: `var(--font-weight-8)`,
        9: `var(--font-weight-9)`,
    },
    fontSizes: {
        1: `var(--font-size-1)`,
        2: `var(--font-size-2)`,
        3: `var(--font-size-3)`,
        4: `var(--font-size-4)`,
        5: `var(--font-size-5)`,
        6: `var(--font-size-6)`,
        7: `var(--font-size-7)`,
        8: `var(--font-size-8)`,
        9: `var(--font-size-9)`,
        10: `var(--font-size-10)`,
    },
    lineHeights: {
        0: `var(--line-height-0)`,
        1: `var(--line-height-1)`,
        2: `var(--line-height-2)`,
        3: `var(--line-height-3)`,
        4: `var(--line-height-4)`,
        5: `var(--line-height-5)`,
        6: `var(--line-height-6)`,
        7: `var(--line-height-7)`,
        8: `var(--line-height-8)`,
        9: `var(--line-height-9)`,
    },
    letterSpacings: {
        0: `var(--letter-spacing-0)`,
        1: `var(--letter-spacing-1)`,
        2: `var(--letter-spacing-2)`,
        3: `var(--letter-spacing-3)`,
        4: `var(--letter-spacing-4)`,
        5: `var(--letter-spacing-5)`,
        6: `var(--letter-spacing-6)`,
        7: `var(--letter-spacing-7)`,
        8: `var(--letter-spacing-8)`,
        9: `var(--letter-spacing-9)`,
    },
}

type Font = keyof typeof typography.fonts
type FontWeight = keyof typeof typography.fontWeights
type FontSize = keyof typeof typography.fontSizes
type LineHeight = keyof typeof typography.lineHeights
type LetterSpacing = keyof typeof typography.letterSpacings

export type { Font, FontWeight, FontSize, LineHeight, LetterSpacing }

export { typography }
