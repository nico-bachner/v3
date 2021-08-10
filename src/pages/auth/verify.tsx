import styles from '$styles/auth/Verify.module.css';

import { useRouter } from 'next/router';

import { Text, Link } from '@nico-bachner/components-react';

import type { NextPage } from 'next';

const Verify: NextPage = () => {
    const { query } = useRouter();

    return (
        <main className={styles.main}>
            <Text type="h1">Sign Up</Text>

            <Text margin={5}>
                Check your email (
                <Link href={`mailto:${query.email}`} variant="highlight">
                    {query.email}
                </Link>
                ) to verify your e-mail address.
            </Text>
        </main>
    );
};

export default Verify;
