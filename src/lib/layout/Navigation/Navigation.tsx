import styles from './Navigation.module.css';

import { useRouter } from 'next/router';
import { useI18n } from '$lib/hooks/useI18n';

import { Link, Text } from '@nico-bachner/components-react';
import { Logo } from '@nico-bachner/icons-react';
import Menu from '$lib/components/Menu';

const Navigation: React.VFC = () => {
    const { pathname } = useRouter();
    const { pages } = useI18n();

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
                <Logo />
            </Link>
            <div className={styles.links}>
                {pages.main.map(({ href, title }) => (
                    <Text key={href} weight="bold">
                        <Link
                            href={href}
                            variant={pathname != href ? 'primary' : 'disabled'}
                        >
                            {title}
                        </Link>
                    </Text>
                ))}
            </div>
            <Menu />
        </nav>
    );
};

export default Navigation;
