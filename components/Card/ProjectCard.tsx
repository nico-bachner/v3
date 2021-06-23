import Card from './Card';
import Link from '@components/Link';

const ProjectCard: React.VFC<ProjectData> = ({
    slug,
    title,
    description,
    period,
}) => (
    <Link href={`/projects/${slug}`}>
        <Card variant="interactive">
            <h3>{title}</h3>
            <p className="my-2 line-clamp-3">{description}</p>
            <div className="flex justify-between">
                <p className="text-azure">More Information →</p>
                <p className="text-light">{period}</p>
            </div>
        </Card>
    </Link>
);

export default ProjectCard;
