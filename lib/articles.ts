import {
    getFile,
    getFileData,
    getContent,
    getReadingTime,
    getSlugs,
} from './mdx';
import { getUpdated } from './github';

const getArticleData = async (slug: string) => {
    const file = await getFile('content/articles/', slug);
    const { title, description, date_published, featured } = getFileData(file);

    const data: ArticleData = {
        title: title as string,
        description: description as string,
        slug,
        date_published: (date_published as Date).toDateString(),
        featured: (featured as boolean | undefined) ?? false,
        reading_time: getReadingTime(file),
    };

    return data;
};

export const getArticleProps = async (slug: string) => {
    const file = await getFile('content/articles/', slug);
    const { title, description, date_published, canonical_url } =
        getFileData(file);

    const props: ArticleProps = {
        title: title as string,
        description: description as string,
        slug,
        date_published: (date_published as Date).toDateString(),
        canonical_url: canonical_url as string,
        content: await getContent(file),
        date_updated: await getUpdated('content/articles/', slug),
        edit_url: `https://github.com/nico-bachner/v3/edit/main/content/articles/${slug}.mdx`,
    };

    return props;
};

const getArticlesData = async () => {
    const slugs = await getSlugs('content/articles/');

    const articles = await Promise.all(
        slugs.map(async (slug) => getArticleData(slug))
    );

    return articles;
};

export const getOrderedArticlesData = async () => {
    const articles = await getArticlesData();

    const ordered_articles = articles.sort(
        (a, b) =>
            new Date(b.date_published ?? 0).getTime() -
            new Date(a.date_published ?? 0).getTime()
    );

    return ordered_articles;
};
