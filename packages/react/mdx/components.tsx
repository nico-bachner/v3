import dynamic from 'next/dynamic';
import * as components from '@nico-bachner/components';

import { Code, CodeBlock, List, Link, Text } from '@nico-bachner/components';

const H1: React.FC = ({ children }) => <Text type="h1">{children}</Text>;

const H2: React.FC = ({ children }) => (
    <Text type="h2" margin="prose">
        {children}
    </Text>
);

const H3: React.FC = ({ children }) => (
    <Text type="h3" margin="prose">
        {children}
    </Text>
);

const P: React.FC = ({ children }) => (
    <Text type="p" margin="prose">
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

export const MDXComponents = {
    // override mdx default components
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    a: MDXLink,
    inlineCode: Code,
    pre: CodeBlock,
    ul: List,
    ol: OrderedList,

    // add custom components
    ...components,
};
