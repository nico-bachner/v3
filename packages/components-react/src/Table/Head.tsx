import { styled } from '@nico-bachner/css'
import { colors } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'

const BaseRoot = styled('thead', {
    color: colors['neutral-10'],
})

type RootProps = {
    css?: CSS
}

const Root: React.FC<RootProps> = ({ children, css }) => (
    <BaseRoot css={css}>{children}</BaseRoot>
)

export default Root
