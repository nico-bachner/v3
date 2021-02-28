import Link from "next/link";

export default function InternalLink(props) {
    return (
        <Link href={props.href} as={props.as}>
            <a
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
        </Link>
    );
}
