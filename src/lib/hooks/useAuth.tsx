import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from '$lib/utils/supabase';

export const useAuth = () => {
    const router = useRouter();

    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        if (!supabase.auth.session() && router.asPath != '/login') {
            router.push('/login');
        }

        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, [router]);

    return {
        session,
    };
};
