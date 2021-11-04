import { styled } from '@nico-bachner/css'
import { colors, spacing, typography } from '@nico-bachner/design-tokens'

const BaseCode = styled('code', {
    display: 'inline-block',

    fontFamily: typography.fonts.mono,
    fontWeight: typography.fontWeights[400],
    fontSize: typography.fontSizes[4],
    lineHeight: typography.lineHeights[0],

    paddingBlock: spacing[5],
    paddingInline: spacing[6],
    borderRadius: spacing[5],

    backgroundColor: colors['neutral-2'],
})

const Code: React.FC = ({ children }) => <BaseCode>{children}</BaseCode>

export default Code
