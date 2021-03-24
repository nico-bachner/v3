import { useI18n } from "../hooks/i18n";
import { translations } from "../i18n";

import InternalLink from "../components/InternalLink";
import List from "../components/List";

export default function Home() {
    const i18n = useI18n(translations);

    return (
        <>
            <h1 className="my-2 text-4xl sm:text-5xl">{i18n.title}</h1>

            <p className="my-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-blue sm:text-4xl">
                {i18n.subtitle}
            </p>

            <section>
                <h2>{i18n.about.title}</h2>
                <p>{i18n.about.preview}</p>
                <div className="flex p-4">
                    <div className="flex-grow text-right">
                        <InternalLink href="/about">
                            {i18n.readMore}
                        </InternalLink>
                    </div>
                </div>
            </section>
            <section>
                <h2>{i18n.projects.title}</h2>
                <p className="my-4">{i18n.projects.subtitle}</p>
                <List apiRoute="/projects" initialCount={3} />
            </section>
            <section>
                <h2>{i18n.projects.title}</h2>
                <p className="my-4">{i18n.projects.subtitle}</p>
                <List apiRoute="/articles" />
            </section>
        </>
    );
}
