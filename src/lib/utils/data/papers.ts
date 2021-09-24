import { getMDXData } from '@nico-bachner/mdx/utils';
import { fetchFile, fetchPaths } from '../fs';

const basePath = ['content', 'pages'];
const path = ['papers'];
const extension = 'mdx';

const fetchPaperData: Fetch<string[], PaperData> = async (path) => {
    const file = await fetchFile({ basePath, path, extension });

    const {
        title,
        description,
        featured = false,
        published,
        institution = null,
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
    if (!(published instanceof Date)) {
        throw new Error(`'published' should be a Date (${path})`);
    }
    if (institution != null && typeof institution != 'string') {
        throw new Error(`'institution', if used, should be a string (${path})`);
    }

    return {
        path,
        title,
        description,
        featured,
        published: published.getTime(),
        institution,
    };
};

const fetchPapersData = async () => {
    const paths = await fetchPaths({ basePath, path, extension });

    const papers = await Promise.all(
        paths.map(async (path) => await fetchPaperData(path))
    );

    return papers.sort((a, b) => b.published - a.published);
};

export { fetchPapersData };
