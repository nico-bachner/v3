import styles from '$styles/Articles.module.css';

import { fetchTranslation } from '$lib/utils/translation';
import { fetchArticlesData } from '$lib/utils/data/articles';

import MDX from '@nico-bachner/mdx';
import Head from '$lib/components/Head';
import Card from '$lib/components/ArticleCard';

import type { NextPage, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/types';

type ArticlesProps = {
    content: MDXContent;
    articles: ArticleData[];
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const props: ArticlesProps = {
        content: await fetchTranslation(locale, ['articles']),
        articles: await fetchArticlesData(),
    };

    return { props };
};

const Articles: NextPage<ArticlesProps> = ({ content, articles }) => (
    <main className={styles.main}>
        <Head
            title="Articles | Nico Bachner"
            description="Nico Bachner's Articles"
        />

        <div className={styles.center}>
            <MDX content={content} />
        </div>

        <div className={styles.grid}>
            {articles.map((article) => (
                <Card key={article.title} type="h2" {...article} />
            ))}
        </div>
    </main>
);

export default Articles;
