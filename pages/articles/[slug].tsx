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

import Article, { ArticleProps } from '../../components/Article';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function ArticlePage(article: ArticleProps & { content: any }) {
    const mdx = useMDX(article.content);

    return (
        <main>
            <Meta title={article.title} description={article.summary} />
            <Article {...article}>{mdx}</Article>
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
    const data = getFileData(file, 'article');
    const time = getReadingTime(file);

    const article = {
        ...data,
        content,
        time,
        slug,
    };

    return { props: article };
};
