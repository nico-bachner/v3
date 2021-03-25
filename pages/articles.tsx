import { useI18n } from "../hooks/i18n";
import { translations } from "../i18n";

import ArticlesList from "../components/ArticlesList";

export default function Articles() {
    const i18n = useI18n(translations);

    return (
        <main>
            <h1>{i18n.articles.title}</h1>
            <p>{i18n.articles.subtitle}</p>
            <ArticlesList />
        </main>
    );
}
