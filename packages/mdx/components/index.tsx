import 'katex/dist/katex.min.css'

import {
    Code,
    CodeBlock,
    Divider,
    Image,
    Link,
} from '@nico-bachner/components-react'
import { styled } from '@nico-bachner/css'
import { spacing, utils, typography } from '@nico-bachner/design-tokens'
import List from './List'
import Table from './Table'
import Text from './Text'

const Wrapper = styled('div', {
    mx: 'auto',
    wmax: utils.sizes.md,
})

const A: React.FC<{ href: string }> = ({ children, href }) => (
    <Link href={href} variant="highlight">
        {children}
    </Link>
)

const Hr: React.VFC = () => (
    <Wrapper>
        <Divider />
    </Wrapper>
)

const Pre: React.FC = ({ children }) => (
    <Wrapper
        css={{
            my: spacing[15],
            wmax: utils.sizes.lg,
        }}
    >
        <CodeBlock>{children}</CodeBlock>
    </Wrapper>
)

const Sup = styled('sup', {
    lineHeight: typography.lineHeights[0],
})

const MDXImage: React.VFC<{
    src: string
    alt: string
    width: number
    height: number
}> = ({ src, alt, width, height }) => (
    <Wrapper
        css={{
            marginBlock: spacing[8],
            maxWidth: utils.sizes.xl,
        }}
    >
        <Image src={src} alt={alt} width={width} height={height} />
    </Wrapper>
)

export const MDXComponents = {
    ...Text,
    ...List,
    ...Table,

    a: A,
    inlineCode: Code,
    pre: Pre,
    hr: Hr,
    sup: Sup,

    // Custom Components
    Image: MDXImage,
}
