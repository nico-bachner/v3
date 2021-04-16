import Card from './Card';

interface Data {
    title: string;
    summary: string;
    published: Date;
}

export interface ArticleProps {
    slug: string;
    data: Data;
    time: number;
    mdx: any;
}

export default function ArticleCard(article: ArticleProps) {
    return (
        <Card href={'/articles/' + article.slug} locale="en">
            <h3 className="capitalize">{article.data.title}</h3>
            <p className="my-2">
                {article.data.summary}
                <span className="ml-4 text-azure">Read More {'->'}</span>
            </p>
            <p className="text-gray-strong">{article.time} minute read</p>
        </Card>
    );
}
