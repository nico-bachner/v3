import {
    getSlugs,
    getFile,
    getFileData,
    getContent,
    getReadingTime,
} from '../../lib/mdx';

import { useMDX } from '../../hooks/mdx';

import Meta from '../../components/Meta';
import Link from '../../components/Link';

import { ArticleProps } from '../../components/ArticleCard';
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

    const content = await getContent(file);
    const data = getFileData(file);
    const time = getReadingTime(file);

    const article = {
        content,
        data,
        time,
        slug,
    };

    return { props: article };
};

export default function Article(article: ArticleProps) {
    const published = new Date(article.data.published).toLocaleDateString();

    const mdx = useMDX(article.content);

    return (
        <main>
            <Meta
                title={article.data.title}
                description={article.data.summary}
            />
            <article>
                <h1 className="max-w-2xl mx-auto">{article.data.title}</h1>
                <div className="flex justify-between max-w-2xl mx-auto my-8 text-gray-light">
                    <p>Published {published}</p>
                    <p>{article.time} minute read</p>
                </div>
                {mdx}
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
