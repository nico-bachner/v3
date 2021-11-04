import { styled } from '@nico-bachner/css'
import { colors } from '@nico-bachner/design-tokens'

import * as DividerPrimitive from '@radix-ui/react-separator'

const BaseDivider = styled(DividerPrimitive.Root, {
    borderWidth: '0.5px',
    borderStyle: 'solid',
    borderColor: colors['neutral-3'],
})

type DividerProps = {
    orientation?: 'horizontal' | 'vertical'
    decorative?: boolean
}

const Divider: React.VFC<DividerProps> = ({
    orientation = 'horizontal',
    decorative = false,
}) => <BaseDivider orientation={orientation} decorative={decorative} />

export default Divider
