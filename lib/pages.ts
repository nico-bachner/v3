import { getFile, getSlugs } from './fs';
import { getMDXData, getMDXProps } from './mdx';

const getPath = (slug: string) => `content/pages/${slug}.mdx`;

const getPageData = async (slug: string) => {
    const path = getPath(slug);
    const file = await getFile(path);
    const mdx_data = await getMDXData(file, slug, path);

    const data: PageData = {
        ...mdx_data,
    };

    return data;
};

export const getPagesData = async () => {
    const slugs = await getSlugs('content/pages/', 'mdx');

    const pages = await Promise.all(
        slugs.map(async (slug) => await getPageData(slug))
    );

    return pages;
};

export const getPageSlugs = async (locales: Locale[]) =>
    (await getSlugs('content/pages/', 'mdx'))
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

export const getPageProps = async (slug: string, locale: Locale) => {
    const path = getPath(slug);
    const file = await getFile(path);
    const mdx_props = await getMDXProps(file, slug, path, locale);

    const props: PageProps = {
        ...mdx_props,
    };

    return props;
};
