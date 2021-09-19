import styles from '@lib/styles/Home.module.css';

import { fetchTranslation } from '@lib/utils/translation';
import { fetchPagesData } from '@lib/utils/data/pages';

import MDX from '@nico-bachner/mdx';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';
import { PageCard } from '@lib/components/Card';

import type { NextPage, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/utils';

type PagesProps = {
    content: MDXContent;
    pages: PageData[];
};

export const getStaticProps: GetStaticProps<PagesProps> = async ({
    locale,
}) => ({
    props: {
        content: await fetchTranslation({
            locale,
            path: ['pages'],
        }),
        pages: await fetchPagesData(),
    },
});

const Pages: NextPage<PagesProps> = ({ content, pages }) => (
    <Layout width="sm">
        <Head title="Pages | Nico Bachner" description="Nico Bachner's Pages" />

        <MDX content={content} />

        <div className={styles.grid}>
            {pages.map((page) => (
                <PageCard
                    key={page.path[page.path.length]}
                    type="h2"
                    {...page}
                />
            ))}
        </div>
    </Layout>
);

export default Pages;
