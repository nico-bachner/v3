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
import Article from '../../components/Article';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import type { ArticleProps } from '../../components/Article';

type Props = ArticleProps & { content: any };

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

    const props: Props = {
        ...data,
        content,
        slug,
        time,
    };

    return { props };
};

const ArticlePage: NextPage<Props> = (article) => {
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
};

export default ArticlePage;
