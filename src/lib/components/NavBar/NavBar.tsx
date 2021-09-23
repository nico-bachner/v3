import styles from './NavBar.module.css';

import { useRouter } from 'next/router';
import { useTranslation } from '@lib/hooks/useTranslation';

import { Link, Text, Select } from '@nico-bachner/components-react';
import { Logo } from '@nico-bachner/icons-react';

const NavBar: React.VFC = () => {
    const { pathname, query, locale, locales, push } = useRouter();
    const { pages } = useTranslation();

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
                <Logo />
            </Link>
            <div className={styles.links}>
                {pages.main.map(({ href, title }) => (
                    <Text key={href}>
                        <Link
                            href={href}
                            variant={pathname != href ? 'primary' : 'disabled'}
                            className={styles.link}
                        >
                            {title}
                        </Link>
                    </Text>
                ))}
            </div>
            <Select.Root
                value={locale}
                onChange={({ target }) => {
                    push({ pathname, query }, pathname, {
                        locale: target.value,
                    });
                }}
            >
                {locales?.map((locale) => {
                    const [languageCode, countryCode] = locale.split('-');

                    return (
                        <Select.Option key={locale} value={locale}>
                            {languageCode?.toUpperCase()}
                        </Select.Option>
                    );
                })}
            </Select.Root>
        </nav>
    );
};

export default NavBar;
