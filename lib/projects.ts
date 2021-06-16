import { getFile, getFileData, getContent, getSlugs } from './mdx';
import { getUpdated } from './github';

const getProjectData = async (slug: string) => {
    const file = await getFile('content/projects/', slug);
    const { title, description, period, featured } = getFileData(file);

    const data: ProjectData = {
        title: title as string,
        description: description as string,
        slug,
        period: period as string,
        featured: (featured as boolean | undefined) ?? false,
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

    const ordered_projects = projects.sort((a, b) => {
        const [a_start_date, a_end_date] = (a.period ?? '|').split('|');
        const [b_start_date, b_end_date] = (b.period ?? '|').split('|');

        if (a_end_date && b_end_date) {
            return (
                new Date(b_end_date).getTime() - new Date(a_end_date).getTime()
            );
        }
        if (a_start_date && b_start_date) {
            return (
                new Date(b_start_date).getTime() -
                new Date(a_start_date).getTime()
            );
        }

        return 0;
    });

    return ordered_projects;
};
