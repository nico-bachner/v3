import styles from './Footer.module.css';

import { useTranslation } from '$lib/hooks/useTranslation';

import { Link, Text } from '@nico-bachner/components-react';

const Footer = () => {
    const { pages, links } = useTranslation();

    return (
        <div className={styles.container}>
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
        </div>
    );
};

export default Footer;
