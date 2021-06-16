import { getSlugs } from '@lib/mdx';
import { getArticleProps } from '@lib/articles';

import Head from '@components/Head';
import Link from '@components/Link';
import MDX from '@components/MDX';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs('content/articles/');

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
    if (typeof params?.slug == 'string') {
        return { props: await getArticleProps(params.slug) };
    }
    return {
        notFound: true,
    };
};

const Article: NextPage<ArticleProps> = ({
    content,
    canonical_url,
    date_published,
    date_updated,
    edit_url,
    ...head
}) => {
    const dateUpdated = date_updated
        ? new Date(date_updated)
        : date_published
        ? new Date(date_published)
        : new Date();

    return (
        <main>
            <Head {...head} type="article">
                <link rel="canonical" href={canonical_url} />
                <meta property="og:url" content={canonical_url} />
            </Head>

            <MDX content={content} />

            <p className="flex justify-between max-w-2xl mx-auto my-16 text-strong">
                Last updated: {dateUpdated.toLocaleDateString()}
                <Link href={edit_url} variant="highlight">
                    Edit on GitHub
                </Link>
            </p>
        </main>
    );
};

export default Article;
