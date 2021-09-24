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
    subtitle: string | null;
    description: string;
    image: string | null;
    url: string | null;
    content: MDXContent;
    lastUpdated: string;
    editUrl: string;
};

const github = {
    user: 'nico-bachner',
    repo: 'v3',
    baseBranch: 'main',
};

const basePath = ['content', 'pages'];
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

        const {
            title,
            subtitle = null,
            description,
            image = null,
            url = null,
        } = getMDXData(file);

        if (typeof title != 'string') {
            throw new Error(`'title' should be a string (${path})`);
        }
        if (subtitle && typeof subtitle != 'string') {
            throw new Error(
                `'subtitle', if used, should be a string (${path})`
            );
        }
        if (typeof description != 'string') {
            throw new Error(`'description' should be a string (${path})`);
        }
        if (image && typeof image != 'string') {
            throw new Error(`'image', if used, should be a string (${path})`);
        }
        if (url && typeof url != 'string') {
            throw new Error(`'url', if used, should be a string (${path})`);
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
            subtitle,
            description,
            image,
            url,
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
    subtitle,
    description,
    image,
    url,
    content,
    lastUpdated,
    editUrl,
}) => (
    <Layout width="md">
        <Head
            title={title}
            description={description}
            image={image ?? undefined}
            url={url ?? undefined}
        />

        <article>
            <Text type="h1" className={styles.title}>
                {title}
            </Text>
            <Text size={6} className={styles.subtitle}>
                {subtitle}
            </Text>
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
