import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import MDX from '@nico-bachner/mdx'
import Title from '@lib/components/Title'

import { useTranslation } from '@lib/hooks/useTranslation'
import { fetchTranslation } from '@lib/utils/mdx'

import type { NextPage, GetStaticProps } from 'next'
import type { MDXContent } from '@nico-bachner/mdx/utils'

type NotFoundProps = {
    content: MDXContent
}

const getStaticProps: GetStaticProps<NotFoundProps> = async ({ locale }) => ({
    props: {
        content: await fetchTranslation({
            locale,
            path: ['404'],
        }),
    },
})

const NotFound: NextPage<NotFoundProps> = ({ content }) => {
    const { words } = useTranslation()

    return (
        <Layout width="sm">
            <Head title="404 | Nico Bachner" description="Page Not Found" />

            <Title title={`404 - ${words.page_not_found}`} />

            <MDX content={content} />
        </Layout>
    )
}

export { getStaticProps }

export default NotFound
