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

const Project: NextPage<ProjectProps> = ({
    title,
    description,
    slug,
    content,
    date_updated,
    editUrl,
}) => {
    const dateUpdated =
        date_updated == null ? new Date() : new Date(date_updated);

    return (
        <main>
            <Head
                title={title}
                description={description}
                slug={slug}
                type="project"
            />

            <MDX content={content} />

            <p className="flex justify-between max-w-2xl mx-auto my-16 text-strong">
                Last updated: {dateUpdated.toLocaleDateString()}
                <Link href={editUrl} variant="highlight">
                    Edit on GitHub
                </Link>
            </p>
        </main>
    );
};

export default Project;
