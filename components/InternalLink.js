import Link from "next/link";

export default function InternalLink(props) {
    return (
        <Link href={props.href} as={props.as}>
            <a {...props}>{props.children}</a>
        </Link>
    );
}
