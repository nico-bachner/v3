import { getFile, getFileData, getContent, getSlugs } from './mdx';
import { getUpdated } from './github';

const getPageData = async (slug: string) => {
    const file = await getFile('content/pages/', slug);
    const { title, description } = getFileData(file);

    const data: PageData = {
        title: title as string,
        description: description as string,
        slug,
    };

    return data;
};

export const getPageProps = async (slug: string) => {
    const file = await getFile('content/pages/', slug);
    const { title, description } = await getPageData(slug);

    const props: PageProps = {
        title: title as string,
        description: description as string,
        slug,
        content: await getContent(file),
        date_updated: await getUpdated('content/pages/', slug),
        edit_url: `https://github.com/nico-bachner/v3/edit/main/content/pages/${slug}.mdx`,
    };

    return props;
};

export const getPagesData = async () => {
    const slugs = await getSlugs('content/pages/');

    const pages = await Promise.all(
        slugs.map(async (slug) => getPageData(slug))
    );

    return pages;
};
