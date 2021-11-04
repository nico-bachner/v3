import { styled } from '@nico-bachner/css'
import {
    colors,
    motion,
    spacing,
    typography,
    utils,
} from '@nico-bachner/design-tokens'

const BaseButton = styled('button', {
    cursor: 'pointer',
    border: 'none',

    fontFamily: typography.fonts.sans,
    fontWeight: typography.fontWeights[400],
    fontSize: typography.fontSizes[4],
    lineHeight: typography.lineHeights[1],
    letterSpacing: typography.letterSpacings[6],

    px: spacing[10],
    py: spacing[9],
    r: spacing[6],

    transitionProperty: 'all',
    transitionDuration: motion.durations.medium,
    transitionTimingFunction: motion.easings.default,

    variants: {
        variant: {
            primary: {
                color: colors['neutral-0'],
                backgroundColor: colors['neutral-10'],
                border: '1px solid',
                borderColor: colors['neutral-10'],

                '&:hover': {
                    color: colors['neutral-10'],
                    backgroundColor: colors['neutral-0'],
                },
            },
            shadow: {
                color: colors['neutral-10'],
                backgroundColor: colors['inherit'],

                '@light': {
                    boxShadow: utils.shadows.md,
                },
                '@dark': {
                    border: '1px solid',
                    borderColor: colors['neutral-4'],
                },

                '&:hover': {
                    '@light': {
                        boxShadow: utils.shadows.lg,
                    },
                    '@dark': {
                        borderColor: colors['neutral-8'],
                    },
                },
            },
            ghost: {
                color: colors['neutral-10'],
                backgroundColor: colors['inherit'],

                '&:hover': {
                    backgroundColor: colors['neutral-2'],
                },
            },
        },
    },
})

type ButtonProps = {
    // functional
    children: React.ReactText
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void

    // presentational
    variant?: 'primary' | 'shadow' | 'ghost'
}

const Button: React.VFC<ButtonProps> = ({
    children,
    type = 'button',
    onClick,

    variant = 'primary',
}) => (
    <BaseButton type={type} onClick={onClick} variant={variant}>
        {children}
    </BaseButton>
)

export default Button
