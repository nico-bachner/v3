import { Text } from '@nico-bachner/components-react'

const H1: React.FC = ({ children }) => (
    <Text type="h1" width="md" marginBottom={12}>
        {children}
    </Text>
)

const H2: React.FC<{ id?: string }> = ({ children, id }) => (
    <Text type="h2" width="md" margin={[13, 11]} id={id}>
        {children}
    </Text>
)

const H3: React.FC<{ id?: string }> = ({ children, id }) => (
    <Text type="h3" width="md" margin={[12, 11]} id={id}>
        {children}
    </Text>
)

const H4: React.FC<{ id?: string }> = ({ children, id }) => (
    <Text type="h4" width="md" margin={11} id={id}>
        {children}
    </Text>
)

const P: React.FC = ({ children }) => (
    <Text type="p" width="md" margin={10}>
        {children}
    </Text>
)

const Strong: React.FC = ({ children }) => <Text type="strong">{children}</Text>

const MDXText = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    strong: Strong,
    p: P,
}

export default MDXText
