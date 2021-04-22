import Card from './Card';

import { useMDX } from '../hooks/mdx';

export interface MDXArticleProps {
    title: string;
    summary: string;
    published?: string;
}

export type ArticleProps = MDXArticleProps & {
    slug: string;
    time: number;
};

export const Article = (article: ArticleProps & { content: any }) => {
    const mdx = useMDX(article.content);

    return (
        <article>
            <h1 className="max-w-2xl mx-auto">{article.title}</h1>
            <div className="flex justify-between max-w-2xl mx-auto my-8 text-gray-light">
                {article.published && (
                    <p>
                        Published{' '}
                        {new Date(article.published).toLocaleDateString()}
                    </p>
                )}
                <p>{article.time} minute read</p>
            </div>
            {mdx}
        </article>
    );
};
