import { fetchFile, fetchPaths } from '../fs';
import { getFileData } from '../file';
import { getReadingTime } from '../reading-time';

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

    return {
        path,
        title,
        description,
        featured,
        published: published.getTime(),
        reading_time: getReadingTime(file),
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
