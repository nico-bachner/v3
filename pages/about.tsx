import { useI18n } from "../lib/i18n";

import { aboutPageTranslations } from "../content/translations/aboutPage";

export default function About() {
    const aboutPage = useI18n(aboutPageTranslations);

    return (
        <>
            <h1>{aboutPage.title}</h1>
            <p>{aboutPage.preview}</p>
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
