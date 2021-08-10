import { MDXRemote } from 'next-mdx-remote';
import { MDXComponents } from './components';

import type { MDXContent } from './types';

type MDXProps = {
    content: MDXContent;
    components?: Record<string, React.ReactNode>;
};

const MDX: React.VFC<MDXProps> = ({ content, components }) => (
    <MDXRemote
        {...content}
        components={{
            ...MDXComponents,
            ...components,
        }}
    />
);

export default MDX;
