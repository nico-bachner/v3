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
            <Text margin="tight">{description}</Text>
            <div className={styles.footer}>
                <Text color="primary">More Information →</Text>
                <Text color="neutral-3">{reading_time} minute read</Text>
            </div>
        </Card>
    </Link>
);

export default ArticleCard;
