export interface CodeProps {
    children: string;
    language?: string;
}

export default function Code(props: CodeProps) {
    return (
        <pre className="relative max-w-2xl px-3 py-1.5 mx-auto my-2 overflow-x-scroll border rounded">
            <code>{props.children}</code>
        </pre>
    );
}
