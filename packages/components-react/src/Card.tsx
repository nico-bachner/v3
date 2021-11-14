import Container from './Container'

import { responsive } from '@nico-bachner/css'
import { colors, motion, spacing, utils } from '@nico-bachner/design-tokens'
import { useTheme } from '@nico-bachner/react-hooks'

import type { CSS } from '@nico-bachner/css'

type CardProps = {
    interactive?: boolean

    css?: CSS
}

const Card: React.FC<CardProps> = ({ children, interactive, css }) => {
    const { resolvedTheme } = useTheme()

    return (
        <Container
            css={{
                ...responsive({
                    sm: { px: spacing[12], py: spacing[11] },
                    md: { px: spacing[13], py: spacing[12] },
                    lg: { px: spacing[14], py: spacing[13] },
                }),

                ...(resolvedTheme == 'light'
                    ? {
                          boxShadow: utils.shadows.sm,
                      }
                    : {
                          border: `1px solid`,
                          borderColor: colors['neutral-3'],
                          r: spacing[8],
                      }),

                ...(interactive
                    ? {
                          transitionProperty: 'all',
                          transitionDuration: motion.durations.slow,
                          transitionTimingFunction: motion.easings.default,

                          '&:hover': {
                              transform: 'scale(1.01)',

                              ...(resolvedTheme == 'light'
                                  ? {
                                        boxShadow: utils.shadows.md,
                                    }
                                  : {
                                        borderColor: colors['neutral-5'],
                                    }),
                          },
                      }
                    : {}),

                ...css,
            }}
        >
            {children}
        </Container>
    )
}

export default Card