import Card from './Card';
import Link from '@components/Link';

const ProjectCard: React.VFC<ProjectData> = ({ slug, title, description }) => (
    <Link href={'/projects/' + slug} locale="en">
        <Card variant="interactive">
            <h3>{title}</h3>
            <p className="my-2 line-clamp-3">{description}</p>
            <p className="text-azure">More Information →</p>
        </Card>
    </Link>
);

export default ProjectCard;
