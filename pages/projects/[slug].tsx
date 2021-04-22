import { getSlugs, getFile, getFileData, getContent } from '../../lib/mdx';

import Meta from '../../components/Meta';
import Link from '../../components/Link';
import Project, { ProjectProps } from '../../components/Project';

import { GetStaticPaths, GetStaticProps } from 'next';

export default function ProjectPage(project: ProjectProps & { content: any }) {
    return (
        <main>
            <Meta title={project.title} description={project.summary} />
            <Project {...project} />
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
    const data = getFileData(file, 'project');

    const project: ProjectProps & { content: any } = {
        content,
        ...data,
        slug,
    };

    return { props: project };
};
