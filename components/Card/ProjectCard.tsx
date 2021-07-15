import styles from './Card.module.css';

import Link from '@components/Link';

const ProjectCard: React.VFC<ProjectData> = ({
    slug,
    title,
    description,
    period,
}) => (
    <Link href={`/projects/${slug}`}>
        <div
            className={[styles.base, styles.interactive, styles.article].join(
                ' '
            )}
        >
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.footer}>
                <p className={styles.more}>More Information →</p>
                <p className={styles.info}>{period}</p>
            </div>
        </div>
    </Link>
);

export default ProjectCard;
