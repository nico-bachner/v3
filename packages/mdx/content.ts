import { serialize } from 'next-mdx-remote/serialize';

import type { MDXContent } from './types';

export const getMDXContent = async (file: string): Promise<MDXContent> =>
    await serialize(file, {
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
