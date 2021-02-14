import IntLink from "@components/IntLink";

export const articles = [
    {
        title: "None published yet",
        slug: "",
        summary:
            "Hmm, it seems I haven't gotten around to publishing anything yet.",
    },
];

export default function Articles() {
    return (
        <>
            <h1>Articles</h1>
            <p className="subtitle">
                Here is where I'll be publishing my articles in the future.
            </p>
            <section>
                <h2>All</h2>
                <ul>
                    {articles.map((article, index) => {
                        return (
                            <li key={index} className="my-8">
                                <IntLink href={"/articles/" + article.slug}>
                                    <h3 className="text-3xl">
                                        {article.title}
                                    </h3>
                                    <p>{article.summary}</p>
                                </IntLink>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
