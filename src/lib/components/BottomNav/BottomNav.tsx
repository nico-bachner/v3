import styles from './BottomNav.module.css';

import { useRouter } from 'next/router';
import { useI18n } from '$lib/hooks/useI18n';

import { Link, Text } from '@nico-bachner/components-react';

const MobileNavigation: React.VFC = () => {
    const router = useRouter();
    const { pages } = useI18n();

    return (
        <nav className={styles.nav}>
            {pages.main.map(({ href, title }) => (
                <Text key={href} size={4} weight={7}>
                    <Link
                        href={href}
                        variant={
                            router.pathname != href ? 'secondary' : 'disabled'
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
