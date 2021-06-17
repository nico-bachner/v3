import { getSlugs } from '@lib/fs';
import { getArticleProps } from '@lib/articles';

import Head from '@components/Head';
import Link from '@components/Link';
import MDX from '@components/MDX';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs('content/articles/', 'mdx');

    return {
        paths: slugs.map((slug) => {
            return {
                params: {
                    slug,
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (params && typeof params.slug == 'string') {
        const props = await getArticleProps(params.slug);

        return { props };
    }

    return {
        notFound: true,
    };
};

const Article: NextPage<ArticleProps> = ({
    title,
    description,
    slug,
    mdx_content,
    updated,
    edit_url,
    canonical_url,
}) => (
    <main>
        <Head
            title={title}
            description={description}
            slug={slug}
            type="article"
        >
            <link rel="canonical" href={canonical_url} />
            <meta property="og:url" content={canonical_url} />
        </Head>

        <MDX content={mdx_content} />

        <p className="flex justify-between max-w-2xl mx-auto my-16 text-strong">
            Last updated:{' '}
            {updated ? new Date(updated).toLocaleDateString() : 'Never'}
            <Link href={edit_url} variant="highlight">
                Edit on GitHub
            </Link>
        </p>
    </main>
);

export default Article;
