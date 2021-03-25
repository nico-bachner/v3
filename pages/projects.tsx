import { useI18n } from "../hooks/i18n";
import { translations } from "../i18n";

import ProjectsList from "../components/ProjectsList";

export default function Projects() {
    const i18n = useI18n(translations);

    return (
        <main>
            <h1>{i18n.projects.title}</h1>
            <p>{i18n.projects.subtitle}</p>
            <ProjectsList />
        </main>
    );
}
