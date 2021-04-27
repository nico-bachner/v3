import { promises as fs } from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';

import { MDXComponents } from '../components/MDXComponents';
import { ArticleProps, MDXArticleProps } from '../components/Article';
import { ProjectProps, MDXProjectProps } from '../components/Project';

export async function getSlugs(directory: string) {
    const files = await fs.readdir(process.cwd() + '/' + directory);

    const slugs = files.map((file) => file.replace(/\.mdx/, ''));

    return slugs;
}

export async function getFile(directory: string, slug: string) {
    const file = await fs.readFile(
        process.cwd() + `/${directory}/${slug}.mdx`,
        'utf8'
    );

    return file;
}

export const getFileData = (file: string, type: 'article' | 'project') => {
    const { data } = matter(file);

    const fileData: MDXProjectProps | MDXArticleProps = {
        ...data,
        title: data.title,
        summary: data.summary,
    };

    return fileData;
};

export const getFileContent = (file: string) => {
    const { content } = matter(file);

    return content;
};

export function getReadingTime(file: string) {
    const content = getFileContent(file);
    const { minutes } = readingTime(content);
    const time = Math.round(minutes);

    return time;
}

export async function getContent(file: string) {
    const content = await renderToString(getFileContent(file), {
        components: MDXComponents,
    });

    return content;
}

export const getProjects = async () => {
    const slugs = await getSlugs('content/projects/');

    const projects = await Promise.all(
        slugs.map(async (slug) => {
            const file = await getFile('content/projects/', slug);

            const data: MDXProjectProps = getFileData(file, 'project');

            const project: ProjectProps = {
                ...data,
                slug,
            };

            return project;
        })
    );

    return projects;
};

export async function getArticles() {
    const slugs = await getSlugs('content/articles/');

    const articles = await Promise.all(
        slugs.map(async (slug) => {
            const file = await getFile('content/articles/', slug);

            const data: MDXArticleProps = getFileData(file, 'article');
            const time = getReadingTime(file);

            const article: ArticleProps = {
                ...data,
                slug,
                time,
            };

            return article;
        })
    );

    return articles;
}
