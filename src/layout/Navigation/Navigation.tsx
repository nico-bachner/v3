import styles from './Navigation.module.css';

import { useRouter } from 'next/router';
import { useI18n } from 'hooks/i18n';

import { Link, Text, Select } from '@nico-bachner/components';
import Logo from 'icons/Logo';

const Navigation: React.VFC = () => {
    const i18n = useI18n();
    const router = useRouter();
    const { pathname, query, locale, locales } = router;

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Logo />
            </Link>
            <div className={styles.links}>
                {i18n.pages.map(({ href, title }) => (
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
                value={locale}
                onChange={({ target }) => {
                    router.push({ pathname, query }, pathname, {
                        locale: target.value,
                    });
                }}
            >
                {(locales as Locale[]).map((locale) => (
                    <option key={locale} value={locale}>
                        {locale.toUpperCase()}
                    </option>
                ))}
            </Select>
        </nav>
    );
};

export default Navigation;
