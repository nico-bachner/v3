import { MDXRemote } from 'next-mdx-remote';

import Link from './Link';
import Image from './Image';
import Repositories from './Repositories';

const Wrapper: React.FC = ({ children }) => (
    <article className="mdx">{children}</article>
);

const MDXComponents = {
    // override mdx default components
    wrapper: Wrapper,
    a: Link,

    // add custom components
    Image,
    Repositories,
};

interface MDXProps {
    content: MDXContent;
}

const MDX: React.VFC<MDXProps> = ({ content }) => (
    <MDXRemote {...content} components={MDXComponents} />
);

export default MDX;
