import { serialize } from 'next-mdx-remote/serialize';

import { getFileData, getFileContent } from './file';
import { getUpdated, getEditUrl } from './github';

export const getMDXData = async (file: string, slug: string) => {
    const { title, description } = getFileData(file);

    if (typeof title != 'string') {
        throw new Error(`'title' should be a string (${slug})`);
    }
    if (typeof description != 'string') {
        throw new Error(`'description' should be a string (${slug})`);
    }

    const data: MDXData = {
        title,
        description,
        slug,
    };

    return data;
};

export const getMDXProps = async (file: string, slug: string, path: string) => {
    const mdx_data = await getMDXData(file, slug);

    const data: MDXProps = {
        ...mdx_data,
        updated: (await getUpdated(path)) ?? null,
        edit_url: getEditUrl(path),
        mdx_content: await getMDXContent(file),
    };

    return data;
};

export const getMDXContent = async (file: string) =>
    await serialize(getFileContent(file), {
        mdxOptions: {
            remarkPlugins: [require('remark-code-titles')],
            rehypePlugins: [
                require('mdx-prism'),
                require('rehype-slug'),
                require('rehype-katex'),
            ],
        },
    });
