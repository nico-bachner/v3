import styles from './ArticleCard.module.css';

import { Link, Text, Card } from '@nico-bachner/components-react';

type ArticleCardProps = ArticleData & {
    type: 'h2' | 'h3';
};

const ArticleCard: React.VFC<ArticleCardProps> = ({
    type,
    path,
    title,
    description,
    reading_time,
}) => (
    <Link href={`/${path.join('/')}`}>
        <Card variant="interactive" className={styles.card}>
            <Text type={type} size={6} weight={7}>
                {title}
            </Text>
            <Text className={styles.description}>{description}</Text>
            <div className={styles.footer}>
                <Text color="blue-5">More Information →</Text>
                <Text color="neutral-4">{reading_time} minute read</Text>
            </div>
        </Card>
    </Link>
);

export default ArticleCard;
