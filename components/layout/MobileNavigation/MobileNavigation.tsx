import { useRouter } from 'next/router';
import { useI18n } from '@lib/hooks/i18n';

import Link from '@components/Link';

import styles from './MobileNavigation.module.css';

const MobileNavigation: React.VFC = () => {
    const router = useRouter();
    const i18n = useI18n();

    return (
        <nav className={styles.nav}>
            {i18n.pages.slice(0, 4).map((page, index) => (
                <Link
                    key={index}
                    href={page.href}
                    className={`p-2 text-sm font-bold ${
                        router.pathname == page.href
                            ? 'text-light'
                            : 'text-stronger'
                    }`}
                >
                    {page.title}
                </Link>
            ))}
        </nav>
    );
};

export default MobileNavigation;
