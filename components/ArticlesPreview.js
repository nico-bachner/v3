import Link from "next/link";
import { useState } from "react";
import { articles } from "../pages/articles";

export default function ArticlesPreview() {
    const [articleCount, setCount] = useState(1);

    return (
        <section>
            <h2>Articles</h2>
            <ul>
                {articles.slice(0, articleCount).map((article, index) => {
                    return (
                        <li key={index} className="my-6">
                            <Link href={"/articles/" + article.slug}>
                                <a>
                                    <h3 className="text-xl">{article.title}</h3>
                                    <p>{article.summary}</p>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="flex p-4 space-x-4 text-blue-500">
                <button
                    onClick={() => {
                        if (articleCount < articles.length) {
                            setCount(articleCount + 2);
                        }
                        console.log(articleCount);
                    }}
                    className={
                        articleCount < articles.length - 1
                            ? "hover:text-blue-600 dark:hover:text-blue-400"
                            : "text-gray-500 cursor-not-allowed"
                    }
                >
                    Show More
                </button>
                <button
                    onClick={() => {
                        if (articleCount > 1) {
                            setCount(articleCount - 2);
                        }
                        console.log(articleCount);
                    }}
                    className={
                        articleCount > 2
                            ? "hover:text-blue-600 dark:hover:text-blue-400"
                            : "text-gray-500 cursor-not-allowed"
                    }
                >
                    Show Less
                </button>
                <Link href="/articles">
                    <a className="flex-grow text-right hover:text-blue-600 dark:hover:text-blue-400">
                        View All
                    </a>
                </Link>
            </div>
        </section>
    );
}
