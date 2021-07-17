import styles from 'styles/Articles.module.css';

import { getArticlesData } from 'lib/articles';
import { useI18n } from 'hooks/i18n';

import { Text } from '@nico-bachner/components';
import Head from 'components/Head';
import ArticleCard from 'components/ArticleCard';

import type { NextPage, GetStaticProps } from 'next';

interface ArticlesPageProps {
    articles: ArticleData[];
}

export const getStaticProps: GetStaticProps = async () => {
    const articles = await getArticlesData();

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
                slug="articles"
            />
            <Text type="h1">{i18n.articles.title}</Text>
            <Text margin="prose">{i18n.articles.content}</Text>
            <div className={styles.grid}>
                {articles.map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                ))}
            </div>
        </main>
    );
};

export default Articles;
