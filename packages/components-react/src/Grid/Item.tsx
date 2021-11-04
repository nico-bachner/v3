import { styled } from '@nico-bachner/css'

import type { CSS } from '@nico-bachner/css'

const BaseItem = styled('div')

type ItemProps = {
    as?: keyof JSX.IntrinsicElements

    column?: [number, number]
    row?: [number, number]

    justify?: 'start' | 'end' | 'center' | 'stretch'
    justifyX?: ItemProps['justify']
    justifyY?: ItemProps['justify']

    css?: CSS
}

const Item: React.FC<ItemProps> = ({
    children,
    as,

    column,
    row,

    justify = 'stretch',
    justifyX,
    justifyY,

    css,
}) => (
    <BaseItem
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
    </BaseItem>
)

export default Item
