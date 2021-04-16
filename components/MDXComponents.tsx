import Link from './Link';
import Image, { ImageProps } from './Image';

interface Props {
    children: React.ReactNode;
}

export const MDXComponents = {
    wrapper: (props: Props) => <>{props.children}</>,
    h1: (props: Props) => (
        <h1 className="max-w-2xl mx-auto">{props.children}</h1>
    ),
    h2: (props: Props) => (
        <h2 className="max-w-2xl mx-auto mt-16">{props.children}</h2>
    ),
    h3: (props: Props) => (
        <h3 className="max-w-2xl mx-auto mt-12">{props.children}</h3>
    ),
    h4: (props: Props) => (
        <h4 className="max-w-2xl mx-auto mt-8">{props.children}</h4>
    ),
    p: (props: Props) => (
        <p className="max-w-2xl mx-auto my-4">{props.children}</p>
    ),
    ul: (props: Props) => (
        <ul className="max-w-2xl pl-4 mx-auto my-4 list-disc list-inside">
            {props.children}
        </ul>
    ),
    ol: (props: Props) => (
        <ol className="max-w-2xl pl-4 mx-auto my-4 list-decimal list-inside">
            {props.children}
        </ol>
    ),
    li: (props: Props) => <li className="my-1">{props.children}</li>,
    inlineCode: (props: Props) => (
        <code className="inline-block px-1 border rounded">
            {props.children}
        </code>
    ),
    code: (props: Props) => (
        <pre className="relative max-w-2xl px-3 py-1.5 mx-auto my-2 overflow-x-scroll border rounded">
            <code>{props.children}</code>
        </pre>
    ),
    a: Link,
    Image: (props: ImageProps) => (
        <div className="max-w-3xl mx-auto my-8 sm:my-12">
            <Image {...props} className="mx-auto max-w-max" />
        </div>
    ),
};
