import { serialize } from 'next-mdx-remote/serialize';

import { getFileData, getFileContent } from './file';
import { getUpdated, getEditUrl } from './github';

export const getMDXData = async (file: string, slug: string, path: string) => {
    const { title, description } = getFileData(file);

    if (typeof title != 'string') {
        throw new Error(`'title' should be a string (${path})`);
    }
    if (typeof description != 'string') {
        throw new Error(`'description' should be a string (${path})`);
    }

    const data: MDXData = {
        title,
        description,
        slug,
    };

    return data;
};

export const getMDXContent = async (file: string) =>
    await serialize(getFileContent(file), {
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

export const getMDXProps = async (
    file: string,
    slug: string,
    path: string,
    locale: Locale
) => {
    const mdx_data = await getMDXData(file, slug, path);
    const updated = await getUpdated(path);

    const data: MDXProps = {
        ...mdx_data,
        last_updated: updated ? updated.toLocaleDateString(locale) : 'Never',
        edit_url: getEditUrl(path),
        mdx_content: await getMDXContent(file),
    };

    return data;
};
