import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';

import Link from '@components/Link';
import Image from '@components/Image';
import * as FileTree from '@components/FileTree';

import styles from './MDX.module.css';

type MDXLinkProps = {
    href: string;
};

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
    a: MDXLink,

    // add custom components
    Image,
    ...FileTree,
    Repositories: dynamic(() => import('@components/Repositories')),
};

const MDX: React.VFC<MDXContent> = ({
    mdx_content,
    last_updated,
    edit_url,
}) => (
    <article className={styles.mdx}>
        <MDXRemote {...mdx_content} components={MDXComponents} />
        <p>
            Last updated: {last_updated}
            <Link href={edit_url} variant="highlight">
                Edit on GitHub
            </Link>
        </p>
    </article>
);

export default MDX;
