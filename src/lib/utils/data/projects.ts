import { getFile, getPaths } from '../fs';
import { getFileData } from '../file';
import { getPeriod } from '../period';

const basePath = ['content'];
const path = ['projects'];
const extension = 'mdx';

export const getProjects = async () => {
    const paths = await getPaths({ basePath, path, extension });

    const projects = await Promise.all(
        paths.map(async (path) => await getData(path))
    );

    return projects.sort((a, b) => {
        if (a.to && b.to) {
            return b.to - a.to;
        }

        return b.from - a.from;
    });
};

const getData = async (path: string[]): Promise<ProjectData> => {
    const file = await getFile({ basePath, path, extension });

    const {
        title,
        description,
        featured = false,
        from,
        to,
    } = getFileData(file);

    if (typeof title != 'string') {
        throw new Error(`'title' should be a string (${path})`);
    }
    if (typeof description != 'string') {
        throw new Error(`'description' should be a string (${path})`);
    }
    if (typeof featured != 'boolean') {
        throw new Error(`'featured', if used, should be a boolean (${path})`);
    }
    if (!(from instanceof Date)) {
        throw new Error(`'from' should be a Date (${path})`);
    }
    if (!(to instanceof Date) && typeof to != 'undefined') {
        throw new Error(`'to', if used, should be a Date (${path})`);
    }

    return {
        path,
        title,
        description,
        featured,
        from: from.getTime(),
        to: to ? to.getTime() : null,
        period: getPeriod(from, to),
    };
};
