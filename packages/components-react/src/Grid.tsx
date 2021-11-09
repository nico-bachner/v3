import Container from './Container'
import { colors, spacing } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'
import type { Space } from '@nico-bachner/design-tokens'

type GridProps = {
    as?: keyof JSX.IntrinsicElements

    columns?: (Space | 'auto' | `${number}fr`)[] | string
    rows?: (Space | 'auto' | `${number}fr`)[] | string
    gap?: Space

    debug?: boolean
    css?: CSS
}

const Grid: React.FC<GridProps> = ({
    children,
    as,

    columns,
    rows,
    gap = 4,

    debug,
    css,
}) => (
    <Container
        as={as}
        css={{
            display: 'grid',
            gridTemplateColumns: Array.isArray(columns)
                ? columns?.join(' ')
                : columns,
            gridTemplateRows: Array.isArray(rows) ? rows?.join(' ') : rows,
            gap: spacing[gap],

            ...(debug && {
                backgroundColor: colors['neutral-4'],
            }),

            ...css,
        }}
    >
        {children}
    </Container>
)

export default Grid
