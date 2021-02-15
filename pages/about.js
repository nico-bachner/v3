import { useRouter } from "next/router";
import { aboutPageTranslations } from "../translations/aboutPage";
import i18n from "../lib/i18n";

export default function About() {
    const { locale } = useRouter();
    const aboutPage = i18n(locale, aboutPageTranslations);

    return (
        <>
            <h1>{aboutPage.title}</h1>
            <p className="subtitle">{aboutPage.preview}</p>
            {locale == "en" ? (
                <>
                    <h2>Projects</h2>
                    <p>
                        Currently, most of my projects have been web-based, but
                        I want to explore more areas of development as well. I'm
                        currently also learning Rust and systems-level
                        programming.
                    </p>
                    <h2>Articles</h2>
                    <p>
                        I want to start writing articles soon, but currently
                        don't quite know where to start yet.
                    </p>
                </>
            ) : (
                ""
            )}
        </>
    );
}
