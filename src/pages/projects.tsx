import styles from '@lib/styles/Projects.module.css';

import { fetchTranslation } from '@lib/utils/translation';
import { fetchProjectsData } from '@lib/utils/data/projects';

import MDX from '@nico-bachner/mdx';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';
import { ProjectCard } from '@lib/components/Card';

import type { NextPage, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/utils';

type ProjectsProps = {
    content: MDXContent;
    projects: ProjectData[];
};

export const getStaticProps: GetStaticProps<ProjectsProps> = async ({
    locale,
}) => ({
    props: {
        content: await fetchTranslation({
            locale,
            path: ['projects'],
        }),
        projects: await fetchProjectsData(),
    },
});

const Projects: NextPage<ProjectsProps> = ({ content, projects }) => (
    <Layout width="lg" className={styles.main}>
        <Head
            title="Projects | Nico Bachner"
            description="Nico Bachner's Projects"
        />

        <div className={styles.text}>
            <MDX content={content} />
        </div>

        <div className={styles.grid}>
            {projects.map((project) => (
                <ProjectCard
                    key={project.path[project.path.length - 1]}
                    type="h2"
                    {...project}
                />
            ))}
        </div>
    </Layout>
);

export default Projects;
