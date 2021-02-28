import InternalLink from "./InternalLink";
import Card from "./Card";

export default function Project(props) {
    return (
        <InternalLink unstyled="true" {...props}>
            <Card link="true" className="px-6 py-4 sm:px-8 sm:py-6">
                {props.children}
            </Card>
        </InternalLink>
    );
}
