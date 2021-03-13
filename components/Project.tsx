import InternalLink from "./InternalLink";
import Card from "./Card";

interface Project {
    title: string;
    slug: string;
    summary: string;
}

export default function Project(project: Project) {
    return (
        <InternalLink className="" href={"/projects/" + project.slug}>
            <Card>
                <h3>{project.title}</h3>
                <p className="mt-2">{project.summary}</p>
            </Card>
        </InternalLink>
    );
}
