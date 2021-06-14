import Link from '../../Link';

import styles from './Footer.module.css';

import { useI18n } from '@hooks/i18n';

const Footer: React.VFC = () => {
    const i18n = useI18n();

    const mdxPages = [
        {
            title: 'Uses',
            href: '/uses',
        },
        {
            title: 'Repositories',
            href: '/repositories',
        },
        {
            title: 'Mac Setup',
            href: '/mac-setup',
        },
    ];

    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                {i18n.pages.map(({ href, title }) => (
                    <p key={href} className="text-left">
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </p>
                ))}
            </nav>
            <nav className={styles.nav}>
                {mdxPages.map(({ href, title }) => (
                    <p key={href} className="text-right sm:text-center">
                        <Link href={href} locale="en" variant="secondary">
                            {title}
                        </Link>
                    </p>
                ))}
            </nav>
            <nav className={styles.nav}>
                {i18n.links.map(({ href, title }) => (
                    <p key={href} className="text-left sm:text-center">
                        <Link href={href} variant="secondary" external>
                            {title}
                        </Link>
                    </p>
                ))}
            </nav>
            <nav className={styles.nav}>
                {i18n.other.map(({ href, title }) => (
                    <p key={href} className="text-right">
                        <Link href={href} variant="secondary" external>
                            {title}
                        </Link>
                    </p>
                ))}
            </nav>
        </footer>
    );
};

export default Footer;
