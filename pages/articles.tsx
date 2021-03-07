import InternalLink from "../components/InternalLink";

import { useRouter } from "next/router";
import { articlesPageTranslations } from "../content/translations/articlesPage";
import i18n from "../lib/i18n";

export const articles = [
    {
        title: "",
        slug: "",
        summary: "",
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
                            <InternalLink href={"/articles/" + article.slug}>
                                <h3 className="text-3xl">{article.title}</h3>
                                <p>{article.summary}</p>
                            </InternalLink>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
