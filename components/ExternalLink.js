export default function ExternalLink(props) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
                props.styled == "false"
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
