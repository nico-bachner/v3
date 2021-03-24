import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

import InternalLink from "./InternalLink";
import Card from "./Card";

interface Item {
    slug: string;
    title?: string;
    description?: string;
}

interface Props {
    apiRoute: string;
    initialCount?: number;
}

export default function List(props: Props) {
    const { locale } = useRouter();
    const [count, setCount] = useState(props.initialCount ?? 1);

    const { data, error } = useSWR("/api" + props.apiRoute, (args) =>
        fetch(args).then((res) => res.json())
    );

    if (error) return <p>Failed to load</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <>
            <div className="grid gap-4">
                {data.slice(0, count).map((item: Item, index: number) => {
                    return (
                        <InternalLink
                            className=""
                            href={"/projects/" + item.slug}
                        >
                            <Card>
                                <h3>{item.title ?? item.slug}</h3>
                                <p className="mt-2">{item.description}</p>
                            </Card>
                        </InternalLink>
                    );
                })}
            </div>
            <div className="flex justify-between px-2 py-4 sm:space-x-8">
                <button
                    onClick={() => {
                        if (count < data.length) {
                            setCount(count + 1);
                        }
                    }}
                    className={
                        count < data.length
                            ? "text-blue"
                            : "cursor-default text-gray-light dark:text-gray-dark"
                    }
                >
                    {locale == "lu"
                        ? "Méi Weisen"
                        : locale == "de"
                        ? "Zeige Mehr"
                        : locale == "fr"
                        ? "Montrer Plus"
                        : locale == "da"
                        ? "Vise Flere"
                        : "Show More"}
                </button>
                <button
                    onClick={() => {
                        if (count > 1) {
                            setCount(count - 1);
                        }
                    }}
                    className={
                        count > 1
                            ? "text-blue"
                            : "cursor-default text-gray-light dark:text-gray-dark"
                    }
                >
                    {locale == "lu"
                        ? "Manner Weisen"
                        : locale == "de"
                        ? "Zeige Weniger"
                        : locale == "fr"
                        ? "Montrer Moins"
                        : locale == "da"
                        ? "Vise Fære"
                        : "Show Less"}
                </button>
                <div className="text-right sm:flex-grow">
                    <InternalLink href="/projects">
                        {locale == "lu"
                            ? "Alleguer Weisen"
                            : locale == "de"
                            ? "Alle Zeigen"
                            : locale == "fr"
                            ? "Montrer Tous"
                            : locale == "da"
                            ? "Vise Alle"
                            : "Show All"}
                    </InternalLink>
                </div>
            </div>
        </>
    );
}
