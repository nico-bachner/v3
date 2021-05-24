import { getSlugs, getFile, getFileData, getContent } from '@lib/mdx';
import { getUpdated } from '@lib/github';

import Head from 'next/head';
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
    const slug = params?.slug ? params?.slug.toString() : '';

    const date_updated = await getUpdated('content/projects/', slug);
    const file = await getFile('content/projects/', slug);

    const content = await getContent(file);
    const data = getFileData(file);

    const props: ProjectProps = {
        ...data,
        content,
        slug,
        date_updated,
    };

    return { props };
};

const Project: NextPage<ProjectProps> = (project) => {
    return (
        <main>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.description} />
            </Head>

            <MDX content={project.content} />

            <p className="max-w-2xl mx-auto my-20 flex justify-between text-strong">
                Last updated:{' '}
                {new Date(project.date_updated).toLocaleDateString()}
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
