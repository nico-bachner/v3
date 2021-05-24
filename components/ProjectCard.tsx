import Card from './Card';

type Props = ProjectCardProps & { className?: string };

const ProjectCard: React.VFC<Props> = (project) => (
    <Card href={'/projects/' + project.slug} className={project.className}>
        <h3>{project.title}</h3>
        <p className="my-2 line-clamp-3">{project.description}</p>
        <p className="text-azure">More Information →</p>
    </Card>
);

export default ProjectCard;
