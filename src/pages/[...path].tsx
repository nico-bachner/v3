import styles from '$lib/styles/Page.module.css';

import { fetchSerializedMDX } from '@nico-bachner/mdx/serialize';
import { fetchFile, fetchRecursivePaths } from '$lib/utils/fs';
import { getFileData, getFileContent } from '$lib/utils/file';
import { fetchDateUpdated, getEditUrl } from '$lib/utils/github';

import { Link, Text } from '@nico-bachner/components-react';
import MDX from '@nico-bachner/mdx';
import Head from '$lib/components/Head';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/types';

type PageProps = {
    title: string;
    description: string;
    mdx: MDXContent;
    lastUpdated: string;
    editUrl: string;
};

const github = {
    user: 'nico-bachner',
    repo: 'v3',
    baseBranch: 'main',
};

const basePath = ['content'];
const extension = 'mdx';

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const paths = await fetchRecursivePaths({
        basePath,
        path: [],
        extension,
    });

    return {
        paths: paths
            .map((path) =>
                (locales as Locale[]).map((locale) => {
                    return {
                        params: {
                            path,
                        },
                        locale,
                    };
                })
            )
            .flat(),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({
    params,
    locale,
}) => {
    if (params && locale) {
        const { path } = params;

        if (!Array.isArray(path)) {
            return {
                notFound: true,
            };
        }

        const file = await fetchFile({
            basePath,
            path,
            extension,
        });

        const { title, description } = getFileData(file);

        if (typeof title != 'string') {
            throw new Error(`'title' should be a string (${path})`);
        }
        if (typeof description != 'string') {
            throw new Error(`'description' should be a string (${path})`);
        }

        const content = getFileContent(file);
        const mdx = await fetchSerializedMDX(content);

        const updated = await fetchDateUpdated({
            ...github,
            basePath,
            path,
            extension,
        });
        const lastUpdated = updated
            ? updated.toLocaleDateString(locale)
            : 'Never';

        const props: PageProps = {
            title,
            description,
            mdx,
            lastUpdated,
            editUrl: getEditUrl({ ...github, basePath, path }),
        };

        return { props };
    }

    return {
        notFound: true,
    };
};

const Page: NextPage<PageProps> = ({
    title,
    description,
    mdx,
    lastUpdated,
    editUrl,
}) => (
    <main className={styles.page}>
        <Head title={title} description={description} />

        <MDX content={mdx} />

        <div className={styles.bottom}>
            <Text color="neutral-5">Last updated: {lastUpdated}</Text>
            <Text>
                <Link href={editUrl} variant="highlight">
                    Edit on GitHub →
                </Link>
            </Text>
        </div>
    </main>
);

export default Page;
