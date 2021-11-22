import { styled } from '@nico-bachner/css'
import { colors, spacing, typography, utils } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'
import type {
    Color,
    Space,
    FontWeight,
    FontSize,
    LineHeight,
    LetterSpacing,
    Size,
} from '@nico-bachner/design-tokens'

const BaseText = styled('p', {
    fontFamily: typography.fonts.sans,
    my: spacing[0],

    variants: {
        type: {
            h1: {
                color: colors['neutral-10'],
                fontWeight: typography.fontWeights[9],
                fontSize: typography.fontSizes[9],
                lineHeight: typography.lineHeights[1],
                letterSpacing: typography.letterSpacings[1],
            },
            h2: {
                color: colors['neutral-10'],
                fontWeight: typography.fontWeights[9],
                fontSize: typography.fontSizes[8],
                lineHeight: typography.lineHeights[2],
                letterSpacing: typography.letterSpacings[2],
            },
            h3: {
                color: colors['neutral-10'],
                fontWeight: typography.fontWeights[9],
                fontSize: typography.fontSizes[7],
                lineHeight: typography.lineHeights[3],
                letterSpacing: typography.letterSpacings[3],
            },
            h4: {
                color: colors['neutral-10'],
                fontWeight: typography.fontWeights[9],
                fontSize: typography.fontSizes[6],
                lineHeight: typography.lineHeights[4],
                letterSpacing: typography.letterSpacings[4],
            },
            p: {
                color: colors['neutral-9'],
                fontWeight: typography.fontWeights[5],
                fontSize: typography.fontSizes[5],
                lineHeight: typography.lineHeights[5],
                letterSpacing: typography.letterSpacings[5],
            },
            small: {},
            label: {},
            strong: {
                color: colors['neutral-10'],
                fontWeight: typography.fontWeights[7],
            },
        },
    },
})

type TextProps = {
    as?: keyof JSX.IntrinsicElements
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'label' | 'strong'

    id?: string

    size?: FontSize
    weight?: FontWeight
    color?: Color | [Color, Color]
    transform?: 'uppercase' | 'lowercase' | 'capitalize'
    align?: 'left' | 'center' | 'right'
    truncate?: number

    width?: Size
    margin?: Space | [Space, Space]
    marginTop?: Space
    marginBottom?: Space

    css?: CSS
}

const linearGradient = (args: string[]) => `linear-gradient(${args.join(', ')})`

const Text: React.FC<TextProps> = ({
    children,

    as,
    type = 'p',

    id,

    size,
    weight,
    color,
    transform,
    align,
    truncate,

    width,
    margin,
    marginTop,
    marginBottom,

    css,
}) => (
    <BaseText
        id={id}
        as={as ?? type}
        type={type}
        css={{
            ...(size
                ? {
                      fontSize: typography.fontSizes[size],
                      lineHeight:
                          typography.lineHeights[(10 - size) as LineHeight],
                      letterSpacing:
                          typography.letterSpacings[
                              (10 - size) as LetterSpacing
                          ],
                  }
                : {}),
            ...(weight
                ? {
                      fontWeight: typography.fontWeights[weight],
                  }
                : {}),

            textTransform: transform,
            textAlign: align,
            ...(truncate
                ? {
                      display: '-webkit-box',
                      '-webkit-line-clamp': 3,
                      '-webkit-box-orient': 'vertical',
                      overflow: 'hidden',
                  }
                : {}),

            ...(color
                ? Array.isArray(color)
                    ? {
                          color: colors['transparent'],
                          backgroundImage: linearGradient([
                              '60deg',
                              colors[color[0]],
                              colors[color[1]],
                          ]),
                          backgroundClip: 'text',
                      }
                    : { color: colors[color] }
                : {}),

            ...(width
                ? {
                      maxWidth: utils.sizes[width],
                      mx: 'auto',
                  }
                : {}),
            ...(margin
                ? Array.isArray(margin)
                    ? {
                          mt: spacing[margin[0]],
                          mb: spacing[margin[1]],
                      }
                    : {
                          my: spacing[margin],
                      }
                : {}),
            ...(marginTop
                ? {
                      mt: spacing[marginTop],
                  }
                : {}),
            ...(marginBottom
                ? {
                      mb: spacing[marginBottom],
                  }
                : {}),

            ...css,
        }}
    >
        {children}
    </BaseText>
)

export default Text
