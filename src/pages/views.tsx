import styles from '$lib/styles/Views.module.css';

import { useState, useEffect } from 'react';
import supabase from '$lib/utils/supabase';

import Head from '$lib/components/Head';
import Auth from '$lib/components/Auth';
import ViewsComponent from '$lib/components/Views';

const Views = () => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        setSession(supabase.auth.session());
    }, []);

    return (
        <main className={styles.main}>
            <Head
                title="Views | Nico Bachner"
                description="Nico Bachner's Page Views"
            />

            {session ? <ViewsComponent /> : <Auth />}
        </main>
    );
};

export default Views;
