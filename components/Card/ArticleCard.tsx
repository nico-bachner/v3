import styles from './Card.module.css';

import Link from '@components/Link';

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
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.footer}>
                <p className={styles.more}>More Information →</p>
                <p className={styles.info}>{reading_time} minute read</p>
            </div>
        </div>
    </Link>
);

export default ArticleCard;
