import styles from './Navigation.module.css';

import { useRouter } from 'next/router';
import { useI18n } from '$lib/hooks/i18n';

import { Link, Text, Select } from '@nico-bachner/components-react';
import { Logo } from '@nico-bachner/icons-react';

const Navigation: React.VFC = () => {
    const { pages } = useI18n();
    const router = useRouter();
    const { pathname, query, locale, locales } = router;

    return (
        <nav className={styles.nav}>
            <Link href="/">
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
            <Select
                options={(locales as Locale[]).map((locale) => {
                    return {
                        value: locale,
                        content: locale.toUpperCase(),
                    };
                })}
                value={locale}
                onChange={({ target }) => {
                    router.push({ pathname, query }, pathname, {
                        locale: target.value,
                    });
                }}
            />
        </nav>
    );
};

export default Navigation;
