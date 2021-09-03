import {
    Blockquote,
    Code,
    CodeBlock,
    Link,
    Image,
    Text,
} from '@nico-bachner/components-react';

import styles from './MDX.module.css';

const H1: React.FC = ({ children }) => (
    <Text type="h1" margin={[0, 3]}>
        {children}
    </Text>
);

const H2: React.FC = ({ children }) => (
    <Text type="h2" className={styles.heading}>
        {children}
    </Text>
);

const H3: React.FC = ({ children }) => (
    <Text type="h3" className={styles.heading}>
        {children}
    </Text>
);

const Strong: React.FC = ({ children }) => (
    <Text type="strong">{children}</Text>
);

const P: React.FC = ({ children }) => (
    <Text type="p" className={styles.paragraph}>
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
    <ol className={styles.orderedList}>{children}</ol>
);

const UnorderedList: React.FC = ({ children }) => (
    <ul className={styles.unorderedList}>{children}</ul>
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
