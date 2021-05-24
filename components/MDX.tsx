import { MDXRemote } from 'next-mdx-remote';

import Link from './Link';
import Image, { ImageProps } from './Image';

const MDXImage: React.VFC<ImageProps> = (props) => (
    <div className="max-w-3xl mx-auto my-8 sm:my-12">
        <Image {...props} className="mx-auto max-w-max" />
    </div>
);

const MDXWrapper: React.FC = ({ children }) => (
    <article className="mdx">{children}</article>
);

const MDXComponents = {
    wrapper: MDXWrapper,
    a: Link,
    Image: MDXImage,
};

interface MDXProps {
    content: MDXContent;
}

const MDX: React.VFC<MDXProps> = ({ content }) => (
    <MDXRemote {...content} components={MDXComponents} />
);

export default MDX;
