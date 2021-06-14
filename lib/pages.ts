import { getFile, getFileData, getContent, getSlugs } from './mdx';
import { getUpdated } from './github';

const getPageData = async (slug: string) => {
    const file = await getFile('content/pages/', slug);

    const data = getFileData(file);

    const project: CardProps<PageData> = {
        ...data,
        slug,
    };

    return project;
};

export const getPageProps = async (slug: string): Promise<PageProps> => {
    const file = await getFile('content/pages/', slug);
    const data = await getPageData(slug);

    return {
        ...data,
        slug,
        content: await getContent(file),
        date_updated: await getUpdated('content/pages/', slug),
        editUrl: `https://github.com/nico-bachner/v3/edit/main/content/pages/${slug}.mdx`,
    };
};

export const getPagesData = async () => {
    const slugs = await getSlugs('content/pages/');

    const pages = await Promise.all(
        slugs.map(async (slug) => getPageData(slug))
    );

    return pages;
};
