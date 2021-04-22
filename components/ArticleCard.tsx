import Card from './Card';

import { ArticleProps } from './Article';

const ArticleCard = (article: ArticleProps) => (
    <Card href={'/articles/' + article.slug}>
        <h3 className="capitalize">{article.title}</h3>
        <p className="my-2">{article.summary}</p>
        <div className="flex justify-between">
            <p className="text-azure">Read More {'->'}</p>
            <p className="text-gray-light">{article.time} minute read</p>
        </div>
    </Card>
);

export default ArticleCard;
