import styles from '$lib/styles/Views.module.css';

import { useState, useEffect } from 'react';

import { Table, Text } from '@nico-bachner/components-react';
import Head from '$lib/components/Head';

const Views = () => {
    const [views, setViews] = useState<ViewItem[]>([]);

    const getViews = async () => {
        const res = await fetch(`/api/views`);
        const views: ViewItem[] = await res.json();

        setViews(views);
    };

    useEffect(() => {
        getViews();
    }, []);

    return (
        <main className={styles.main}>
            <Head
                title="Views | Nico Bachner"
                description="Nico Bachner's Page Views"
            />
            <Text type="h1">Views</Text>
            <Text margin="tight">Page Views</Text>
            <Table
                head={['Path', 'Views']}
                body={views.map(({ path, views }) => [path, views])}
            />
        </main>
    );
};

export default Views;
