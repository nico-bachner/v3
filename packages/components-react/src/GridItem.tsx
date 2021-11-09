import Container from './Container'

import type { CSS } from '@nico-bachner/css'

type GridItemProps = {
    as?: keyof JSX.IntrinsicElements

    column?: [number, number]
    row?: [number, number]

    justify?: 'start' | 'end' | 'center' | 'stretch'
    justifyX?: GridItemProps['justify']
    justifyY?: GridItemProps['justify']

    css?: CSS
}

const GridItem: React.FC<GridItemProps> = ({
    children,
    as,

    column,
    row,

    justify = 'stretch',
    justifyX,
    justifyY,

    css,
}) => (
    <Container
        as={as}
        css={{
            gridColumnStart: column?.[0],
            gridColumnEnd: column?.[1],
            gridRowStart: row?.[0],
            gridRowEnd: row?.[1],

            placeSelf: justify,
            justifySelf: justifyX,
            alignSelf: justifyY,

            ...css,
        }}
    >
        {children}
    </Container>
)

export default GridItem
