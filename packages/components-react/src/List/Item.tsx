import { styled } from '@nico-bachner/css'
import { colors, spacing } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'

const BaseItem = styled('li', {
    marginBlock: spacing[5],

    '&::marker': {
        color: colors['neutral-8'],
    },
})

type ItemProps = {
    css?: CSS
    id?: string
}

const Item: React.FC<ItemProps> = ({ children, css }) => (
    <BaseItem css={css}>{children}</BaseItem>
)

export default Item
