import {
    Quote,
    Code,
    CodeBlock,
    Link,
    Figure,
    Image,
    Table,
    Text,
} from '@nico-bachner/components-react';

import Script from 'next/script';
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

const H3: React.FC<{ id?: string }> = ({ children, id }) => (
    <Text type="h3" id={id} className={styles.h3}>
        {children}
    </Text>
);

const H4: React.FC<{ id?: string }> = ({ children, id }) => (
    <Text type="h4" id={id} className={styles.h4}>
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

const MDXTable: React.FC = ({ children }) => (
    <Table.Root className={styles.table}>{children}</Table.Root>
);

const MDXFigure: React.FC<{ id: string; caption: string }> = ({
    children,
    ...props
}) => (
    <Figure {...props} className={styles.figure}>
        {children}
    </Figure>
);

const MDXImage: React.VFC<{
    src: string;
    alt: string;
    width: number;
    height: number;
}> = ({ src, alt, width, height }) => (
    <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
    />
);

export const MDXComponents = {
    // override mdx default components
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    strong: Strong,
    p: P,
    a: A,
    inlineCode: Code,
    pre: Pre,
    ol: OL,
    ul: UL,
    blockquote: Blockquote,
    table: MDXTable,
    thead: Table.Head,
    tbody: Table.Body,
    tr: Table.Row,
    th: Table.HeadItem,
    td: Table.BodyItem,

    // add custom components
    Figure: MDXFigure,
    Image: MDXImage,
};
