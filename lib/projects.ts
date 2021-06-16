import { getFile, getFileData, getContent, getSlugs } from './mdx';
import { getUpdated } from './github';

const getProjectData = async (slug: string) => {
    const file = await getFile('content/projects/', slug);
    const { title, description, featured, from, to } = getFileData(file);

    const data: ProjectData = {
        title: title as string,
        description: description as string,
        slug,
        featured: (featured as boolean | undefined) ?? false,
        from: (from as Date | undefined) ? from.toDateString() : null,
        to: (to as Date | undefined) ? to.toDateString() : null,
    };

    return data;
};

export const getProjectProps = async (slug: string) => {
    const file = await getFile('content/projects/', slug);
    const { title, description } = await getProjectData(slug);

    const props: ProjectProps = {
        title: title as string,
        description: description as string,
        slug,
        content: await getContent(file),
        date_updated: await getUpdated('content/projects/', slug),
        edit_url: `https://github.com/nico-bachner/v3/edit/main/content/projects/${slug}.mdx`,
    };

    return props;
};

const getProjectsData = async () => {
    const slugs = await getSlugs('content/projects/');

    const projects = await Promise.all(
        slugs.map(async (slug) => getProjectData(slug))
    );

    return projects;
};

export const getOrderedProjectsData = async () => {
    const projects = await getProjectsData();

    return projects.sort((a, b) => {
        if (a.to && b.to) {
            return new Date(b.to).getTime() - new Date(a.to).getTime();
        }
        if (a.from && b.from) {
            return new Date(b.from).getTime() - new Date(a.from).getTime();
        }

        return 0;
    });
};
