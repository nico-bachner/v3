import styles from '$lib/styles/Projects.module.css';

import { getProjects } from '$lib/utils/data/projects';
import { useI18n } from '$lib/hooks/i18n';

import { Text } from '@nico-bachner/components-react';
import Head from '$lib/components/Head';
import ProjectCard from '$lib/components/ProjectCard';

import type { NextPage, GetStaticProps } from 'next';

interface ProjectsProps {
    projects: ProjectData[];
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjects();

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
            />
            <Text type="h1" className={styles.center}>
                {i18n.projects.title}
            </Text>
            <Text margin="prose" className={styles.center}>
                {i18n.projects.content}
            </Text>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </main>
    );
};

export default Projects;
