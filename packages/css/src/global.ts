import { colors, spacing } from '@nico-bachner/design-tokens'
import { globalCss } from './stitches'

const globalStyles = globalCss({
    html: {
        backgroundColor: colors['neutral-0'],
        scrollBehavior: 'smooth',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
    },
    body: {
        margin: 0,
    },
    '*': {
        overflowWrap: 'break-word',
        scrollMarginTop: spacing[12],
    },
})

export { globalStyles }
