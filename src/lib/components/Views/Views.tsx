import styles from './Views.module.css';

import { useState, useEffect } from 'react';
import supabase from '$lib/utils/supabase';

import { Button, Table, Text } from '@nico-bachner/components-react';

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
        <div className={styles.views}>
            <Text type="h1">Views</Text>
            <Text margin="tight">Page Views</Text>
            <Table
                head={['Path', 'Views']}
                body={views
                    .sort((a, b) => b.views - a.views)
                    .map(({ path, views }) => [path, views])}
            />
            <div className={styles.bottom}>
                <Button onClick={() => supabase.auth.signOut()}>
                    Sign Out
                </Button>
            </div>
        </div>
    );
};

export default Views;
