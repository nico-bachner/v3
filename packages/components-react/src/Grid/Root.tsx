import { styled } from '@nico-bachner/css'
import { colors, spacing } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'
import type { Space } from '@nico-bachner/design-tokens'

const BaseRoot = styled('div')

type RootProps = {
    as?: keyof JSX.IntrinsicElements

    columns?: CSS['gridTemplateColumns']
    rows?: CSS['gridTemplateRows']
    gap?: Space

    debug?: boolean
    css?: CSS
}

const Root: React.FC<RootProps> = ({
    children,
    as,

    columns,
    rows,
    gap = 4,

    debug,
    css,
}) => (
    <BaseRoot
        as={as}
        css={{
            display: 'grid',
            gridTemplateColumns: columns,
            gridTemplateRown: rows,
            gap: spacing[gap],

            ...(debug && {
                backgroundColor: colors['neutral-4'],
            }),

            ...css,
        }}
    >
        {children}
    </BaseRoot>
)

export default Root
