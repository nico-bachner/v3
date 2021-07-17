import styles from './ArticleCard.module.css';

import { Link, Text, Card } from '@nico-bachner/components';

const ArticleCard: React.VFC<ArticleData> = ({
    title,
    description,
    slug,
    reading_time,
}) => (
    <Link href={`/articles/${slug}`}>
        <Card variant="interactive" className={styles.card}>
            <Text type="h3">{title}</Text>
            <Text margin="tight" className={styles.description}>
                {description}
            </Text>
            <div className={styles.footer}>
                <Text color="primary" className={styles.more}>
                    More Information →
                </Text>
                <Text color="light" className={styles.info}>
                    {reading_time} minute read
                </Text>
            </div>
        </Card>
    </Link>
);

export default ArticleCard;
