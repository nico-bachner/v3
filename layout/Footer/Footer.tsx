import styles from './Footer.module.css';

import { useI18n } from 'hooks/i18n';

import Link from 'components/Link';
import Text from 'components/Text';

const Footer = () => {
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
                    <Text key={href} className={styles.left}>
                        <Link href={href} variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            </nav>
            <nav className={styles.nav}>
                {mdxPages.map(({ href, title }) => (
                    <Text key={href} className={styles.center_left}>
                        <Link href={href} locale="en" variant="secondary">
                            {title}
                        </Link>
                    </Text>
                ))}
            </nav>
            <nav className={styles.nav}>
                {i18n.links.map(({ href, title }) => (
                    <Text key={href} className={styles.center_right}>
                        <Link href={href} variant="secondary" external>
                            {title}
                        </Link>
                    </Text>
                ))}
            </nav>
            <nav className={styles.nav}>
                {i18n.other.map(({ href, title }) => (
                    <Text key={href} className={styles.right}>
                        <Link href={href} variant="secondary" external>
                            {title}
                        </Link>
                    </Text>
                ))}
            </nav>
        </footer>
    );
};

export default Footer;
