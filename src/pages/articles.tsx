import styles from '$lib/styles/Articles.module.css';

import { getMDXContent } from '@nico-bachner/mdx/content';
import { getFile } from '$lib/utils/fs';
import { getArticles } from '$lib/utils/data/articles';

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
    const file = await getFile({
        basePath: ['translations'],
        path: [locale as string, 'articles'],
        extension: 'mdx',
    });

    const props: ArticlesProps = {
        content: await getMDXContent(file),
        articles: await getArticles(),
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
