import { useEffect } from 'react';
import { getSlugs } from '@lib/mdx';
import { getProjectProps } from '@lib/projects';

import Head from '@components/Head';
import MDX from '@components/MDX';
import Link from '@components/Link';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs('content/projects/');

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
    if (typeof params?.slug == 'string') {
        return { props: await getProjectProps(params.slug) };
    }
    return {
        notFound: true,
    };
};

const Project: NextPage<ProjectProps> = (project) => {
    const date_updated =
        project.date_updated == null
            ? new Date()
            : new Date(project.date_updated);

    return (
        <main>
            <Head title={project.title} description={project.description} />

            <MDX content={project.content} />

            <p className="flex justify-between max-w-2xl mx-auto my-16 text-strong">
                Last updated: {date_updated.toLocaleDateString()}
                <Link
                    href={`https://github.com/nico-bachner/v3/edit/main/content/projects/${project.slug}.mdx`}
                >
                    Edit on GitHub
                </Link>
            </p>
        </main>
    );
};

export default Project;
