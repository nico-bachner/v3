import Card from './Card';
import Link from './Link';

import { useMDX } from '../hooks/mdx';

export interface MDXProjectProps {
    title: string;
    summary: string;
    featured?: boolean;
    url?: string;
    github_url?: string;
}

export type ProjectProps = MDXProjectProps & {
    slug: string;
};

export const Project = (project: ProjectProps & { content: any }) => {
    const mdx = useMDX(project.content);

    return (
        <article>
            <h1 className="max-w-2xl mx-auto">{project.title}</h1>
            <p className="max-w-2xl mx-auto my-8 space-x-8">
                {project.url && <Link href={project.url}>Demo</Link>}
                {project.github_url && (
                    <Link href={project.github_url}>GitHub Repository</Link>
                )}
            </p>
            {mdx}
        </article>
    );
};

export default Project;
