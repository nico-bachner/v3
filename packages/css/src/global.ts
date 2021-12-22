import { colors, spacing } from '@nico-bachner/design-tokens'
import { globalCss } from './stitches'

const globalStyles = globalCss({
    // Use a more-intuitive box-sizing model.
    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },

    // Remove default margin
    '*': {
        margin: 0,
    },

    // Set correct background color
    html: {
        backgroundColor: colors['neutral-0'],
    },

    // Improve text rendering
    body: {
        scrollBehavior: 'smooth',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
    },

    // Improve media defaults
    'img, picture, video, canvas, svg': {
        display: 'block',
        maxWidth: '100%',
    },

    // Remove built-in form typography styles
    'input, button, textarea, select': {
        font: 'inherit',
    },

    // Avoid text overflows
    'h1, h2, h3, h4, h5, h6, p': {
        overflowWrap: 'break-word',
        scrollMarginTop: spacing[12],
    },

    // Create a root stacking context
    '#root, #__next': {
        isolation: 'isolate',
    },
})

export { globalStyles }
