import Link from "next/link";

export default function InternalLink(props: {
    href: string;
    as?: string;
    className?: string;
    unstyled?: boolean;
    children?: React.ReactNode;
}) {
    return (
        <Link href={props.href} as={props.as}>
            <a className={props.className ?? "text-blue hover:underline"}>
                {props.children}
            </a>
        </Link>
    );
}
