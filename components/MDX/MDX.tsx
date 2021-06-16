import { MDXRemote } from 'next-mdx-remote';

import Link from '@components/Link';
import Code from '@components/Code';
import Image from '@components/Image';
import Repositories from '@components/Repositories';
import FileTree, { Folder, File } from '@components/FileTree';

import styles from './MDX.module.css';

const Wrapper: React.FC = ({ children }) => (
    <article className={styles.mdx}>{children}</article>
);

interface MDXLinkProps {
    href: string;
}

const MDXLink: React.FC<MDXLinkProps> = ({ href, children }) => {
    if (href.startsWith('/') || href.startsWith('#')) {
        return (
            <Link href={href} variant="highlight">
                {children}
            </Link>
        );
    }
    return (
        <Link href={href} variant="highlight" external>
            {children}
        </Link>
    );
};

const MDXComponents = {
    // override mdx default components
    wrapper: Wrapper,
    a: MDXLink,
    inlineCode: Code,

    // add custom components
    Image,
    Repositories,
    FileTree,
    Folder,
    File,
};

interface MDXProps {
    content: MDXContent;
}

const MDX: React.VFC<MDXProps> = ({ content }) => (
    <MDXRemote {...content} components={MDXComponents} />
);

export default MDX;
