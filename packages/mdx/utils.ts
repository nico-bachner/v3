import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

type MDXContent = { compiledSource: string };

const fetchMDXContent: Fetch<string, MDXContent> = async (file) =>
    await serialize(matter(file).content, {
        mdxOptions: {
            remarkPlugins: [
                require('remark-math'),
                require('remark-footnotes'),
                require('remark-code-titles'),
            ],
            rehypePlugins: [
                require('mdx-prism'),
                require('rehype-slug'),
                require('rehype-katex'),
            ],
        },
    });

type MDXData = {
    [key: string]: any;
};

const getMDXData: Get<string, MDXData> = (file) => {
    const { data } = matter(file);

    return data;
};

export type { MDXContent, MDXData };

export { fetchMDXContent, getMDXData };
