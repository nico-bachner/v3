import { styled } from '@nico-bachner/css'
import {
    colors,
    motion,
    spacing,
    typography,
} from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'

const BaseButton = styled('button', {
    cursor: 'pointer',

    fontFamily: typography.fonts.sans,
    fontWeight: typography.fontWeights[5],
    fontSize: typography.fontSizes[4],
    lineHeight: typography.lineHeights[1],
    letterSpacing: typography.letterSpacings[6],

    color: '$$buttonTheme',
    backgroundColor: '$$buttonBg',
    border: `1px solid`,
    borderColor: '$$buttonTheme',
    r: spacing[6],

    transitionProperty: 'all',
    transitionDuration: motion.durations.medium,
    transitionTimingFunction: motion.easings.default,

    '&:hover': {
        color: '$$buttonBg',
        backgroundColor: '$$buttonTheme',
        borderColor: '$$buttonBg',
    },

    '&:active': {
        color: '$$buttonBg',
        backgroundColor: colors['neutral-1'],
        borderColor: '$$buttonBg',
    },

    variants: {
        variant: {
            primary: {
                $$buttonTheme: colors['neutral-0'],
                $$buttonBg: colors['neutral-10'],
            },
            secondary: {
                $$buttonTheme: colors['neutral-10'],
                $$buttonBg: colors['neutral-0'],
            },
            red: {
                $$buttonTheme: colors['red-6'],
                $$buttonBg: colors['neutral-0'],
            },
            cyan: {
                $$buttonTheme: colors['cyan-6'],
                $$buttonBg: colors['neutral-0'],
            },
            blue: {
                $$buttonTheme: colors['blue-6'],
                $$buttonBg: colors['neutral-0'],
            },
        },
        size: {
            sm: {
                px: spacing[9],
                py: spacing[8],
            },
            md: {
                px: spacing[10],
                py: spacing[9],
            },
            lg: {
                px: spacing[11],
                py: spacing[10],
            },
        },
    },
})

type ButtonProps = {
    // functional
    children: React.ReactText
    onClick?: () => void

    // presentational
    variant?: 'primary' | 'secondary' | 'red' | 'cyan' | 'blue'
    size?: 'sm' | 'md' | 'lg'
    css?: CSS
}

const Button: React.VFC<ButtonProps> = ({
    children,
    onClick,

    variant = 'primary',
    size = 'md',
    css,
}) => (
    <BaseButton onClick={onClick} variant={variant} size={size} css={css}>
        {children}
    </BaseButton>
)

export default Button
