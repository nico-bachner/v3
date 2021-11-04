import { styled } from '@nico-bachner/css'
import { colors, spacing } from 'packages/design-tokens/tokens'

import type { CSS } from '@nico-bachner/css'

const BaseItem = styled('td', {
    px: spacing[10],
    py: spacing[8],

    border: `1px solid`,
    borderColor: colors['neutral-4'],

    minWidth: 'max-content',
})

type ItemProps = {
    type: 'head' | 'body'

    css?: CSS
}

const Item: React.FC<ItemProps> = ({ children, type, css }) => (
    <BaseItem as={type == 'head' ? 'th' : 'td'} css={css}>
        {children}
    </BaseItem>
)

export default Item
