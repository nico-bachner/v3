import styles from './Footer.module.css';

import Link from './Link';

interface FooterProps {
    pages: Page[];
    links: Page[];
}

const Footer: React.VFC<FooterProps> = ({ pages, links }) => (
    <footer className={styles.footer}>
        <nav className={styles.nav}>
            {pages.map((page, index) => (
                <Link
                    key={page.href}
                    href={page.href}
                    className={
                        styles.link +
                        ' ' +
                        (index < 4 ? 'text-left' : 'text-right sm:text-center')
                    }
                >
                    {page.title}
                </Link>
            ))}
        </nav>
        <nav className={styles.nav}>
            {links.map((link, index) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={
                        styles.link +
                        ' ' +
                        (index < 4 ? 'text-left sm:text-center' : 'text-right')
                    }
                >
                    {link.title}
                </Link>
            ))}
        </nav>
    </footer>
);

export default Footer;
