import Card from './Card';

type ProjectCardProps = CardProps<ProjectData> & {
    className?: string;
};

const ProjectCard: React.VFC<ProjectCardProps> = ({
    slug,
    title,
    description,
    className,
}) => (
    <Card href={'/projects/' + slug} locale="en" className={className}>
        <h3>{title}</h3>
        <p className="my-2 line-clamp-3">{description}</p>
        <p className="text-azure">More Information →</p>
    </Card>
);

export default ProjectCard;
