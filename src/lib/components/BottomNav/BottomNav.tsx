import styles from './BottomNav.module.css';

import { useRouter } from 'next/router';
import { useTranslation } from '@lib/hooks/useTranslation';

import { Link, Text } from '@nico-bachner/components-react';

const BottomNav: React.VFC = () => {
    const router = useRouter();
    const { pages } = useTranslation();

    return (
        <nav className={styles.nav}>
            {pages.main.map(({ href, title }) => (
                <Text key={href} size={4}>
                    <Link
                        href={href}
                        variant={
                            router.pathname != href ? 'primary' : 'disabled'
                        }
                        className={styles.link}
                    >
                        {title}
                    </Link>
                </Text>
            ))}
        </nav>
    );
};

export default BottomNav;
