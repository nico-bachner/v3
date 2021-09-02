import styles from './ProjectCard.module.css';

import { Link, Text, Card } from '@nico-bachner/components-react';

const getPeriod = (from: number, to: number | null) => {
    const from_year = new Date(from).getFullYear();

    if (to) {
        const to_year = new Date(to).getFullYear();

        if (to_year == from_year) {
            return `${to_year}`;
        }

        return `${from_year} → ${to_year}`;
    }

    return `${from_year} → Present`;
};

type ProjectCardProps = ProjectData & {
    type: 'h2' | 'h3';
};

const ProjectCard: React.VFC<ProjectCardProps> = ({
    type,
    path,
    title,
    description,
    from,
    to,
}) => (
    <Link href={`/${path.join('/')}`}>
        <Card variant="interactive" className={styles.card}>
            <Text type={type} size={6} weight={7}>
                {title}
            </Text>
            <Text className={styles.description}>{description}</Text>
            <div className={styles.footer}>
                <Text color="blue-5">More Information →</Text>
                <Text color="neutral-5" className={styles.info}>
                    {getPeriod(from, to)}
                </Text>
            </div>
        </Card>
    </Link>
);

export default ProjectCard;
