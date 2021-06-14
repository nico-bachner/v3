import { getOrderedArticlesData } from '@lib/articles';
import { useI18n } from '@lib/hooks/i18n';

import Head from '@components/Head';
import { ArticleCard } from '@components/Card';

import styles from '@styles/Articles.module.css';

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
        <main className={styles.main}>
            <Head
                title="Articles | Nico Bachner"
                description="Nico Bachner's Articles"
                slug="articles"
            />
            <h1>{i18n.articles.title}</h1>
            <p>{i18n.articles.content}</p>
            <div>
                {articles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
        </main>
    );
};

export default Articles;
