import { getProjectsData } from '@lib/projects';
import { useI18n } from '@hooks/i18n';

import Head from '@components/Head';
import { ProjectCard } from '@components/Card';

import styles from '@styles/Projects.module.css';

import type { NextPage, GetStaticProps } from 'next';

interface ProjectsProps {
    projects: ProjectData[];
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
        <main className={styles.main}>
            <Head
                title="Projects | Nico Bachner"
                description="Nico Bachner's Articles"
                slug="projects"
            />
            <h1>{i18n.projects.title}</h1>
            <p>{i18n.projects.content}</p>
            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.slug} {...project} />
                ))}
            </div>
        </main>
    );
};

export default Projects;
