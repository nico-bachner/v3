import { getFile, getSlugs } from './fs';
import { getFileData } from './file';
import { getMDXData, getMDXProps } from './mdx';
import { getReadingTime } from './reading-time';

const getPath = (slug: string) => `content/articles/${slug}.mdx`;

const getArticleData = async (slug: string) => {
    const path = getPath(slug);
    const file = await getFile(path);
    const mdx_data = await getMDXData(file, slug);

    const { published, featured } = getFileData(file);

    if (!(published instanceof Date)) {
        throw new Error(`'published' should be a Date (${slug})`);
    }
    if (typeof featured != 'boolean' && typeof featured != 'undefined') {
        throw new Error(`'featured', if used, should be a boolean (${slug})`);
    }

    const data: ArticleData = {
        ...mdx_data,
        featured: featured ?? false,
        published: published.toDateString(),
        reading_time: getReadingTime(file),
    };

    return data;
};

export const getArticlesData = async () => {
    const slugs = await getSlugs('content/articles/', 'mdx');

    const articles = await Promise.all(
        slugs.map(async (slug) => await getArticleData(slug))
    );

    return articles.sort(
        (a, b) =>
            new Date(b.published ?? 0).getTime() -
            new Date(a.published ?? 0).getTime()
    );
};

export const getArticleProps = async (slug: string) => {
    const path = getPath(slug);
    const file = await getFile(path);
    const mdx_props = await getMDXProps(file, slug, path);

    const { canonical_url } = getFileData(file);

    if (typeof canonical_url != 'string') {
        throw new Error(`'canonical_url' should be a string (${path})`);
    }

    const props: ArticleProps = {
        ...mdx_props,
        canonical_url,
    };

    return props;
};
