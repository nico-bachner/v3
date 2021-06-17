import { getFile, getSlugs } from './fs';
import { getFileData } from './file';
import { getMDXData, getMDXProps } from './mdx';

const getPath = (slug: string) => `content/projects/${slug}.mdx`;

const getProjectData = async (slug: string) => {
    const path = getPath(slug);
    const file = await getFile(path);
    const mdx_data = await getMDXData(file, slug);

    const { featured, from, to } = getFileData(file);

    if (typeof featured != 'boolean' && typeof featured != 'undefined') {
        throw new Error(`'featured', if used, should be a boolean (${path})`);
    }
    if (!(from instanceof Date)) {
        throw new Error(`'from' should be a Date (${path})`);
    }
    if (!(to instanceof Date) && typeof to != 'undefined') {
        throw new Error(`'to', if used, should be a Date (${path})`);
    }

    const data: ProjectData = {
        ...mdx_data,
        featured: featured ?? false,
        from: from.toDateString(),
        to: to ? to.toDateString() : null,
    };

    return data;
};

export const getProjectsData = async () => {
    const slugs = await getSlugs('content/projects/', 'mdx');

    const projects = await Promise.all(
        slugs.map(async (slug) => await getProjectData(slug))
    );

    return projects.sort((a, b) => {
        if (a.to && b.to) {
            return new Date(b.to).getTime() - new Date(a.to).getTime();
        }

        return new Date(b.from).getTime() - new Date(a.from).getTime();
    });
};

export const getProjectProps = async (slug: string) => {
    const path = getPath(slug);
    const file = await getFile(path);
    const mdx_props = await getMDXProps(file, slug, path);

    const props: ProjectProps = {
        ...mdx_props,
    };

    return props;
};
