import styles from '$lib/styles/Views.module.css';

import { useState, useEffect } from 'react';
import supabase from '$lib/utils/supabase';

import Head from '$lib/components/Head';
import Auth from '$lib/components/Auth';
import ViewsComponent from '$lib/components/Views';

type User = {
    id: string;
    app_metadata: {
        provider?: string;
        [key: string]: any;
    };
    user_metadata: {
        [key: string]: any;
    };
    aud: string;
    confirmation_sent_at?: string;
    email?: string;
    created_at: string;
    confirmed_at?: string;
    last_sign_in_at?: string;
    role?: string;
    updated_at?: string;
};

type Session = {
    provider_token?: string | null;
    access_token: string;
    /**
     * The number of seconds until the token expires (since it was issued). Returned when a login is confirmed.
     */
    expires_in?: number;
    /**
     * A timestamp of when the token will expire. Returned when a login is confirmed.
     */
    expires_at?: number;
    refresh_token?: string;
    token_type: string;
    user: User | null;
};

const Views = () => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
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
