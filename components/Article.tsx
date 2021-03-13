import InternalLink from "./InternalLink";
import Card from "./Card";

interface ArticleType {
    title: string;
    slug: string;
    summary: string;
}

interface Props {
    article: ArticleType;
}

export default function Article({ article }: Props) {
    return (
        <InternalLink className="" href={"/articles/" + article.slug}>
            <Card>
                <h3 className="text-3xl">{article.title}</h3>
                <p className="mt-2">{article.summary}</p>
            </Card>
        </InternalLink>
    );
}
