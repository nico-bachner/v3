import { getArticles } from '../../lib/mdx';
import { useI18n } from '../../lib/hooks/i18n';
import { translations } from '../../content/i18n';

import ArticleCard from '../../components/ArticleCard';

import type { NextPage, GetStaticProps } from 'next';

interface ArticlesProps {
    articles: ArticleCardProps[];
}

export const getStaticProps: GetStaticProps = async () => {
    const articles = await getArticles();

    const props: ArticlesProps = {
        articles,
    };

    return {
        props,
    };
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
    const i18n = useI18n(translations, 'en');

    return (
        <main className="max-w-2xl mx-auto">
            <h1>{i18n.articles.title}</h1>
            <p className="mt-4">{i18n.articles.subtitle}</p>
            <div className="grid gap-8 my-8">
                {articles.map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                ))}
            </div>
        </main>
    );
};

export default Articles;
