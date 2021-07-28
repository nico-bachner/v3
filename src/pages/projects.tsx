import styles from '$lib/styles/Projects.module.css';

import { getMDXContent } from '@nico-bachner/mdx/content';
import { getFile } from '$lib/utils/fs';
import { getProjects } from '$lib/utils/data/projects';

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
    const file = await getFile({
        basePath: ['translations'],
        path: [locale as string, 'projects'],
        extension: 'mdx',
    });

    const props: ProjectsProps = {
        content: await getMDXContent(file),
        projects: await getProjects(),
    };

    return { props };
};

const Projects: NextPage<ProjectsProps> = ({ content, projects }) => (
    <main className={styles.main}>
        <Head
            title="Projects | Nico Bachner"
            description="Nico Bachner's Projects"
        />

        <div className={styles.center}>
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
