import Card from './Card';
import Link from '@components/Link';

const ArticleCard: React.VFC<ArticleData> = ({
    title,
    description,
    slug,
    reading_time,
}) => (
    <Link href={`/articles/${slug}`}>
        <Card variant="interactive">
            <h3>{title}</h3>
            <p className="my-2 line-clamp-3">{description}</p>
            <div className="flex justify-between">
                <p className="text-azure">Read More →</p>
                <p className="text-light">{reading_time} minute read</p>
            </div>
        </Card>
    </Link>
);

export default ArticleCard;
