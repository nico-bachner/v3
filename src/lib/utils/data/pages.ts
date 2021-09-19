import { getMDXData } from '@nico-bachner/mdx/utils';
import { fetchFile, fetchPaths } from '../fs';

const basePath = ['content'];
const path: string[] = [];
const extension = 'mdx';

const fetchPageData: Fetch<string[], PageData> = async (path) => {
    const file = await fetchFile({ basePath, path, extension });

    const { title, description, featured = false } = getMDXData(file);

    if (typeof title != 'string') {
        throw new Error(`'title' should be a string (${path})`);
    }
    if (typeof description != 'string') {
        throw new Error(`'description' should be a string (${path})`);
    }
    if (typeof featured != 'boolean') {
        throw new Error(`'featured', if used, should be a boolean (${path})`);
    }

    return {
        path,
        title,
        description,
        featured,
    };
};

const fetchPagesData = async () => {
    const paths = await fetchPaths({ basePath, path, extension });

    const miscellaneous = await Promise.all(
        paths.map(async (path) => await fetchPageData(path))
    );

    return miscellaneous;
};

export { fetchPagesData };
