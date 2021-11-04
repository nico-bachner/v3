import { List } from '@nico-bachner/components-react'
import { styled } from '@nico-bachner/css'
import { spacing, utils } from '@nico-bachner/design-tokens'

const Wrapper = styled('div', {
    wmax: utils.sizes.sm,
    mx: 'auto',
    my: spacing[6],
})

const OL: React.FC = ({ children }) => (
    <Wrapper>
        <List.Root ordered>{children}</List.Root>
    </Wrapper>
)

const UL: React.FC = ({ children }) => (
    <Wrapper>
        <List.Root>{children}</List.Root>
    </Wrapper>
)

const MDXList = {
    ol: OL,
    ul: UL,
    li: List.Item,
}

export default MDXList
