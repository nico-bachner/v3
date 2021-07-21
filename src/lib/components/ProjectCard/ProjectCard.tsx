import styles from './ProjectCard.module.css';

import { Link, Text, Card } from '@nico-bachner/components';

const ProjectCard: React.VFC<ProjectData> = ({
    path,
    title,
    description,
    period,
}) => (
    <Link href={`/${path.join('/')}`}>
        <Card variant="interactive" className={styles.card}>
            <Text type="h3">{title}</Text>
            <Text margin="tighter">{description}</Text>
            <div className={styles.footer}>
                <Text color="primary">More Information →</Text>
                <Text color="neutral-3">{period}</Text>
            </div>
        </Card>
    </Link>
);

export default ProjectCard;
