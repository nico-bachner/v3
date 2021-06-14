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
    const data = await getPageData(slug);
    const date_updated = await getUpdated('content/pages/', slug);
    const file = await getFile('content/pages/', slug);

    const content = await getContent(file);

    return {
        ...data,
        slug,
        content,
        date_updated,
    };
};

export const getPagesData = async () => {
    const slugs = await getSlugs('content/pages/');

    const pages = await Promise.all(
        slugs.map(async (slug) => getPageData(slug))
    );

    return pages;
};
