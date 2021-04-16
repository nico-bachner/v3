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
    mdx: any;
}

export default function ProjectCard(project: ProjectProps) {
    return (
        <Card>
            <h3 className="capitalize">{project.data.title}</h3>
            <p className="mt-2 mb-4">
                {project.data.summary}{' '}
                <span className="ml-2">
                    <Link href={'/projects/' + project.slug} locale="en">
                        More Information {'->'}
                    </Link>
                </span>
            </p>
            <p className="space-x-8">
                <Link
                    href={project.data.github_url ?? '/'}
                    className={
                        project.data.github_url
                            ? 'text-azure hover:underline'
                            : 'cursor-default text-gray-light'
                    }
                >
                    Source Code
                </Link>
                <Link
                    href={project.data.url ?? '/'}
                    className={
                        project.data.url
                            ? 'text-azure hover:underline'
                            : 'cursor-default text-gray-light'
                    }
                >
                    Demo / Result
                </Link>
            </p>
        </Card>
    );
}
