import {
    getSlugs,
    getFile,
    getFileData,
    getContent,
    getReadingTime,
} from '@lib/mdx';
import { getUpdated } from '@lib/github';

import Head from 'next/head';
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
    const slug = params?.slug ? params?.slug.toString() : '';

    const date_updated = await getUpdated('content/articles/', slug);
    const file = await getFile('content/articles/', slug);

    const content = await getContent(file);
    const data = getFileData(file);
    const time = getReadingTime(file);

    const props: ArticleProps = {
        ...data,
        content,
        slug,
        time,
        date_updated,
    };

    return { props };
};

const Article: NextPage<ArticleProps> = (article) => {
    return (
        <main>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content={article.description} />
                {article.canonical_url && (
                    <>
                        <link rel="canonical" href={article.canonical_url} />
                        <meta
                            property="og:url"
                            content={article.canonical_url}
                        />
                    </>
                )}
            </Head>

            <MDX content={article.content} />

            <p className="max-w-2xl mx-auto my-20 flex justify-between">
                Last updated:{' '}
                {new Date(article.date_updated).toLocaleDateString()}
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
