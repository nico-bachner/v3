import { useI18n } from "../hooks/i18n";
import { translations } from "../i18n";

export default function About() {
    const i18n = useI18n(translations);

    return (
        <>
            <h1>{i18n.about.title}</h1>
            <p>{i18n.about.preview}</p>
            <h2>Projects</h2>
            <p>
                Currently, most of my projects have been web-based, but I want
                to explore more areas of development as well. I'm currently also
                learning Rust and systems-level programming.
            </p>
            <h2>Articles</h2>
            <p>
                I want to start writing articles soon, but currently don't quite
                know where to start yet.
            </p>
        </>
    );
}
