import { useEffect } from 'react';
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

const Article: NextPage<ArticleProps> = (article) => {
    const date_updated = new Date(
        article.date_updated ?? article.date_published
    );

    return (
        <main>
            <Head
                title={article.title}
                description={article.description}
                slug={article.slug}
                type="article"
            >
                <link rel="canonical" href={article.canonical_url} />
                <meta property="og:url" content={article.canonical_url} />
            </Head>

            <MDX content={article.content} />

            <p className="flex justify-between max-w-2xl mx-auto my-16 text-strong">
                Last updated: {date_updated.toLocaleDateString()}
                <Link
                    href={`https://github.com/nico-bachner/v3/edit/main/content/articles/${article.slug}.mdx`}
                >
                    Edit on GitHub
                </Link>
            </p>
        </main>
    );
};

export default Article;
