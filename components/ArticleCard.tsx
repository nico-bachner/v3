import Card from './Card';

type Props = ArticleCardProps & { className?: string };

const ArticleCard: React.VFC<Props> = (article) => (
    <Card href={'/articles/' + article.slug} className={article.className}>
        <h3>{article.title}</h3>
        <p className="my-2 line-clamp-3">{article.description}</p>
        <div className="flex justify-between">
            <p className="text-azure">Read More →</p>
            <p className="text-light">{article.reading_time} minute read</p>
        </div>
    </Card>
);

export default ArticleCard;
