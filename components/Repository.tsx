import ExternalLink from "./ExternalLink";
import Card from "./Card";

interface Props {
    name: string;
    description: string;
    href: string;
}

export default function Repository(props: Props) {
    return (
        <ExternalLink className="" href={props.href}>
            <Card>
                <h3 className="text-2xl capitalize">
                    {props.name
                        .replaceAll("-", " ")
                        .replaceAll("md", "Markdown")}
                </h3>
                <p>{props.description}</p>
            </Card>
        </ExternalLink>
    );
}
