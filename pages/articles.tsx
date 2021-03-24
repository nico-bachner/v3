import useSWR from "swr";

import { useI18n } from "../hooks/i18n";
import { translations } from "../i18n";

import InternalLink from "../components/InternalLink";
import Card from "../components/Card";

interface Article {
    slug: string;
    title?: string;
    description?: string;
    tags?: string[];
    published?: Date;
}

export default function Articles() {
    const i18n = useI18n(translations);

    const { data, error } = useSWR("/api/articles", (args) =>
        fetch(args).then((res) => res.json())
    );

    if (error) {
        return (
            <p>
                Failed to load articles. There may be a problem with the
                database. Try checking your internet status.
            </p>
        );
    }

    return data ? (
        <>
            <h1>{i18n.articles.title}</h1>
            <p className="my-4">{i18n.articles.subtitle}</p>
            <div className="grid gap-4">
                {data.map((article: Article, index: number) => {
                    return (
                        <InternalLink
                            className=""
                            href={"/articles/" + article.slug}
                            key={index}
                        >
                            <Card>
                                <h3>{article.title ?? article.slug}</h3>
                                <p className="mt-2">{article.description}</p>
                            </Card>
                        </InternalLink>
                    );
                })}
            </div>
        </>
    ) : (
        <p>Loading Articles...</p>
    );
}
