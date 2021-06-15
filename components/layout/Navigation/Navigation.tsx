import { useRouter } from 'next/router';
import { useI18n } from '@hooks/i18n';

import Link from '@components/Link';
import Logo from '@components/icons/Logo';
import Select from '@components/Select';

import styles from './Navigation.module.css';

const Navigation: React.VFC = () => {
    const i18n = useI18n();
    const router = useRouter();

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
                            variant={
                                router.pathname != href ? 'primary' : 'disabled'
                            }
                        >
                            {title}
                        </Link>
                    </p>
                ))}
            </div>
            <label htmlFor="#language-select" className="sr-only">
                {i18n.actions.changeLanguage}
            </label>
            <Select
                id="language-select"
                onChange={(item) => {
                    router.push(router.pathname, router.pathname, {
                        locale: item.target.value,
                    });
                }}
                value={router.locale}
            >
                {(router.locales as Locale[]).map((language, index) => (
                    <option key={index} value={language}>
                        {language.toUpperCase()}
                    </option>
                ))}
            </Select>
        </nav>
    );
};

export default Navigation;
