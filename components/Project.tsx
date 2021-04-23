import Link from './Link';

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

export const Project = (project: React.PropsWithChildren<ProjectProps>) => (
    <article>
        <h1 className="max-w-2xl mx-auto">{project.title}</h1>
        <p className="max-w-2xl mx-auto my-8 space-x-8">
            {project.url && <Link href={project.url}>Demo</Link>}
            {project.github_url && (
                <Link href={project.github_url}>GitHub Repository</Link>
            )}
        </p>
        {project.children}
    </article>
);

export default Project;
