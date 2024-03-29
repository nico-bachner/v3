import { spacing, utils } from '@nico-bachner/design-tokens/tokens'
import { fetchMDXContent, getMDXData } from '@nico-bachner/mdx/utils'
import { fetchFile, fetchRecursivePaths } from '@lib/utils/fs'
import { fetchDateUpdated, getEditUrl } from '@lib/utils/github'

import { Stack, Text } from '@nico-bachner/components-react'
import MDX from '@nico-bachner/mdx'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import Link from '@lib/components/Link'
import Title from '@lib/components/Title'

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import type { MDXContent } from '@nico-bachner/mdx/utils'
import { useTranslation } from '@lib/hooks/useTranslation'

type PathProps = {
    title: string
    description: string
    image: string | null
    url: string | null
    index: boolean
    content: MDXContent
    updated: string | null
    edit_url: string
}

const github = {
    user: 'nico-bachner',
    repo: 'v3',
    baseBranch: 'main',
}

const basePath = ['content', 'pages']
const extension = 'mdx'

const getStaticPaths: GetStaticPaths = async ({ locales }) => {
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
        .flat()

    return {
        paths,
        fallback: false,
    }
}

const getStaticProps: GetStaticProps<PathProps> = async ({
    params,
    locale,
}) => {
    const { path } = params!

    if (!Array.isArray(path)) {
        return {
            notFound: true,
        }
    }

    const file = await fetchFile({
        basePath,
        path,
        extension,
    })

    const {
        title,
        description,
        image = null,
        url = null,
        published,
    } = getMDXData(file)

    if (typeof title != 'string') {
        throw new Error(`'title' should be a string (${path})`)
    }
    if (typeof description != 'string') {
        throw new Error(`'description' should be a string (${path})`)
    }
    if (image && typeof image != 'string') {
        throw new Error(`'image', if used, should be a string (${path})`)
    }
    if (url && typeof url != 'string') {
        throw new Error(`'url', if used, should be a string (${path})`)
    }

    const updated = await fetchDateUpdated({
        ...github,
        basePath,
        path,
        extension,
    })

    const props: PathProps = {
        title,
        description,
        image,
        url,
        index: published == false ? false : true,
        content: await fetchMDXContent(file),
        updated: updated?.toLocaleDateString(locale) ?? null,
        edit_url: getEditUrl({ ...github, basePath, path, extension }),
    }

    return { props }
}

const Path: NextPage<PathProps> = ({
    title,
    description,
    image,
    url,
    index,
    content,
    updated,
    edit_url,
}) => {
    const { infos, actions, values } = useTranslation()

    return (
        <Layout width="xl">
            <Head
                title={title}
                description={description}
                image={image ?? undefined}
                url={url ?? undefined}
                index={index}
            />

            <article>
                <Title title={title} subtitle={description} />

                <MDX content={content} />
            </article>

            <Stack
                direction="row"
                justify="space-between"
                css={{
                    maxWidth: utils.sizes.md,
                    marginBlock: spacing[16],
                    marginInline: 'auto',
                }}
            >
                <Text color="neutral-8">
                    {infos.last_updated}: {updated ?? values.never}
                </Text>
                <Text>
                    <Link href={edit_url} variant="highlight">
                        {actions.edit_on_github} →
                    </Link>
                </Text>
            </Stack>
        </Layout>
    )
}

export { getStaticPaths, getStaticProps }

export default Path
