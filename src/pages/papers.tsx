import styles from '@lib/styles/Home.module.css';

import { fetchTranslation } from '@lib/utils/translation';
import { fetchPapersData } from '@lib/utils/data/papers';

import MDX from '@nico-bachner/mdx';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';
import { PaperCard } from '@lib/components/Card';

import type { NextPage, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/utils';

type PapersProps = {
    content: MDXContent;
    papers: PaperData[];
};

const getStaticProps: GetStaticProps<PapersProps> = async ({ locale }) => ({
    props: {
        content: await fetchTranslation({
            locale,
            path: ['papers'],
        }),
        papers: await fetchPapersData(),
    },
});

const Papers: NextPage<PapersProps> = ({ content, papers }) => (
    <Layout width="sm">
        <Head
            title="Papers | Nico Bachner"
            description="Nico Bachner's Papers"
        />

        <MDX content={content} />

        <div className={styles.grid}>
            {papers.map((paper) => (
                <PaperCard key={paper.path[paper.path.length]} {...paper} />
            ))}
        </div>
    </Layout>
);

export { getStaticProps };

export default Papers;
