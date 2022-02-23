import { responsive } from '@nico-bachner/css'
import { colors, motion, spacing, utils } from '@nico-bachner/design-tokens'
import { styled } from '@nico-bachner/css'

import type { CSS } from '@nico-bachner/css'

const BaseCard = styled('div', {
    '[data-theme=light]': {
        boxShadow: utils.shadows.sm,
    },
    '[data-theme=dark]': {
        border: `1px solid`,
        borderColor: colors['neutral-3'],
        r: spacing[8],
    },
    ...responsive({
        sm: { px: spacing[12], py: spacing[11] },
        md: { px: spacing[13], py: spacing[12] },
        lg: { px: spacing[14], py: spacing[13] },
    }),

    variants: {
        variant: {
            interactive: {
                transitionProperty: 'all',
                transitionDuration: motion.durations.slow,
                transitionTimingFunction: motion.easings.default,

                '&:hover': {
                    transform: 'scale(1.01)',

                    '[data-theme=light]': {
                        boxShadow: utils.shadows.md,
                    },
                    '[data-theme=dark]': {
                        borderColor: colors['neutral-5'],
                    },
                },
            },
        },
    },
})

type CardProps = {
    variant?: 'interactive'

    css?: CSS
}

const Card: React.FC<CardProps> = ({ children, variant, css }) => (
    <BaseCard variant={variant} css={css}>
        {children}
    </BaseCard>
)

export default Card
