import { fetchFile, fetchPaths } from '../fs';
import { getFileData } from '../file';

const basePath = ['content'];
const path = ['articles'];
const extension = 'mdx';

const fetchArticleData: Fetch<string[], ArticleData> = async (path) => {
    const file = await fetchFile({ basePath, path, extension });

    const {
        title,
        description,
        published,
        featured = false,
    } = getFileData(file);

    if (typeof title != 'string') {
        throw new Error(`'title' should be a string (${path})`);
    }
    if (typeof description != 'string') {
        throw new Error(`'description' should be a string (${path})`);
    }
    if (!(published instanceof Date)) {
        throw new Error(`'published' should be a Date (${path})`);
    }
    if (typeof featured != 'boolean') {
        throw new Error(`'featured', if used, should be a boolean (${path})`);
    }

    const wordCount = file.split(' ').length;
    const readingTime = Math.round(wordCount / 220);

    return {
        path,
        title,
        description,
        featured,
        published: published.getTime(),
        reading_time: readingTime,
    };
};

const fetchArticlesData = async () => {
    const paths = await fetchPaths({ basePath, path, extension });

    const articles = await Promise.all(
        paths.map(async (path) => await fetchArticleData(path))
    );

    return articles.sort((a, b) => b.published - a.published);
};

export { fetchArticlesData };
