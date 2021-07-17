import styles from './MobileNavigation.module.css';

import { useRouter } from 'next/router';
import { useI18n } from 'hooks/i18n';

import { Link, Text } from '@nico-bachner/components';

const MobileNavigation: React.VFC = () => {
    const router = useRouter();
    const i18n = useI18n();

    return (
        <nav className={styles.nav}>
            {i18n.pages.slice(0, 4).map(({ href, title }) => (
                <Text key={href} size="sm" weight="bolder">
                    <Link
                        href={href}
                        variant={
                            router.pathname != href ? 'primary' : 'disabled'
                        }
                    >
                        {title}
                    </Link>
                </Text>
            ))}
        </nav>
    );
};

export default MobileNavigation;
