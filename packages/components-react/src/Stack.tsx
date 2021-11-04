import { styled } from '@nico-bachner/css'
import { colors, spacing } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'
import type { Space } from '@nico-bachner/design-tokens'

const BaseStack = styled('div', {
    display: 'flex',
})

type StackProps = {
    as?: keyof JSX.IntrinsicElements

    gap?: Space
    direction?: CSS['flexDirection']
    justify?: CSS['justifyContent']
    align?: CSS['alignItems']

    debug?: boolean
    css?: CSS
}

const Stack: React.FC<StackProps> = ({
    children,
    as,

    gap = 0,
    direction = 'column',
    justify = 'flex-start',
    align = 'stretch',

    debug,
    css,
}) => (
    <BaseStack
        as={as}
        css={{
            gap: spacing[gap],
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,

            ...(debug
                ? {
                      backgroundColor: colors['neutral-4'],
                  }
                : {}),

            ...css,
        }}
    >
        {children}
    </BaseStack>
)

export default Stack
