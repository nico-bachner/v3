import styles from './Footer.module.css';

import { useI18n } from '$lib/hooks/i18n';

import { Link, Text } from '@nico-bachner/components';

const Footer = () => {
    const { pages, links } = useI18n();

    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                {pages.main.map(({ href, title }) => (
                    <Text key={href} className={styles.left}>
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            </nav>
            <nav className={styles.nav}>
                {pages.other.map(({ href, title }) => (
                    <Text key={href} className={styles.center_left}>
                        <Link href={href} locale="en" variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            </nav>
            <nav className={styles.nav}>
                {links.social.map(({ href, title }) => (
                    <Text key={href} className={styles.center_right}>
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            </nav>
            <nav className={styles.nav}>
                {links.other.map(({ href, title }) => (
                    <Text key={href} className={styles.right}>
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            </nav>
        </footer>
    );
};

export default Footer;
