// @ts-nocheck
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'

// remark plugins
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'

// rehype plugins
import rehypeAttr from 'rehype-attr'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

type MDXContent = {
    compiledSource: string
}

const fetchMDXContent: Fetch<string, MDXContent> = async (file) =>
    await serialize(matter(file).content, {
        mdxOptions: {
            remarkPlugins: [
                [remarkBreaks],
                [remarkGfm],
                [remarkMath],
                [remarkToc, { tight: true }],
            ],
            rehypePlugins: [
                [rehypeAttr],
                [rehypeKatex],
                [rehypeHighlight],
                [rehypeSlug],
            ],
        },
    })

type MDXData = {
    [key: string]: any
}

const getMDXData: Get<string, MDXData> = (file) => {
    const { data } = matter(file)

    return data
}

export type { MDXContent, MDXData }

export { fetchMDXContent, getMDXData }
