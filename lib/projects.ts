import { getFile, getFileData, getContent, getSlugs } from './mdx';
import { getUpdated } from './github';

const getProjectData = async (slug: string) => {
    const file = await getFile('content/projects/', slug);

    const data = getFileData(file);

    const project: CardProps<ProjectData> = {
        ...data,
        slug,
    };

    return project;
};

export const getProjectProps = async (slug: string): Promise<ProjectProps> => {
    const data = await getProjectData(slug);
    const date_updated = await getUpdated('content/projects/', slug);
    const file = await getFile('content/projects/', slug);

    const content = await getContent(file);

    return {
        ...data,
        slug,
        content,
        date_updated,
    };
};

const getProjectsData = async () => {
    const slugs = await getSlugs('content/projects/');

    const articles = await Promise.all(
        slugs.map(async (slug) => getProjectData(slug))
    );

    return articles;
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
