import hydrate from 'next-mdx-remote/hydrate';

import {
    getSlugs,
    getFile,
    getFileData,
    getContent,
    getReadingTime,
} from '../../lib/mdx';

import { useMDX } from '../../hooks/mdx';

import Meta from '../../components/Meta';
import Link from '../../components/Link';
import { ProjectProps } from '../../components/ProjectCard';

import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs('projects');

    return {
        paths: slugs.map((slug) => {
            return {
                params: {
                    slug,
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug ? params?.slug.toString() : '';

    const file = await getFile('projects', slug);

    const content = await getContent(file);
    const data = getFileData(file);
    const time = getReadingTime(file);

    const project = {
        content,
        data,
        time,
        slug,
    };

    return { props: project };
};

export default function Project(project: ProjectProps) {
    const mdx = useMDX(project.content);

    return (
        <main>
            <Meta
                title={project.data.title}
                description={project.data.summary}
            />
            <article>
                <h1 className="max-w-2xl mx-auto">{project.data.title}</h1>
                <p className="max-w-2xl mx-auto my-8 space-x-8">
                    {project.data.url && (
                        <Link href={project.data.url}>Demo</Link>
                    )}
                    {project.data.github_url && (
                        <Link href={project.data.github_url}>
                            GitHub Repository
                        </Link>
                    )}
                </p>
                {mdx}
            </article>
            <p className="max-w-2xl mx-auto my-20 text-right">
                <Link
                    href={
                        'https://github.com/nico-bachner/v3/edit/main/projects/' +
                        project.slug +
                        '.mdx'
                    }
                >
                    Edit on GitHub
                </Link>
            </p>
        </main>
    );
}