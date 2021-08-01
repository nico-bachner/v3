import styles from '$lib/styles/Analytics.module.css';

import { useAuth } from '$lib/hooks/useAuth';
import { fetchAllViews } from '$lib/utils/views';

import { Table, Text } from '@nico-bachner/components-react';
import Head from '$lib/components/Head';

import type { NextPage, GetServerSideProps } from 'next';

type Props = {
    views: ViewItem[];
};

export const getServerSideProps: GetServerSideProps = async () => {
    const views = await fetchAllViews();

    const props: Props = {
        views,
    };

    return {
        props,
    };
};

const Analytics: NextPage<Props> = ({ views }) => {
    const { session } = useAuth();

    if (session) {
        return (
            <main className={styles.main}>
                <Head
                    title="Analytics | Nico Bachner"
                    description="Nico Bachner's Analytics"
                />
                <Text type="h1">Analytics</Text>
                <Text size={6} marginStart={3} marginEnd={5}>
                    Statistics about page views, etc.
                </Text>

                <Text type="h2">Page Views</Text>
                <Table
                    head={['Path', 'Views']}
                    body={views
                        .sort((a, b) => b.views - a.views)
                        .map(({ path, views }) => [path, views])}
                />
            </main>
        );
    }

    return <></>;
};

export default Analytics;
