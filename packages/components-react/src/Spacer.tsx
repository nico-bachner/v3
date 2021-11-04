import { styled } from '@nico-bachner/css'
import { spacing } from '@nico-bachner/design-tokens'

import type { Space } from '@nico-bachner/design-tokens'

const BaseSpacer = styled('div')

type SpacerProps = {
    x?: Space
    y?: Space
}

const Spacer: React.VFC<SpacerProps> = ({ x, y }) => (
    <BaseSpacer
        css={{
            width: x ? spacing[x] : undefined,
            height: y ? spacing[y] : undefined,
        }}
    />
)

export default Spacer
