import styles from '@lib/styles/Home.module.css';

import { fetchTranslation } from '@lib/utils/translation';
import { fetchArticlesData } from '@lib/utils/data/articles';

import MDX from '@nico-bachner/mdx';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';
import { ArticleCard } from '@lib/components/Card';

import type { NextPage, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/utils';

type ArticlesProps = {
    content: MDXContent;
    articles: ArticleData[];
};

const getStaticProps: GetStaticProps<ArticlesProps> = async ({ locale }) => ({
    props: {
        content: await fetchTranslation({
            locale,
            path: ['articles'],
        }),
        articles: await fetchArticlesData(),
    },
});

const Articles: NextPage<ArticlesProps> = ({ content, articles }) => (
    <Layout width="sm">
        <Head
            title="Articles | Nico Bachner"
            description="Nico Bachner's Articles"
        />

        <MDX content={content} />

        <div className={styles.grid}>
            {articles.map((article) => (
                <ArticleCard
                    key={article.path[article.path.length - 1]}
                    type="h2"
                    {...article}
                />
            ))}
        </div>
    </Layout>
);

export { getStaticProps };

export default Articles;
