import { styled } from '@nico-bachner/css'

import type { CSS } from '@nico-bachner/css'

const BaseContainer = styled('div')

type ContainerProps = {
    as?: keyof JSX.IntrinsicElements
    id?: string
    css?: CSS
}

const Container: React.FC<ContainerProps> = ({ children, as, id, css }) => (
    <BaseContainer as={as} id={id} css={css}>
        {children}
    </BaseContainer>
)

export default Container
