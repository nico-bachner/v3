import styles from '$lib/styles/Articles.module.css';

import { getArticles } from '$lib/utils/data/articles';
import { useI18n } from '$lib/hooks/useI18n';

import { Text } from '@nico-bachner/components-react';
import Head from '$lib/components/Head';
import ArticleCard from '$lib/components/ArticleCard';

import type { NextPage, GetStaticProps } from 'next';

interface ArticlesPageProps {
    articles: ArticleData[];
}

export const getStaticProps: GetStaticProps = async () => {
    const articles = await getArticles();

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
        <main className={styles.main}>
            <Head
                title="Articles | Nico Bachner"
                description="Nico Bachner's Articles"
            />
            <Text type="h1">{i18n.articles.title}</Text>
            <Text margin="prose">{i18n.articles.content}</Text>
            <div className={styles.grid}>
                {articles.map((article) => (
                    <ArticleCard key={article.title} {...article} />
                ))}
            </div>
        </main>
    );
};

export default Articles;
