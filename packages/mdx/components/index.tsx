import 'katex/dist/katex.min.css';
import styles from './index.module.css';

import {
    Quote,
    Code,
    CodeBlock,
    Link,
    Figure,
    Image,
} from '@nico-bachner/components-react';
import List from './List';
import Table from './Table';
import Text from './Text';

const A: React.FC<{ href: string }> = ({ children, href }) => (
    <Link href={href} variant="highlight">
        {children}
    </Link>
);

const Pre: React.FC = ({ children }) => (
    <CodeBlock className={styles.pre}>{children}</CodeBlock>
);

const Blockquote: React.FC = ({ children }) => (
    <Quote className={styles.blockquote}>{children}</Quote>
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
    ...Text,
    ...List,
    ...Table,

    a: A,
    inlineCode: Code,
    pre: Pre,
    blockquote: Blockquote,

    // Custom Components
    Figure: MDXFigure,
    Image: MDXImage,
};
