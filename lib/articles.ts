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
        date_published: data.date_published,
        slug,
        reading_time,
    };

    return article;
};

export const getArticleProps = async (slug: string): Promise<ArticleProps> => {
    const data = await getArticleData(slug);
    const date_updated = await getUpdated('content/articles/', slug);
    const file = await getFile('content/articles/', slug);

    const content = await getContent(file);
    const reading_time = getReadingTime(file);

    return {
        ...data,
        slug,
        content,
        date_updated,
        reading_time,
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
            new Date(b.date_published).getTime() -
            new Date(a.date_published).getTime()
    );

    return ordered_articles;
};
