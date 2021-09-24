import { getMDXData } from '@nico-bachner/mdx/utils';
import { fetchFile, fetchPaths } from '../fs';

const basePath = ['content', 'pages'];
const path = ['articles'];
const extension = 'mdx';

const fetchArticleData: Fetch<string[], ArticleData> = async (path) => {
    const file = await fetchFile({ basePath, path, extension });

    const {
        title,
        description,
        featured = false,
        published,
    } = getMDXData(file);

    if (typeof title != 'string') {
        throw new Error(`'title' should be a string (${path})`);
    }
    if (typeof description != 'string') {
        throw new Error(`'description' should be a string (${path})`);
    }
    if (typeof featured != 'boolean') {
        throw new Error(`'featured', if used, should be a boolean (${path})`);
    }
    if (published != false && !(published instanceof Date)) {
        throw new Error(`'published', should be a Date or false (${path})`);
    }

    const rawWordCount = file.split(' ').length;

    const adjustedWordCount = file.toLowerCase().includes('table of contents')
        ? rawWordCount * 1.1
        : rawWordCount;

    const readingTime = Math.round(adjustedWordCount / 220);

    return {
        path,
        title,
        description,
        featured,
        published: published ? published.getTime() : false,
        reading_time: readingTime,
    };
};

const fetchArticlesData = async () => {
    const paths = await fetchPaths({ basePath, path, extension });

    const articles = await Promise.all(
        paths.map(async (path) => await fetchArticleData(path))
    );

    return articles
        .filter(({ published }) => published)
        .sort((a, b) => b.published - a.published);
};

export { fetchArticlesData };
