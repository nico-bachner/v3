import Card from './Card';

const ProjectCard: React.VFC<CardProps<ProjectData> & DefaultProps> = ({
    id,
    slug,
    title,
    description,
    className,
}) => (
    <Card id={id} href={'/projects/' + slug} locale="en" className={className}>
        <h3>{title}</h3>
        <p className="my-2 line-clamp-3">{description}</p>
        <p className="text-azure">More Information →</p>
    </Card>
);

export default ProjectCard;
