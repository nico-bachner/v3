import styles from 'styles/Page.module.css';

import dynamic from 'next/dynamic';
import { getPageSlugs, getPageProps } from 'lib/pages';

import { Link, Text } from '@nico-bachner/components';
import MDX from '@nico-bachner/mdx';
import Head from 'components/Head';

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

const Page: NextPage<PageProps> = ({
    title,
    description,
    slug,
    mdx_content,
    last_updated,
    edit_url,
}) => (
    <main className={styles.page}>
        <Head title={title} description={description} slug={slug} />

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

export default Page;
