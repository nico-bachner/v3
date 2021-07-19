import styles from '$lib/styles/Article.module.css';

import { getArticleSlugs, getArticleProps } from '$lib/utils/articles';

import { Link, Text } from '@nico-bachner/components';
import MDX from '@nico-bachner/mdx';
import Head from '$lib/components/Head';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    return {
        paths: await getArticleSlugs(locales as Locale[]),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
    params,
    locale,
}) => {
    if (params && locale && typeof params.slug == 'string') {
        return { props: await getArticleProps(params.slug, locale as Locale) };
    }

    return {
        notFound: true,
    };
};

const Article: NextPage<ArticleProps> = ({
    title,
    description,
    slug,
    mdx_content,
    last_updated,
    edit_url,
    canonical_url,
}) => (
    <main className={styles.page}>
        <Head
            title={title}
            description={description}
            slug={slug}
            type="article"
            canonical_url={canonical_url ?? undefined}
        />

        <MDX content={mdx_content} />

        <div className={styles.bottom}>
            <Text>Last updated: {last_updated}</Text>
            <Text>
                <Link href={edit_url} variant="highlight">
                    Edit on GitHub
                </Link>
            </Text>
        </div>
    </main>
);

export default Article;
