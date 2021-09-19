import styles from './Card.module.css';

import { Link, Text, Card as BaseCard } from '@nico-bachner/components-react';

type CardProps = {
    type: 'h2' | 'h3' | 'h4';
    href: string;
    header: string;
    body: string;
    cta: string;
    info?: React.ReactChild;
};

const Card: React.VFC<CardProps> = ({
    type,
    href,
    header,
    body,
    cta,
    info,
}) => (
    <Link href={href}>
        <BaseCard variant="interactive" className={styles.card}>
            <Text type={type} size={6} className={styles.header}>
                {header}
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
