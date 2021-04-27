import { getSlugs, getFile, getFileData, getContent } from '../../lib/mdx';
import { useMDX } from '../../hooks/mdx';

import Meta from '../../components/Meta';
import Link from '../../components/Link';
import Project from '../../components/Project';

import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import type { ProjectProps } from '../../components/Project';

type Props = ProjectProps & { content: any };

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

    const props: Props = {
        ...data,
        content,
        slug,
    };

    return { props };
};

const ProjectPage: NextPage<Props> = (project) => {
    const mdx = useMDX(project.content);

    return (
        <main>
            <Meta title={project.title} description={project.summary} />
            <Project {...project}>{mdx}</Project>
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
};

export default ProjectPage;
