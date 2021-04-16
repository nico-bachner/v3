import hydrate from 'next-mdx-remote/hydrate';

import {
    getSlugs,
    getFile,
    getFileData,
    getMDX,
    getReadingTime,
} from '../../lib/mdx';

import Meta from '../../components/Meta';
import Link from '../../components/Link';
import { ProjectProps } from '../../components/ProjectCard';

import { mdxComponents } from '../../components/MDX';

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

    const mdx = await getMDX(file);
    const data = getFileData(file);
    const time = getReadingTime(file);

    const project = {
        mdx,
        data,
        time,
        slug,
    };

    return { props: project };
};

export default function Project(project: ProjectProps) {
    const content = hydrate(project.mdx, {
        components: mdxComponents,
    });

    return (
        <main>
            <Meta
                title={project.data.title}
                description={project.data.summary}
            />
            <article>
                <h1 className="max-w-2xl mx-auto">{project.data.title}</h1>
                {content}
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
