import Card from './Card';

type ProjectCardProps = CardProps<ProjectData> & DefaultProps;

const ProjectCard: React.VFC<ProjectCardProps> = (project) => (
    <Card href={'/projects/' + project.slug} {...project}>
        <h3>{project.title}</h3>
        <p className="my-2 line-clamp-3">{project.description}</p>
        <p className="text-azure">More Information →</p>
    </Card>
);

export default ProjectCard;
