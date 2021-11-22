import { styled } from '@nico-bachner/css'
import {
    colors,
    motion,
    spacing,
    typography,
} from '@nico-bachner/design-tokens'

import { Container, Stack } from '@nico-bachner/components-react'
import { ChevronDown } from '@nico-bachner/icons-react'

const BaseSelect = styled('select', {
    appearance: 'none',
    outline: 'none',
    border: 'none',
    padding: 'none',
    margin: 'none',
    cursor: 'inherit',

    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',

    color: 'inherit',
    backgroundColor: 'inherit',

    flexGrow: '1',
})

type RootProps = {
    value?: string
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

const Root: React.FC<RootProps> = ({ children, value, onChange }) => (
    <Stack
        direction="row"
        align="center"
        gap={8}
        css={{
            cursor: 'pointer',

            fontFamily: typography.fonts.sans,
            fontWeight: typography.fontWeights[5],
            fontSize: typography.fontSizes[4],
            lineHeight: typography.lineHeights[0],

            color: colors['neutral-9'],
            backgroundColor: 'transparent',

            px: spacing[8],
            py: spacing[8],
            r: spacing[5],

            transitionProperty: 'border-color',
            transitionDuration: motion.durations.fast,
            transitionTimingFunction: motion.easings.default,

            border: '1px solid',
            borderColor: colors['neutral-5'],

            '&:hover': {
                borderColor: colors['neutral-7'],
            },
        }}
    >
        <BaseSelect value={value} onChange={onChange}>
            {children}
        </BaseSelect>
        <Container
            css={{
                width: spacing[11],
                height: spacing[11],
            }}
        >
            <ChevronDown />
        </Container>
    </Stack>
)

export default Root
