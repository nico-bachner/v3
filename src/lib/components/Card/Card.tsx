import styles from './Card.module.css';

import { Text, Card as BaseCard } from '@nico-bachner/components-react';
import Link from '@lib/components/Link';

type CardProps = {
    href: string;
    header: string;
    body: string;
    cta: string;
    info?: React.ReactChild;
};

const Card: React.VFC<CardProps> = ({ href, header, body, cta, info }) => (
    <Link href={href}>
        <BaseCard variant="interactive" className={styles.card}>
            <Text size={6}>
                <Text type="strong" className={styles.header}>
                    {header}
                </Text>
            </Text>
            <Text className={styles.body}>{body}</Text>
            <div className={styles.footer}>
                <Text className={styles.cta}>{cta}</Text>
                <Text className={styles.info}>{info}</Text>
            </div>
        </BaseCard>
    </Link>
);

export default Card;
