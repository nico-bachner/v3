import styles from './ProjectCard.module.css';

import { Link, Text, Card } from '@nico-bachner/components-react';

type ProjectCardProps = ProjectData & {
    type: 'h2' | 'h3';
};

const ProjectCard: React.VFC<ProjectCardProps> = ({
    type,
    path,
    title,
    description,
    period,
}) => (
    <Link href={`/${path.join('/')}`}>
        <Card variant="interactive" className={styles.card}>
            <Text type={type} size={6} weight={7}>
                {title}
            </Text>
            <Text margin={3}>{description}</Text>
            <div className={styles.footer}>
                <Text color="blue-5">More Information →</Text>
                <Text color="neutral-4">{period}</Text>
            </div>
        </Card>
    </Link>
);

export default ProjectCard;
