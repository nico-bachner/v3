import {
    Quote,
    Code,
    CodeBlock,
    Link,
    Image,
    Text,
} from '@nico-bachner/components-react';

import 'katex/dist/katex.min.css';
import styles from './components.module.css';

const H1: React.FC = ({ children }) => (
    <Text type="h1" className={styles.h1}>
        {children}
    </Text>
);

const H2: React.FC<{ id?: string }> = ({ children, id }) => (
    <Text type="h2" id={id} className={styles.h2}>
        {children}
    </Text>
);

const H3: React.FC = ({ children }) => (
    <Text type="h3" className={styles.h3}>
        {children}
    </Text>
);

const Strong: React.FC = ({ children }) => (
    <Text type="strong">{children}</Text>
);

const P: React.FC = ({ children }) => (
    <Text className={styles.p}>{children}</Text>
);

const A: React.FC<{ href: string }> = ({ children, href }) => (
    <Link href={href} variant="highlight">
        {children}
    </Link>
);

const OL: React.FC = ({ children }) => (
    <ol className={styles.ol}>{children}</ol>
);

const UL: React.FC = ({ children }) => (
    <ul className={styles.ul}>{children}</ul>
);

const Pre: React.FC = ({ children }) => (
    <CodeBlock className={styles.pre}>{children}</CodeBlock>
);

const Blockquote: React.FC = ({ children }) => (
    <Quote className={styles.blockquote}>{children}</Quote>
);

export const MDXComponents = {
    // override mdx default components
    h1: H1,
    h2: H2,
    h3: H3,
    strong: Strong,
    p: P,
    a: A,
    inlineCode: Code,
    pre: Pre,
    ol: OL,
    ul: UL,
    blockquote: Blockquote,

    // add custom components
    Image,
};
