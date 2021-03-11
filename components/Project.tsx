import InternalLink from "./InternalLink";
import Card from "./Card";

interface Props {
    href: string;
    children: React.ReactNode;
}

export default function Project(props: Props) {
    return (
        <InternalLink className="" href={props.href}>
            <Card>{props.children}</Card>
        </InternalLink>
    );
}
