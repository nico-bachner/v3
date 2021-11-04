import { styled } from '@nico-bachner/css'

import type { CSS } from '@nico-bachner/css'

const BaseRow = styled('tr')

type RowProps = {
    css?: CSS
}

const Row: React.FC<RowProps> = ({ children, css }) => (
    <BaseRow css={css}>{children}</BaseRow>
)

export default Row
