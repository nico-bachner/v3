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

    const data = getFileData(file);
    const reading_time = getReadingTime(file);

    const article: CardProps<ArticleData> = {
        ...data,
        slug,
        reading_time,
    };

    return article;
};

export const getArticleProps = async (slug: string): Promise<ArticleProps> => {
    const file = await getFile('content/articles/', slug);
    const data = await getArticleData(slug);

    return {
        ...data,
        slug,
        content: await getContent(file),
        date_updated: await getUpdated('content/articles/', slug),
        reading_time: getReadingTime(file),
        editUrl: `https://github.com/nico-bachner/v3/edit/main/content/articles/${slug}.mdx`,
    };
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
