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
            <div className="grid max-w-2xl gap-8 mx-auto my-8 md:max-w-3xl md:grid-cols-3 alternate">
                {projects.map((project: ProjectProps, index: number) => (
                    <ProjectCard key={index} {...project} />
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
