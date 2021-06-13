import { getOrderedArticlesData } from '@lib/articles';
import { useI18n } from '@lib/hooks/i18n';

import Head from '@components/Head';
import ArticleCard from '@components/ArticleCard';

import type { NextPage, GetStaticProps } from 'next';

interface ArticlesPageProps {
    articles: CardProps<ArticleData>[];
}

export const getStaticProps: GetStaticProps = async () => {
    const articles = await getOrderedArticlesData();

    const props: ArticlesPageProps = {
        articles,
    };

    return {
        props,
    };
};

const Articles: NextPage<ArticlesPageProps> = ({ articles }) => {
    const i18n = useI18n();

    return (
        <main className="max-w-2xl mx-auto">
            <Head
                title="Articles | Nico Bachner"
                description="Nico Bachner's Articles"
                slug="articles"
            />
            <h1>{i18n.articles.title}</h1>
            <p className="mt-4">{i18n.articles.subtitle}</p>
            <div className="grid gap-4 my-6">
                {articles.map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                ))}
            </div>
        </main>
    );
};

export default Articles;
