import { MDXRemote } from 'next-mdx-remote';

import Code from './Code';
import CodeBlock from './CodeBlock';
import Link from './Link';
import Image from './Image';

const MDXWrapper: React.FC = ({ children }) => (
    <article className="max-w-2xl mx-auto">{children}</article>
);
const H1: React.FC = ({ children }) => (
    <h1 className="mt-0 mb-4">{children}</h1>
);
const H2: React.FC = ({ children }) => (
    <h2 className="mt-16 mb-4">{children}</h2>
);
const H3: React.FC = ({ children }) => (
    <h3 className="mt-12 mb-4">{children}</h3>
);
const H4: React.FC = ({ children }) => (
    <h4 className="mt-8 mb-4">{children}</h4>
);
const P: React.FC = ({ children }) => <p className="my-4">{children}</p>;

const MDXComponents = {
    // override mdx default components
    wrapper: MDXWrapper,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    inlineCode: Code,
    code: CodeBlock,
    a: Link,

    // add custom components
    Image,
};

interface MDXProps {
    content: MDXContent;
}

const MDX: React.VFC<MDXProps> = ({ content }) => (
    <MDXRemote {...content} components={MDXComponents} />
);

export default MDX;
