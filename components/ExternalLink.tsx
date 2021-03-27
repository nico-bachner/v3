export default function ExternalLink(props: {
    href: string;
    className?: string;
    unstyled?: boolean;
    children?: React.ReactNode;
}) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className={props.className ?? 'text-blue hover:underline'}
        >
            {props.children}
        </a>
    );
}
