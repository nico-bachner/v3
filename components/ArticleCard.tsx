import Card from './Card';
import Link from './Link';

interface Props {
    slug: string;
    title?: string;
    description?: string;
    dev_url: string;
}

export default function ArticleCard(props: Props) {
    return (
        <Card>
            <h3 className="capitalize">{props.title}</h3>
            <p className="mt-2 mb-4">{props.description}</p>
            <p className="space-x-8">
                <Link href={props.dev_url}>Read on DEV</Link>
                <Link href={'/articles/' + props.slug}>Read Here</Link>
            </p>
        </Card>
    );
}
