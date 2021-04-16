import hydrate from 'next-mdx-remote/hydrate';

import {
    getSlugs,
    getFile,
    getFileData,
    getMDX,
    getReadingTime,
} from '../../lib/mdx';

import Head from 'next/head';
import Link from '../../components/Link';
import { ArticleProps } from '../../components/ArticleCard';

import { mdxComponents } from '../../components/MDX';

import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs('articles');

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

    const file = await getFile('articles', slug);

    const mdx = await getMDX(file);
    const data = getFileData(file);
    const time = getReadingTime(file);

    const article = {
        mdx,
        data,
        time,
        slug,
    };

    return { props: article };
};

export default function Article(article: ArticleProps) {
    const content = hydrate(article.mdx, {
        components: mdxComponents,
    });

    const published = new Date(article.data.published).toLocaleDateString();

    return (
        <main>
            <Head>
                <title>{article.data.title} | Nico Bachner</title>
            </Head>
            <article>
                <h1 className="max-w-2xl mx-auto">{article.data.title}</h1>
                <div className="flex justify-between max-w-2xl mx-auto my-8 text-gray-light">
                    <p>Published {published}</p>
                    <p>{article.time} minute read</p>
                </div>

                {content}
            </article>
            <p className="max-w-2xl mx-auto my-20 text-right">
                <Link
                    href={
                        'https://github.com/nico-bachner/v3/edit/main/articles/' +
                        article.slug +
                        '.mdx'
                    }
                >
                    Edit on GitHub
                </Link>
            </p>
        </main>
    );
}
