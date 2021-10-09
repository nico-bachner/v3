import styles from './Breadcrumbs.module.css';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Text } from '@nico-bachner/components-react';
import Link from '@lib/components/Link';

type Breadcrumb = {
    title: string;
    href: string;
};

const Breadcrumbs: React.VFC = () => {
    const { asPath } = useRouter();

    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[] | null>(null);

    useEffect(() => {
        const [pathNoAnchor] = asPath.split('#');
        const [pathNoQuery] = pathNoAnchor!.split('?');
        const path = pathNoQuery!.split('/');

        const breadcrumbs = path.map((item, index) => {
            const title = index == 0 ? 'Home' : item.replace(/-/g, ' ');
            const href = index == 0 ? '/' : path.slice(0, index + 1).join('/');

            return {
                title,
                href,
            };
        });

        setBreadcrumbs(breadcrumbs);
    }, [asPath]);

    return (
        <nav className={styles.breadcrumbs} aria-label="breadcrumbs">
            <Text width="sm" transform="capitalize">
                {breadcrumbs?.map(({ title, href }, index) => (
                    <Text key={href} type="inline">
                        {index != 0 && '/'}
                        <Link
                            variant="highlight"
                            href={href}
                            className={styles.breadcrumb}
                        >
                            {title}
                        </Link>
                    </Text>
                ))}
            </Text>
        </nav>
    );
};

export default Breadcrumbs;
