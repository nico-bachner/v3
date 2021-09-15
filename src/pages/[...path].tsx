import styles from '@lib/styles/Page.module.css';

import { fetchMDXContent, getMDXData } from '@nico-bachner/mdx/utils';
import { fetchFile, fetchRecursivePaths } from '@lib/utils/fs';
import { fetchDateUpdated, getEditUrl } from '@lib/utils/github';

import { Link, Text } from '@nico-bachner/components-react';
import MDX from '@nico-bachner/mdx';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/utils';

type PageProps = {
    title: string;
    description: string;
    og_image: string | null;
    canonical_url: string | null;
    content: MDXContent;
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
    const paths = (
        await fetchRecursivePaths({
            basePath,
            path: [],
            extension,
        })
    )
        .map((path) =>
            locales!.map((locale) => ({
                params: {
                    path,
                },
                locale,
            }))
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

        const file = await fetchFile({
            basePath,
            path,
            extension,
        });

        const { title, description, image, url } = getMDXData(file);

        if (typeof title != 'string') {
            throw new Error(`'title' should be a string (${path})`);
        }
        if (typeof description != 'string') {
            throw new Error(`'description' should be a string (${path})`);
        }
        if (typeof image != 'string' && typeof image != 'undefined') {
            throw new Error(`'image' should be a string (${path})`);
        }
        if (typeof url != 'string' && typeof url != 'undefined') {
            throw new Error(`'url' should be a string (${path})`);
        }

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
            og_image: image ?? null,
            canonical_url: url ?? null,
            content: await fetchMDXContent(file),
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
    og_image,
    canonical_url,
    content,
    lastUpdated,
    editUrl,
}) => (
    <Layout width="md">
        <Head
            title={title}
            description={description}
            image={og_image ?? undefined}
            url={canonical_url ?? undefined}
        />

        <article>
            <MDX content={content} />
        </article>

        <div className={styles.bottom}>
            <Text color="neutral-5">Last updated: {lastUpdated}</Text>
            <Text>
                <Link href={editUrl} variant="highlight">
                    Edit on GitHub →
                </Link>
            </Text>
        </div>
    </Layout>
);

export default Page;
