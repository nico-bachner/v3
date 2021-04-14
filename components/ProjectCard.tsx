import Card from './Card';
import Link from './Link';

interface Props {
    slug: string;
    title?: string;
    description?: string;
    github_url?: string;
    demo_url?: string;
}

export default function ProjectCard(props: Props) {
    return (
        <Card>
            <h3 className="capitalize">{props.title ?? props.slug}</h3>
            <p className="mt-2 mb-4">
                {props.description}{' '}
                <span className="inline-block">
                    <Link href={'/projects/' + props.slug}>
                        {'->'}more information
                    </Link>
                </span>
            </p>
            <p className="space-x-8">
                <Link
                    href={props.github_url ?? '/'}
                    className={
                        props.github_url
                            ? 'text-azure hover:underline'
                            : 'cursor-default text-gray-light'
                    }
                >
                    Source Code
                </Link>
                <Link
                    href={props.demo_url ?? '/'}
                    className={
                        props.demo_url
                            ? 'text-azure hover:underline'
                            : 'cursor-default text-gray-light'
                    }
                >
                    Demo / Result
                </Link>
            </p>
        </Card>
    );
}
