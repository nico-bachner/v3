import {
    Blockquote,
    Code,
    CodeBlock,
    Link,
    Image,
    Text,
} from '@nico-bachner/components-react';
import List from './List';

const H1: React.FC = ({ children }) => (
    <Text type="h1" marginEnd={2}>
        {children}
    </Text>
);

const H2: React.FC = ({ children }) => (
    <Text type="h2" marginStart={6} marginEnd={3}>
        {children}
    </Text>
);

const H3: React.FC = ({ children }) => (
    <Text type="h3" marginStart={6} marginEnd={4}>
        {children}
    </Text>
);

const Strong: React.FC = ({ children }) => (
    <Text type="strong">{children}</Text>
);

const P: React.FC = ({ children }) => (
    <Text type="p" marginStart={6} marginEnd={5}>
        {children}
    </Text>
);

type MDXLinkProps = {
    href: string;
};

const MDXLink: React.FC<MDXLinkProps> = ({ href, children }) => (
    <Link href={href} variant="highlight">
        {children}
    </Link>
);

const OrderedList: React.FC = ({ children }) => (
    <List type="ordered">{children}</List>
);

const UnorderedList: React.FC = ({ children }) => (
    <List type="unordered">{children}</List>
);

export const MDXComponents = {
    // override mdx default components
    h1: H1,
    h2: H2,
    h3: H3,
    strong: Strong,
    p: P,
    a: MDXLink,
    inlineCode: Code,
    pre: CodeBlock,
    ol: OrderedList,
    ul: UnorderedList,
    blockquote: Blockquote,

    // add custom components
    Image,
};
