import Article from "../components/Article";

import { useI18n } from "../hooks/i18n";

import { articlesPageTranslations } from "../content/translations/articlesPage";

export const articles = [
    {
        title: "SvelteKit is now Open Source",
        slug: "sveltekit",
        summary:
            "As of yesterday (March 12), SvelteKit is Open Source. While not officially in public beta yet, the GitHub repository is now public.",
    },
];

export default function Articles() {
    const articlesPage = useI18n(articlesPageTranslations);

    return (
        <>
            <h1>{articlesPage.title}</h1>
            <p className="my-4">{articlesPage.subtitle}</p>
            <div className="grid gap-4">
                {articles.map((article, index) => {
                    return (
                        <Article
                            key={index}
                            title={article.title}
                            slug={article.slug}
                            summary={article.summary}
                        />
                    );
                })}
            </div>
        </>
    );
}
