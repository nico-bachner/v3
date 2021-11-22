import { styled } from '@nico-bachner/css'
import { colors, spacing, typography } from '@nico-bachner/design-tokens'

const BaseCodeBlock: React.FC = styled('pre', {
    fontFamily: typography.fonts.mono,
    fontWeight: typography.fontWeights[5],
    fontSize: typography.fontSizes[4],
    lineHeight: typography.lineHeights[4],
    tabSize: '4',
    overflowX: 'scroll',

    px: spacing[12],
    py: spacing[10],
    mx: spacing[0],
    my: spacing[12],
    r: spacing[5],

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors['neutral-5'],

    color: colors['neutral-9'],
})

const CodeBlock: React.FC = ({ children }) => (
    <BaseCodeBlock>{children}</BaseCodeBlock>
)

export default CodeBlock
