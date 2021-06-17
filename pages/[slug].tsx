import { getSlugs } from '@lib/fs';
import { getPageProps } from '@lib/pages';

import Head from '@components/Head';
import MDX from '@components/MDX';
import Link from '@components/Link';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs('content/pages/', 'mdx');

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
    if (params && typeof params.slug == 'string') {
        const props = await getPageProps(params.slug);
        return { props };
    }

    return {
        notFound: true,
    };
};

const Project: NextPage<PageProps> = ({
    title,
    description,
    slug,
    mdx_content,
    updated,
    edit_url,
}) => (
    <main>
        <Head title={title} description={description} slug={slug} />

        <MDX content={mdx_content} />

        <p className="flex justify-between max-w-2xl mx-auto my-16 text-strong">
            Last updated:{' '}
            {updated ? new Date(updated).toLocaleDateString() : 'Never'}
            <Link href={edit_url} variant="highlight">
                Edit on GitHub
            </Link>
        </p>
    </main>
);

export default Project;
