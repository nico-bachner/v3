import { styled } from '@nico-bachner/css'
import { colors, spacing, typography } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'

const BaseRoot = styled('ul', {
    listStylePosition: 'inside',

    fontFamily: typography.fonts.sans,
    fontWeight: typography.fontWeights[5],
    fontSize: typography.fontSizes[5],
    lineHeight: typography.lineHeights[5],

    color: colors['neutral-9'],

    m: spacing[0],
    pl: spacing[8],
})

type RootProps = {
    ordered?: boolean

    css?: CSS
}

const Root: React.FC<RootProps> = ({ children, ordered, css }) => (
    <BaseRoot as={ordered ? 'ol' : 'ul'} css={css}>
        {children}
    </BaseRoot>
)

export default Root
