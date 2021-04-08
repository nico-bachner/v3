import { useI18n } from '../hooks/i18n';
import { useSupabase } from '../hooks/supabase';

import Link from '../components/Link';
import Card from '../components/Card';

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
                <p>{i18n.projects.subtitle}</p>
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
                        <Card>
                            <h3 className="text-2xl text-center capitalize sm:text-3xl">
                                {project.title ?? project.slug}
                            </h3>
                            <p className="mt-2 mb-4 text-center">
                                {project.description}
                            </p>
                            <nav className="flex flex-wrap space-x-4 leading-8 justify-evenly">
                                <Link href={'/projects/' + project.slug}>
                                    More Information
                                </Link>
                                {project.github_url ? (
                                    <Link href={project.github_url}>
                                        Source Code
                                    </Link>
                                ) : (
                                    <></>
                                )}
                                {project.demo_url ? (
                                    <Link href={project.demo_url}>
                                        Demo / Result
                                    </Link>
                                ) : (
                                    <></>
                                )}
                            </nav>
                        </Card>
                    </div>
                ))}
            </section>
        </main>
    );
}
