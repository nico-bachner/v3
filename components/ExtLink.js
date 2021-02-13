export default function ExtLink(props) {
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
