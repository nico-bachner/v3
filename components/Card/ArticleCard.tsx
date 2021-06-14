import Card from './Card';

type ArticleCardProps = CardProps<ArticleData> & {
    className?: string;
};

const ArticleCard: React.VFC<ArticleCardProps> = ({
    slug,
    title,
    description,
    reading_time,
    className,
}) => (
    <Card href={'/articles/' + slug} locale="en" className={className}>
        <h3>{title}</h3>
        <p className="my-2 line-clamp-3">{description}</p>
        <div className="flex justify-between">
            <p className="text-azure">Read More →</p>
            <p className="text-light">{reading_time} minute read</p>
        </div>
    </Card>
);

export default ArticleCard;
