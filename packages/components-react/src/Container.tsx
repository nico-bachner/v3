import { styled } from '@nico-bachner/css'

import type { CSS } from '@nico-bachner/css'

const BaseContainer = styled('div')

type ContainerProps = {
    as?: keyof JSX.IntrinsicElements
    css?: CSS
}

const Container: React.FC<ContainerProps> = ({ children, as, css }) => (
    <BaseContainer as={as} css={css}>
        {children}
    </BaseContainer>
)

export default Container
