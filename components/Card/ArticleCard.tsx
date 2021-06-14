import Card from './Card';

const ArticleCard: React.VFC<CardProps<ArticleData> & DefaultProps> = ({
    id,
    slug,
    title,
    description,
    reading_time,
    className,
}) => (
    <Card id={id} href={'/articles/' + slug} locale="en" className={className}>
        <h3>{title}</h3>
        <p className="my-2 line-clamp-3">{description}</p>
        <div className="flex justify-between">
            <p className="text-azure">Read More →</p>
            <p className="text-light">{reading_time} minute read</p>
        </div>
    </Card>
);

export default ArticleCard;
