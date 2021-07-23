import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '$lib/hooks/useSession';

export const useAuth = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push('/login');
        }
    });

    return session;
};
