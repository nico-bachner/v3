import Article from "../components/Article";

import { useRouter } from "next/router";
import { articlesPageTranslations } from "../content/translations/articlesPage";
import i18n from "../lib/i18n";

export const articles = [
    {
        title: "SvelteKit is now Open Source",
        slug: "sveltekit",
        summary:
            "As of yesterday (March 12), SvelteKit is Open Source. While not officially in public beta yet, the GitHub repository is now public.",
    },
];

export default function Articles() {
    const { locale } = useRouter();
    const articlesPage = i18n(locale, articlesPageTranslations);

    return (
        <>
            <h1>{articlesPage.title}</h1>
            <p>{articlesPage.subtitle}</p>
            <ul>
                {articles.map((article, index) => {
                    return (
                        <li key={index} className="my-8">
                            <Article article={article} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
