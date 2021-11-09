import Container from './Container'

import { spacing } from '@nico-bachner/design-tokens'

import type { Space } from '@nico-bachner/design-tokens'

type SpacerProps = {
    x?: Space
    y?: Space
}

const Spacer: React.VFC<SpacerProps> = ({ x, y }) => (
    <Container
        css={{
            width: x ? spacing[x] : undefined,
            height: y ? spacing[y] : undefined,
        }}
    />
)

export default Spacer
