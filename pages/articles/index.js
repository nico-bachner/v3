import Head from "next/head";
import Link from "next/link";

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
            <Head>
                <title>Articles | Nico Bachner</title>
            </Head>

            <h1>Articles</h1>
            <p className="subtitle">
                Here is where I'll be publishing my articles in the future.
            </p>
            <ul>
                {articles.map((article, index) => {
                    return (
                        <li key={index} className="my-8 cursor-pointer">
                            <Link href={"/articles/" + article.slug}>
                                <article className="">
                                    <h3>{article.title}</h3>
                                    <p className="dark:text-gray-300">
                                        {article.summary}
                                    </p>
                                </article>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
