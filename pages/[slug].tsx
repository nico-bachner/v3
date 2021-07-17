import { getPageSlugs, getPageProps } from 'lib/pages';

import Head from 'components/Head';
import MDX from 'components/MDX';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    return {
        paths: await getPageSlugs(locales as Locale[]),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({
    params,
    locale,
}) => {
    if (params && locale && typeof params.slug == 'string') {
        return { props: await getPageProps(params.slug, locale as Locale) };
    }

    return {
        notFound: true,
    };
};

const Project: NextPage<PageProps> = ({
    title,
    description,
    slug,
    mdx_content,
    last_updated,
    edit_url,
}) => (
    <main>
        <Head title={title} description={description} slug={slug} />

        <MDX
            mdx_content={mdx_content}
            last_updated={last_updated}
            edit_url={edit_url}
        />
    </main>
);

export default Project;
