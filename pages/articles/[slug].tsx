import { getArticleSlugs, getArticleProps } from '@lib/articles';

import Head from '@components/Head';
import MDX from '@components/MDX';

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
    <main>
        <Head
            title={title}
            description={description}
            slug={slug}
            type="article"
            canonical_url={canonical_url ?? undefined}
        />

        <MDX
            mdx_content={mdx_content}
            last_updated={last_updated}
            edit_url={edit_url}
        />
    </main>
);

export default Article;
