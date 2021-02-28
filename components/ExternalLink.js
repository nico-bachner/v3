export default function ExternalLink(props) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className={
                props.unstyled
                    ? props.className
                    : "text-blue hover:text-blue-light active:text-blue-dark" +
                      " " +
                      props.className
            }
            {...props}
        >
            {props.children}
        </a>
    );
}
