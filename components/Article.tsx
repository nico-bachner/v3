import InternalLink from "./InternalLink";
import Card from "./Card";

interface Article {
    title: string;
    slug: string;
    summary: string;
}

export default function Article(article: Article) {
    return (
        <InternalLink className="" href={"/articles/" + article.slug}>
            <Card>
                <h3>{article.title}</h3>
                <p className="mt-2">{article.summary}</p>
            </Card>
        </InternalLink>
    );
}
