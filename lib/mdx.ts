import { promises as fs } from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';

// @ts-expect-error
import slug from 'remark-slug';
// @ts-expect-error
import headings from 'remark-autolink-headings';

export const getSlugs = async (directory: string) => {
    const files = await fs.readdir(process.cwd() + '/' + directory);

    const slugs = files.map((file) => file.replace(/\.mdx/, ''));

    return slugs;
};

export const getFile = async (directory: string, slug: string) => {
    const file = await fs.readFile(
        process.cwd() + `/${directory}/${slug}.mdx`,
        'utf8'
    );

    return file;
};

export const getFileData = (file: string) => {
    const { data } = matter(file);

    const fileData: FileData = {
        ...data,
        title: data.title,
        description: data.description,
    };

    return fileData;
};

export const getFileContent = (file: string) => {
    const { content } = matter(file);

    return content;
};

export const getReadingTime = (file: string) => {
    const content = getFileContent(file);
    const { minutes } = readingTime(content);
    const time = Math.round(minutes);

    return time;
};

export const getContent = async (file: string) => {
    const content = await serialize(getFileContent(file), {
        mdxOptions: { remarkPlugins: [slug] },
    });

    return content;
};

export const getProjectsData = async () => {
    const slugs = await getSlugs('content/projects/');

    const projects = await Promise.all(
        slugs.map(async (slug) => {
            const file = await getFile('content/projects/', slug);

            const data: ProjectData = getFileData(file);

            const project: ProjectData & { slug: string } = {
                ...data,
                slug,
            };

            return project;
        })
    );

    return projects;
};

export const getArticlesData = async () => {
    const slugs = await getSlugs('content/articles/');

    const articles = await Promise.all(
        slugs.map(async (slug) => {
            const file = await getFile('content/articles/', slug);

            const data: ArticleData = getFileData(file);
            const reading_time = getReadingTime(file);

            const article: ArticleCardProps = {
                ...data,
                slug,
                reading_time,
            };

            return article;
        })
    );

    return articles;
};
