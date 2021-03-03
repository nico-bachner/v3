import Link from "next/link";

export default function InternalLink(props) {
    return (
        <Link href={props.href} as={props.as}>
            <a
                className={
                    props.unstyled == "true"
                        ? props.className
                        : "text-blue hover:underline" + " " + props.className
                }
                {...props}
            >
                {props.children}
            </a>
        </Link>
    );
}
