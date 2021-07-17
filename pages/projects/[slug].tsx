import { getProjectSlugs, getProjectProps } from 'lib/projects';

import Head from 'components/Head';
import MDX from 'components/MDX';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    return {
        paths: await getProjectSlugs(locales as Locale[]),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<ProjectProps> = async ({
    params,
    locale,
}) => {
    if (params && locale && typeof params.slug == 'string') {
        return {
            props: await getProjectProps(params.slug, locale as Locale),
        };
    }

    return {
        notFound: true,
    };
};

const Project: NextPage<ProjectProps> = ({
    title,
    description,
    slug,
    mdx_content,
    last_updated,
    edit_url,
}) => (
    <main>
        <Head
            title={title}
            description={description}
            slug={slug}
            type="project"
        />

        <MDX
            mdx_content={mdx_content}
            last_updated={last_updated}
            edit_url={edit_url}
        />
    </main>
);

export default Project;
