import IntLink from "@components/IntLink";
import Card from "@components/Card";

export default function Project(props) {
    return (
        <IntLink {...props}>
            <Card link className="px-6 py-4 sm:px-8 sm:py-6">
                {props.children}
            </Card>
        </IntLink>
    );
}
