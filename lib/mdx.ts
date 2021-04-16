import { promises as fs } from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';
import { MDXComponents } from '../components/MDXComponents';

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

export function getFileData(file: string) {
    const { data } = matter(file);

    return data;
}

export function getFileContent(file: string) {
    const { content } = matter(file);

    return content;
}

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

export async function getArticles() {
    const slugs = await getSlugs('articles');

    const articles = await Promise.all(
        slugs.map(async (slug) => {
            const file = await getFile('articles', slug);

            const data = getFileData(file);
            const time = getReadingTime(file);

            return {
                slug,
                time,
                data,
            };
        })
    );

    return articles;
}

export async function getProjects() {
    const slugs = await getSlugs('projects');

    const articles = await Promise.all(
        slugs.map(async (slug) => {
            const file = await getFile('projects', slug);

            const data = getFileData(file);

            return {
                slug,
                data,
            };
        })
    );

    return articles;
}
