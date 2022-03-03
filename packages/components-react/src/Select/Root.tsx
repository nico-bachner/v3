import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from '@nico-bachner/icons-react'

import { styled } from '@nico-bachner/css'
import {
    colors,
    motion,
    spacing,
    typography,
    utils,
} from '@nico-bachner/design-tokens'

const StyledTrigger = styled(SelectPrimitive.Trigger, {
    cursor: 'pointer',

    fontFamily: typography.fonts.sans,
    fontWeight: typography.fontWeights[5],
    fontSize: typography.fontSizes[4],
    lineHeight: typography.lineHeights[0],

    color: colors['neutral-9'],
    backgroundColor: 'transparent',
    backdropFilter: utils.filters.blur.lg,

    px: spacing[9],
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

    '&:focus': {
        outline: 'none',
        borderColor: colors['neutral-8'],
    },

    display: 'flex',
    alignItems: 'center',
    gap: spacing[5],
})

const StyledIcon = styled(SelectPrimitive.Icon, {
    width: spacing[11],
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
    display: 'flex',
    flexDirection: 'column',

    px: spacing[6],
    py: spacing[6],
    r: spacing[5],

    color: colors['neutral-9'],
    backgroundColor: 'transparent',
    backdropFilter: utils.filters.blur.lg,

    border: '1px solid',
    borderColor: colors['neutral-5'],
})

type RootProps = {
    defaultValue?: string
    value?: string
    onValueChange?: (value: string) => void
}

const Root: React.FC<RootProps> = ({
    children,
    defaultValue,
    value,
    onValueChange,
}) => (
    <SelectPrimitive.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
    >
        <StyledTrigger>
            <SelectPrimitive.Value />
            <StyledIcon>
                <ChevronDown />
            </StyledIcon>
        </StyledTrigger>

        <SelectPrimitive.Content>
            <StyledViewport>{children}</StyledViewport>
        </SelectPrimitive.Content>
    </SelectPrimitive.Root>
)

export default Root
