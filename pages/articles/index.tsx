import { getArticlesData } from '@lib/articles';
import { useI18n } from '@hooks/i18n';

import Head from '@components/Head';
import { ArticleCard } from '@components/Card';

import styles from '@styles/Articles.module.css';

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
            <h1>{i18n.articles.title}</h1>
            <p>{i18n.articles.content}</p>
            <div>
                {articles.map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                ))}
            </div>
        </main>
    );
};

export default Articles;
