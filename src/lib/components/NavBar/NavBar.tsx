import styles from './NavBar.module.css';

import { useRouter } from 'next/router';
import { useI18n } from '$lib/hooks/useI18n';

import { Button, Link, Text } from '@nico-bachner/components-react';
import { Logo } from '@nico-bachner/icons-react';

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
                    <Text key={href} weight={6}>
                        <Link
                            href={href}
                            variant={pathname == href ? 'disabled' : 'primary'}
                        >
                            {title}
                        </Link>
                    </Text>
                ))}
            </div>
            <Link href="/command-centre" className={styles.command}>
                ⌘
            </Link>
        </nav>
    );
};

export default Navigation;
