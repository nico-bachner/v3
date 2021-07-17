import styles from './Card.module.css';

import Link from 'components/Link';
import Text from 'components/Text';

const ArticleCard: React.VFC<ArticleData> = ({
    title,
    description,
    slug,
    reading_time,
}) => (
    <Link href={`/articles/${slug}`}>
        <div
            className={[styles.base, styles.interactive, styles.article].join(
                ' '
            )}
        >
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
        </div>
    </Link>
);

export default ArticleCard;
