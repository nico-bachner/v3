import Card from './Card';
import Link from './Link';

interface Data {
    title: string;
    summary: string;
    featured?: boolean;
    url?: string;
    github_url?: string;
}

export interface ProjectProps {
    slug: string;
    data: Data;
    content: any;
}

export default function ProjectCard(project: ProjectProps) {
    return (
        <Card href={'/projects/' + project.slug} locale="en">
            <h3 className="capitalize">{project.data.title}</h3>
            <p className="my-2">{project.data.summary}</p>
            <p className="text-azure">More Information {'->'}</p>
        </Card>
    );
}
