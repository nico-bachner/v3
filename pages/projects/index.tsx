import styles from 'styles/Projects.module.css';

import { getProjectsData } from 'lib/projects';
import { useI18n } from 'hooks/i18n';

import Head from 'components/Head';
import Text from 'components/Text';
import { ProjectCard } from 'components/Card';

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
            <Text type="h1" className={styles.center}>
                {i18n.projects.title}
            </Text>
            <Text margin="prose" className={styles.center}>
                {i18n.projects.content}
            </Text>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard key={project.slug} {...project} />
                ))}
            </div>
        </main>
    );
};

export default Projects;
