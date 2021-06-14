import { useRouter } from 'next/router';
import { useI18n } from '@hooks/i18n';

import Link from '@components/Link';

import styles from './MobileNavigation.module.css';

const MobileNavigation: React.VFC = () => {
    const router = useRouter();
    const i18n = useI18n();

    return (
        <nav className={styles.nav}>
            {i18n.pages.slice(0, 4).map(({ href, title }) => (
                <p key={href} className="text-sm font-bold">
                    <Link
                        href={href}
                        variant={
                            router.pathname != href ? 'primary' : 'disabled'
                        }
                    >
                        {title}
                    </Link>
                </p>
            ))}
        </nav>
    );
};

export default MobileNavigation;
