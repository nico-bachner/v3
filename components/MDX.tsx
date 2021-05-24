import { MDXRemote } from 'next-mdx-remote';

import Code from './Code';
import CodeBlock from './CodeBlock';
import Link from './Link';
import Image from './Image';

const MDXWrapper: React.FC = ({ children }) => (
    <article className="max-w-2xl mx-auto mdx">{children}</article>
);

/*
interface MDXCodeBlockProps {
    className?: string;
}

const MDXCodeBlock: React.FC<MDXCodeBlockProps> = ({ className, children }) => (
    <CodeBlock language={className.replace('language-', '')}>
        {children}
    </CodeBlock>
);
*/

const MDXComponents = {
    // override mdx default components
    wrapper: MDXWrapper,
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
