import { getFile, getSlugs } from './fs';
import { getFileData } from './file';
import { getMDXData, getMDXProps } from './mdx';
import { getPeriod } from './period';

const getPath = (slug: string) => `content/projects/${slug}.mdx`;

const getProjectData = async (slug: string) => {
    const path = getPath(slug);
    const file = await getFile(path);
    const mdx_data = await getMDXData(file, slug, path);

    const { featured = false, from, to } = getFileData(file);

    if (typeof featured != 'boolean') {
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
        featured,
        from: from.getTime(),
        to: to ? to.getTime() : null,
        period: getPeriod(from, to),
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
            return b.to - a.to;
        }

        return b.from - a.from;
    });
};

export const getProjectSlugs = async (locales: Locale[]) =>
    (await getSlugs('content/projects/', 'mdx'))
        .map((slug) =>
            locales.map((locale) => {
                return {
                    params: {
                        slug,
                    },
                    locale,
                };
            })
        )
        .flat();

export const getProjectProps = async (slug: string, locale: Locale) => {
    const path = getPath(slug);
    const file = await getFile(path);
    const mdx_props = await getMDXProps(file, slug, path, locale);

    const props: ProjectProps = {
        ...mdx_props,
    };

    return props;
};
