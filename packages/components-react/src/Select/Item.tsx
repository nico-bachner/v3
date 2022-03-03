import * as SelectPrimitive from '@radix-ui/react-select'

import { styled } from 'packages/css'
import { colors, spacing, typography } from '@nico-bachner/design-tokens'

type ItemProps = {
    value: string
}

const StyledItem = styled(SelectPrimitive.Item, {
    cursor: 'pointer',

    fontFamily: typography.fonts.sans,
    fontWeight: typography.fontWeights[5],
    fontSize: typography.fontSizes[4],
    lineHeight: typography.lineHeights[0],

    px: spacing[9],
    py: spacing[5],
    r: spacing[3],

    '&:hover': {
        outline: 'none',
        backgroundColor: colors['neutral-3'],
    },
})

const Item: React.FC<ItemProps> = ({ children, value }) => (
    <StyledItem value={value}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator />
    </StyledItem>
)

export default Item
