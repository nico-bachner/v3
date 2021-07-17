import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';

import Link from 'components/Link';
import Text from 'components/Text';
import Image from 'components/Image';

import styles from './MDX.module.css';

const A: React.FC<{
    href: string;
}> = ({ href, children }) => {
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

const H1: React.FC = ({ children }) => (
    <Text type="h1" margin="tight">
        {children}
    </Text>
);

const H2: React.FC = ({ children }) => (
    <Text type="h2" margin="prose">
        {children}
    </Text>
);

const H3: React.FC = ({ children }) => (
    <Text type="h3" margin="prose">
        {children}
    </Text>
);

const P: React.FC = ({ children }) => <Text margin="prose">{children}</Text>;

const MDXComponents = {
    // override mdx default components
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    a: A,

    // add custom components
    Image,
    Repositories: dynamic(() => import('components/Repositories')),
};

const MDX: React.VFC<MDXContent> = ({
    mdx_content,
    last_updated,
    edit_url,
}) => (
    <article className={styles.mdx}>
        <MDXRemote {...mdx_content} components={MDXComponents} />
        <Text>
            Last updated: {last_updated}
            <Link href={edit_url} variant="highlight">
                Edit on GitHub
            </Link>
        </Text>
    </article>
);

export default MDX;
