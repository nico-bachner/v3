import { useRouter } from 'next/router';
import { useI18n } from '@hooks/i18n';

import Link from '@components/Link';
import Logo from '@components/icons/Logo';
import Select from '@components/Select';

import styles from './Navigation.module.css';

const Navigation: React.VFC = () => {
    const i18n = useI18n();
    const router = useRouter();
    const { pathname, query, locale, locales } = router;

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Logo />
            </Link>
            <div>
                {i18n.pages.map(({ href, title }) => (
                    <p key={href}>
                        <Link
                            href={href}
                            variant={pathname != href ? 'primary' : 'disabled'}
                        >
                            {title}
                        </Link>
                    </p>
                ))}
            </div>
            <label>
                <div className="sr-only">{i18n.actions.changeLanguage}</div>
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
            </label>
        </nav>
    );
};

export default Navigation;
