import Card from './Card';

const ProjectCard: React.FC<ProjectCardProps> = (project) => (
    <Card href={'/projects/' + project.slug}>
        <h3>{project.title}</h3>
        <p className="my-2 line-clamp-3">{project.description}</p>
        <p className="text-azure">More Information →</p>
    </Card>
);

export default ProjectCard;
