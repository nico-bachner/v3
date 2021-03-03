export default function ExternalLink(props) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className={
                props.unstyled
                    ? props.className
                    : "text-blue hover:underline" + " " + props.className
            }
            {...props}
        >
            {props.children}
        </a>
    );
}
