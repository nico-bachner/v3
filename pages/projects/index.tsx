import { getProjects } from '../../lib/mdx';
import { useI18n } from '../../hooks/i18n';
import { translations } from '../../i18n';

import ProjectCard from '../../components/ProjectCard';

import type { NextPage, GetStaticProps } from 'next';
import type { ProjectProps } from '../../components/Project';

interface Props {
    projects: ProjectProps[];
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjects();

    const props: Props = {
        projects,
    };

    return { props };
};

const Projects: NextPage<Props> = ({ projects }) => {
    const i18n = useI18n(translations, 'en');

    return (
        <main>
            <h1 className="max-w-2xl mx-auto">{i18n.projects.title}</h1>
            <p className="max-w-2xl mx-auto mt-4 mb-8">
                {i18n.projects.subtitle}
            </p>
            <div className="grid max-w-2xl mx-auto gap-y-8 gap-x-20 md:max-w-3xl alternate-2">
                {projects.map((project: ProjectProps, index: number) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </main>
    );
};

export default Projects;
