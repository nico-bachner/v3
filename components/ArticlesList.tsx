import useSWR from "swr";

import InternalLink from "./InternalLink";
import Card from "./Card";

import type { Article } from "../lib/types";

interface Props {
    count?: number;
}

export default function ArticlesList(props: Props) {
    const { data, error } = useSWR("/api/articles", (args) =>
        fetch(args).then((res) => res.json())
    );

    if (error) {
        return (
            <p>
                Failed to load projects. There may be a problem with the
                database connection. Try checking your internet status.
            </p>
        );
    }

    if (data) {
        let articles = data;
        if (props.count) {
            articles = data.slice(0, props.count);
        }

        return (
            <div className="grid gap-4 mt-4">
                {articles.map((article: Article, index: number) => {
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
        );
    }
    return <p className="my-8">Loading Projects...</p>;
}
