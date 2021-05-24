import { getProjectsData } from '@lib/mdx';
import { useI18n } from '@lib/hooks/i18n';

import Head from '@components/Head';
import ProjectCard from '@components/ProjectCard';

import type { NextPage, GetStaticProps } from 'next';

interface ProjectsProps {
    projects: ProjectCardProps[];
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjectsData();

    const props: ProjectsProps = {
        projects,
    };

    return { props };
};

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
    const i18n = useI18n();

    return (
        <main>
            <Head
                title="Projects | Nico Bachner"
                description="Nico Bachner's Articles"
            />
            <h1 className="max-w-2xl mx-auto">{i18n.projects.title}</h1>
            <p className="max-w-2xl mx-auto mt-4 mb-8">
                {i18n.projects.subtitle}
            </p>
            <div className="grid max-w-2xl mx-auto gap-y-8 gap-x-20 md:max-w-3xl alternate-2">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} {...project} />
                ))}
            </div>
        </main>
    );
};

export default Projects;
