export default function ExternalLink(props) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {props.children}
        </a>
    );
}
