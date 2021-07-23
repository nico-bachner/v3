import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '$lib/hooks/useSession';
import supabase from '$lib/utils/supabase';

export const useAuth = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!supabase.auth.session()) {
            router.push('/login');
        }
    });

    return session ? true : false;
};
