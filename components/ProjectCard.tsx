import Card from './Card';

import { ProjectProps } from './Project';

const ProjectCard = (project: ProjectProps) => (
    <Card href={'/projects/' + project.slug}>
        <h3 className="capitalize">{project.title}</h3>
        <p className="my-2">{project.summary}</p>
        <p className="text-azure">More Information {'->'}</p>
    </Card>
);

export default ProjectCard;
