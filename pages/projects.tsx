import { useI18n } from '../hooks/i18n';
import { useSupabase } from '../hooks/supabase';

import Link from '../components/Link';
import ProjectCard from '../components/ProjectCard';

import { translations } from '../i18n';

import type { Project } from '../lib/types';

export async function getStaticProps() {
    const projects = await useSupabase('projects');

    return {
        props: {
            projects,
        },
        revalidate: 1,
    };
}

interface Props {
    projects: Project[];
}

export default function Projects(props: Props) {
    const i18n = useI18n(translations, 'en');

    return (
        <main>
            <section className="max-w-2xl mx-auto">
                <h1>{i18n.projects.title}</h1>
                <p className="mt-4">{i18n.projects.subtitle}</p>
            </section>
            <section className="grid grid-cols-1 mx-auto my-8 gap-y-8 max-w-prose md:max-w-3xl md:grid-cols-3">
                {props.projects.map((project: Project, index: number) => (
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
            </section>
        </main>
    );
}
