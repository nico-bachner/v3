import Card from './Card';

const ProjectCard: React.VFC<CardProps<ProjectData> & DefaultProps> = ({
    slug,
    title,
    description,
}) => (
    <Card href={'/projects/' + slug} locale="en">
        <h3>{title}</h3>
        <p className="my-2 line-clamp-3">{description}</p>
        <p className="text-azure">More Information →</p>
    </Card>
);

export default ProjectCard;
