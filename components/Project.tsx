import InternalLink from "./InternalLink";
import Card from "./Card";

export default function Project(props: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <InternalLink className="" href={props.href}>
            <Card className="px-6 py-4 sm:px-8 sm:py-6">{props.children}</Card>
        </InternalLink>
    );
}
