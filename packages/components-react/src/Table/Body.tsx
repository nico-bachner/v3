import { styled } from '@nico-bachner/css'

import type { CSS } from '@nico-bachner/css'

const BaseRoot = styled('tbody')

type RootProps = {
    css?: CSS
}

const Root: React.FC<RootProps> = ({ children, css }) => (
    <BaseRoot css={css}>{children}</BaseRoot>
)

export default Root
