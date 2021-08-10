import styles from '$styles/Projects.module.css';

import { fetchTranslation } from '$lib/utils/translation';
import { fetchProjectsData } from '$lib/utils/data/projects';

import MDX from '@nico-bachner/mdx';
import Head from '$lib/components/Head';
import Card from '$lib/components/ProjectCard';

import type { NextPage, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/types';

type ProjectsProps = {
    content: MDXContent;
    projects: ProjectData[];
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const content = await fetchTranslation(locale, ['projects']);
    const projects = await fetchProjectsData();

    const props: ProjectsProps = {
        content,
        projects,
    };

    return { props };
};

const Projects: NextPage<ProjectsProps> = ({ content, projects }) => (
    <main className={styles.main}>
        <Head
            title="Projects | Nico Bachner"
            description="Nico Bachner's Projects"
        />

        <div className={styles.text}>
            <MDX content={content} />
        </div>

        <div className={styles.grid}>
            {projects.map((project) => (
                <Card key={project.title} type="h2" {...project} />
            ))}
        </div>
    </main>
);

export default Projects;
