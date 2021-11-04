import { styled } from '@nico-bachner/css'
import { spacing } from '@nico-bachner/design-tokens'

import type { Space } from '@nico-bachner/design-tokens'

const BaseSection = styled('section')

type SectionProps = {
    id?: string
    margin?: Space
}

const Section: React.FC<SectionProps> = ({ children, id, margin }) => (
    <BaseSection
        id={id}
        css={{
            marginBlock: spacing[margin ?? 18],
        }}
    >
        {children}
    </BaseSection>
)

export default Section
