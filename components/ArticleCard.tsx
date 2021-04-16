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
    content: any;
}

export default function ArticleCard(article: ArticleProps) {
    return (
        <Card href={'/articles/' + article.slug} locale="en">
            <h3 className="capitalize">{article.data.title}</h3>
            <p className="my-2">{article.data.summary}</p>
            <div className="flex justify-between">
                <p className="text-azure">Read More {'->'}</p>
                <p className="text-gray-light">{article.time} minute read</p>
            </div>
        </Card>
    );
}
