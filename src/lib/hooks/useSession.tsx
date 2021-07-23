import { useState, useEffect } from 'react';
import supabase from '$lib/utils/supabase';

export const useSession = () => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return session;
};
