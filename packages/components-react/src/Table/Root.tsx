import { styled } from '@nico-bachner/css'
import { colors, typography } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'

const BaseRoot = styled('table', {
    color: colors['neutral-10'],
    fontFamily: typography.fonts.sans,
    fontWeight: typography.fontWeights[5],
    fontSize: typography.fontSizes[4],
    lineHeight: typography.lineHeights[6],
    letterSpacing: typography.letterSpacings[6],

    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    verticalAlign: 'middle',
})

type RootProps = {
    css?: CSS
}

const Root: React.FC<RootProps> = ({ children, css }) => (
    <BaseRoot css={css}>{children}</BaseRoot>
)

export default Root
