import Container from './Container'

import { spacing } from '@nico-bachner/design-tokens'

import type { Space } from '@nico-bachner/design-tokens'

type SectionProps = {
    id?: string
    margin?: Space
}

const Section: React.FC<SectionProps> = ({ children, id, margin }) => (
    <Container
        as="section"
        id={id}
        css={{
            marginBlock: spacing[margin ?? 18],
        }}
    >
        {children}
    </Container>
)

export default Section
