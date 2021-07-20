import styles from './ProjectCard.module.css';

import { Link, Text, Card } from '@nico-bachner/components';

const ProjectCard: React.VFC<ProjectData> = ({
    slug,
    title,
    description,
    period,
}) => (
    <Link href={`/projects/${slug}`}>
        <Card variant="interactive" className={styles.card}>
            <Text type="h3">{title}</Text>
            <Text className={styles.description}>{description}</Text>
            <div className={styles.footer}>
                <Text color="primary">More Information →</Text>
                <Text color="neutral-3">{period}</Text>
            </div>
        </Card>
    </Link>
);

export default ProjectCard;
