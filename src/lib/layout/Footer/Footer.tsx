import styles from './Footer.module.css';

import { useI18n } from '$lib/hooks/useI18n';

import { Link, Text } from '@nico-bachner/components-react';

const Footer = () => {
    const { pages, links } = useI18n();

    return (
        <footer className={styles.footer}>
            <Text className={styles.left}>
                <Text type="strong">Main</Text>
                {pages.main.map(({ href, title }) => (
                    <Link key={href} href={href} variant="secondary">
                        {title}
                    </Link>
                ))}
            </Text>
            <Text className={styles.right_center}>
                <Text type="strong">Assorted</Text>
                {pages.other.map(({ href, title }) => (
                    <Link key={href} href={href} variant="secondary">
                        {title}
                    </Link>
                ))}
            </Text>
            <Text className={styles.left_center}>
                <Text type="strong">Social</Text>
                {links.social.map(({ href, title }) => (
                    <Link key={href} href={href} variant="secondary">
                        {title}
                    </Link>
                ))}
            </Text>
            <Text className={styles.right}>
                <Text type="strong">Other</Text>
                {links.other.map(({ href, title }) => (
                    <Link key={href} href={href} variant="secondary">
                        {title}
                    </Link>
                ))}
            </Text>
        </footer>
    );
};

export default Footer;
