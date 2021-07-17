import dynamic from 'next/dynamic';
import * as components from '@nico-bachner/components';

import { Link, Text } from '@nico-bachner/components';

type MDXLinkProps = {
    href: string;
};

const MDXLink: React.FC<MDXLinkProps> = ({ href, children }) => (
    <Link href={href} variant="highlight">
        {children}
    </Link>
);

const H1: React.FC = ({ children }) => (
    <Text type="h1" margin="tight">
        {children}
    </Text>
);

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

const P: React.FC = ({ children }) => <Text margin="prose">{children}</Text>;

export const MDXComponents = {
    // override mdx default components
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    a: MDXLink,

    // add custom components
    ...components,
};
