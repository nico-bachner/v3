import { getPageSlugs, getPageProps } from '@lib/pages';

import Head from '@components/Head';
import MDX from '@components/MDX';
import Link from '@components/Link';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    return {
        paths: await getPageSlugs(locales as Locale[]),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
    if (params && locale && typeof params.slug == 'string') {
        return { props: await getPageProps(params.slug, locale as Locale) };
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
    last_updated,
    edit_url,
}) => (
    <main>
        <Head title={title} description={description} slug={slug} />

        <MDX content={mdx_content} />

        <p className="flex justify-between max-w-2xl mx-auto my-16 text-strong">
            Last updated: {last_updated}
            <Link href={edit_url} variant="highlight">
                Edit on GitHub
            </Link>
        </p>
    </main>
);

export default Project;
