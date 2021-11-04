import { fetchFile } from '@lib/utils/fs'
import { fetchMDXContent, MDXContent } from '@nico-bachner/mdx/utils'

type TranslationProps = {
    locale: string | undefined
    path: string[]
}

const fetchTranslation: Fetch<TranslationProps, MDXContent> = async ({
    locale,
    path,
}) => {
    const [languageCode, countryCode] = locale!.split('-')

    const file = await fetchFile({
        basePath: ['content', 'translations'],
        path: [languageCode!, ...path],
        extension: 'mdx',
    })

    const content = await fetchMDXContent(file)

    return content
}

type DocumentationProps = {
    path: string[]
}

const fetchDocumentation: Fetch<DocumentationProps, MDXContent> = async ({
    path,
}) => {
    const file = await fetchFile({
        basePath: ['content', 'documentation'],
        path,
        extension: 'mdx',
    })

    const content = await fetchMDXContent(file)

    return content
}

export { fetchTranslation, fetchDocumentation }
