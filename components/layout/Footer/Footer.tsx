import Link from '../../Link';

import styles from './Footer.module.css';

import { useI18n } from '@lib/hooks/i18n';

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
                {i18n.pages.map((page, index) => (
                    <Link
                        key={index}
                        href={page.href}
                        className={`${styles.link} text-left`}
                    >
                        {page.title}
                    </Link>
                ))}
            </nav>
            <nav className={styles.nav}>
                {mdxPages.map((page, index) => (
                    <Link
                        key={index}
                        href={page.href}
                        locale="en"
                        className={`${styles.link} text-right sm:text-center`}
                    >
                        {page.title}
                    </Link>
                ))}
            </nav>
            <nav className={styles.nav}>
                {i18n.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={`${styles.link} text-left sm:text-center`}
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
            <nav className={styles.nav}>
                {i18n.other.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={`${styles.link} text-right`}
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
        </footer>
    );
};

export default Footer;
