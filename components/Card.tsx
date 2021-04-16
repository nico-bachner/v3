import Link from './Link';

interface Props {
    href?: string;
    locale?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Card(props: Props) {
    if (props.href) {
        return (
            <Link
                href={props.href}
                locale={props.locale}
                className={`link-card ${props.className}`}
            >
                {props.children}
            </Link>
        );
    }
    return <div className={`card ${props.className}`}>{props.children}</div>;
}
