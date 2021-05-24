import Link from '@components/Link';

import type { NextPage } from 'next';

const NotFound: NextPage = () => (
    <main>
        <h1>404 - Page not found</h1>
        <p>
            It seems the page you were looking for does not exist. You should
            double-check the url to make sure you are looking for the right
            page.
        </p>
        <p>
            In the meantime, why not return to the{' '}
            <Link href="/">Homepage</Link>
        </p>
    </main>
);

export default NotFound;
