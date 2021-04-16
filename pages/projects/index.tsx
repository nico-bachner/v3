import { useI18n } from '../../hooks/i18n';
import { translations } from '../../i18n';

import { getProjects } from '../../lib/mdx';

import ProjectCard, { ProjectProps } from '../../components/ProjectCard';

interface Props {
    projects: ProjectProps[];
}

export default function Projects({ projects }: Props) {
    const i18n = useI18n(translations, 'en');

    return (
        <main>
            <h1 className="max-w-2xl mx-auto">{i18n.projects.title}</h1>
            <p className="max-w-2xl mx-auto mt-4">{i18n.projects.subtitle}</p>
            <div className="grid grid-cols-1 mx-auto my-8 gap-y-8 max-w-prose md:max-w-3xl md:grid-cols-3">
                {projects.map((project: ProjectProps, index: number) => (
                    <div
                        key={index}
                        className={
                            index % 2 == 1
                                ? 'md:col-start-2 md:col-end-4'
                                : 'md:col-start-1 md:col-end-3'
                        }
                    >
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </main>
    );
}

export async function getStaticProps() {
    const projects = await getProjects();

    return {
        props: {
            projects,
        },
    };
}
