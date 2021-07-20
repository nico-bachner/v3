import styles from '$lib/styles/404.module.css';

import Head from '$lib/components/Head';
import { Link, Text } from '@nico-bachner/components';

import type { NextPage } from 'next';

const NotFound: NextPage = () => (
    <main className={styles.main}>
        <Head
            title="404 | Nico Bachner"
            description="Page Not Found"
            slug="404"
        />
        <Text type="h1" space="loose">
            404 - Page Not Found
        </Text>
        <Text>
            It seems the page you were looking for does not exist. You should
            double-check the url to make sure you are looking for the right
            page.
        </Text>
        <Text>
            In the meantime, why not return to the{' '}
            <Link href="/" variant="highlight">
                Homepage
            </Link>
        </Text>
    </main>
);

export default NotFound;
