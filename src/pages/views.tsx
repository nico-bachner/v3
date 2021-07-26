import styles from '$lib/styles/Views.module.css';

import { getAllViews } from '$lib/utils/views';
import supabase from '$lib/utils/supabase';

import { Button, Table, Text } from '@nico-bachner/components-react';
import Head from '$lib/components/Head';
import Auth from '$lib/components/Auth';

import type { NextPage, GetServerSideProps } from 'next';

type Props = {
    views: ViewItem[];
};

export const getServerSideProps: GetServerSideProps = async () => {
    const views = await getAllViews();

    const props: Props = {
        views,
    };

    return {
        props,
    };
};

const Views: NextPage<Props> = ({ views }) => (
    <Auth>
        <main className={styles.main}>
            <Head
                title="Views | Nico Bachner"
                description="Nico Bachner's Page Views"
            />
            <Text type="h1">Views</Text>
            <Text margin="tight">Page Views</Text>
            <Table
                head={['Path', 'Views']}
                body={views
                    .sort((a, b) => b.views - a.views)
                    .map(({ path, views }) => [path, views])}
            />
            <div className={styles.bottom}>
                <Button
                    onClick={() => {
                        supabase.auth.signOut();
                    }}
                >
                    Sign Out
                </Button>
            </div>
        </main>
    </Auth>
);

export default Views;
