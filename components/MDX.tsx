import { MDXRemote } from 'next-mdx-remote';

import Code from './Code';
import CodeBlock from './CodeBlock';
import Link from './Link';
import Image from './Image';

import type { LinkProps } from './Link';

const MDXWrapper: React.FC = ({ children }) => (
    <article className="mdx">{children}</article>
);

const MDXLink: React.FC<LinkProps> = ({ href, children }) => (
    <Link href={href} className="text-azure hover:underline">
        {children}
    </Link>
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
    a: MDXLink,

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
