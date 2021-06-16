import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { promises as fs } from 'fs';

export const getSlugs = async (directory: string) => {
    const files = await fs.readdir(process.cwd() + '/' + directory);

    return files.map((file) => file.replace(/\.mdx/, ''));
};

export const getFile = async (directory: string, slug: string) => {
    const file = await fs.readFile(
        process.cwd() + `/${directory}/${slug}.mdx`,
        'utf8'
    );

    return file;
};

export const getFileData = (file: string) => matter(file).data;

export const getFileContent = (file: string) => matter(file).content;

export const getReadingTime = (file: string) => {
    const content = getFileContent(file);
    const { minutes } = readingTime(content);
    const time = Math.round(minutes);

    return time;
};

export const getContent = async (file: string) => {
    const content = await serialize(getFileContent(file), {
        mdxOptions: {
            remarkPlugins: [require('remark-code-titles')],
            rehypePlugins: [
                require('mdx-prism'),
                require('rehype-slug'),
                require('rehype-katex'),
            ],
        },
    });

    return content;
};
