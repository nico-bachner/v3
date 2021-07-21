import styles from './ArticleCard.module.css';

import { Link, Text, Card } from '@nico-bachner/components';

const ArticleCard: React.VFC<ArticleData> = ({
    path,
    title,
    description,
    reading_time,
}) => (
    <Link href={`/${path.join('/')}`}>
        <Card variant="interactive" className={styles.card}>
            <Text type="h3">{title}</Text>
            <Text margin="tighter">{description}</Text>
            <div className={styles.footer}>
                <Text color="primary">More Information →</Text>
                <Text color="neutral-3">{reading_time} minute read</Text>
            </div>
        </Card>
    </Link>
);

export default ArticleCard;
