import { getSlugs, getFile, getFileData, getContent } from '@lib/mdx';
import { getUpdated } from '@lib/github';

import Head from '@components/Head';
import MDX from '@components/MDX';
import Link from '@components/Link';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugs('content/pages/');

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

    const date_updated = await getUpdated('content/pages/', slug);
    const file = await getFile('content/pages/', slug);

    const content = await getContent(file);
    const data = getFileData(file);

    const props: PageProps = {
        ...data,
        content,
        slug,
        date_updated,
    };

    return { props };
};

const Project: NextPage<PageProps> = (page) => {
    const date_updated =
        page.date_updated == null ? new Date() : new Date(page.date_updated);

    return (
        <main>
            <Head title={page.title} description={page.description} />

            <MDX content={page.content} />

            <p className="flex justify-between max-w-2xl mx-auto my-16 text-strong">
                Last updated: {date_updated.toLocaleDateString()}
                <Link
                    href={`https://github.com/nico-bachner/v3/edit/main/content/pages/${page.slug}.mdx`}
                >
                    Edit on GitHub
                </Link>
            </p>
        </main>
    );
};

export default Project;
