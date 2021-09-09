import { fetchViews } from '@lib/utils/views';

import { Table, Text } from '@nico-bachner/components-react';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';

import type { NextPage, GetServerSideProps } from 'next';

type Props = {
    views: {
        paths?: PathsItem[];
        locales?: LocalesItem[];
    };
};

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
    props: {
        views: await fetchViews(),
    },
});

const Visitors: NextPage<Props> = ({ views }) => (
    <Layout>
        <Head
            title="Visitors | Nico Bachner"
            description="Insights into the visitors of nicobachner.com"
        />
        <Text type="h1">Visitors</Text>

        <Text size={6} style={{ marginBlockStart: 'var(--space-3)' }}>
            Insights into the visitors of nicobachner.com
        </Text>

        <Text
            type="h2"
            style={{
                marginBlockStart: 'var(--space-9)',
                marginBlockEnd: 'var(--space-7)',
            }}
        >
            Page Views
        </Text>

        <Text
            type="h3"
            style={{
                marginBlockStart: 'var(--space-7)',
                marginBlockEnd: 'var(--space-5)',
            }}
        >
            By Path
        </Text>
        <Table
            variant={['monospace', 'tabular']}
            head={['Path', 'Views']}
            body={views.paths?.map(({ path, views }) => [
                decodeURIComponent(path),
                views,
            ])}
        />

        <Text
            type="h3"
            style={{
                marginBlockStart: 'var(--space-7)',
                marginBlockEnd: 'var(--space-5)',
            }}
        >
            By Locale (Language and Region)
        </Text>
        <Table
            variant={['monospace', 'tabular']}
            head={['Path', 'Views']}
            body={views.locales?.map(({ locale, views }) => [locale, views])}
        />
    </Layout>
);

export default Visitors;
