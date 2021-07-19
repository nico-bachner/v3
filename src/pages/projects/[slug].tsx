import styles from '$lib/styles/Project.module.css';

import { getProjectSlugs, getProjectProps } from '$lib/utils/projects';

import { Link, Text } from '@nico-bachner/components';
import MDX from '@nico-bachner/mdx';
import Head from '$lib/components/Head';

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
    <main className={styles.page}>
        <Head
            title={title}
            description={description}
            slug={slug}
            type="project"
        />

        <MDX content={mdx_content} />

        <div className={styles.bottom}>
            <Text>Last updated: {last_updated}</Text>
            <Text>
                <Link href={edit_url} variant="highlight">
                    Edit on GitHub
                </Link>
            </Text>
        </div>
    </main>
);

export default Project;
