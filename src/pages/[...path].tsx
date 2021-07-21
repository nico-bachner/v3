import styles from '$lib/styles/Page.module.css';

import { getMDXContent } from 'packages/mdx/content';
import { getFile, getDirs, getPaths } from '$lib/utils/fs';
import { getFileData, getFileContent } from '$lib/utils/file';
import { getUpdated } from '$lib/utils/github';

import { Link, Text } from '@nico-bachner/components';
import MDX from '@nico-bachner/mdx';
import Head from '$lib/components/Head';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { MDXContent } from 'packages/mdx/types';

type PageProps = {
    title: string;
    description: string;
    mdx: MDXContent;
    lastUpdated: string;
    editUrl: string;
};

const basePath = ['content'];
const extension = 'mdx';
const baseBranch = 'main';

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const pagePaths = await getPaths({
        basePath,
        path: [],
        extension,
    });
    const dirPaths = await getDirs({
        basePath,
        path: [],
    });
    const otherPaths = (
        await Promise.all(
            dirPaths.map(
                async (path) =>
                    await getPaths({
                        basePath,
                        path,
                        extension,
                    })
            )
        )
    ).flat();

    type Path = {
        params: {
            path: string[];
        };
        locale: string;
    };

    const paths: Path[] = [...pagePaths, ...otherPaths]
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
        .flat();

    return {
        paths,
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

        const file = await getFile({
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
        const mdx = await getMDXContent(content);

        const updated = await getUpdated({
            basePath,
            path,
            extension,
        });
        const lastUpdated = updated
            ? updated.toLocaleDateString(locale)
            : 'Never';

        const fullPath = [...basePath, ...path].join('/');
        const fullFilePath = [fullPath, extension].join('.');
        const editUrl = [
            'https://github.com',
            'nico-bachner',
            'v3',
            'edit',
            baseBranch,
            fullFilePath,
        ].join('/');

        const props: PageProps = {
            title,
            description,
            mdx,
            lastUpdated,
            editUrl,
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
            <Text>Last updated: {lastUpdated}</Text>
            <Text>
                <Link href={editUrl} variant="highlight">
                    Edit on GitHub
                </Link>
            </Text>
        </div>
    </main>
);

export default Page;
