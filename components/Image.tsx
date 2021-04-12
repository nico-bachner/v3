import NextImage from 'next/image';

export interface ImageProps {
    src: string;
    width: string;
    height: string;
    alt: string;
    className?: string;
}

export default function Link(props: ImageProps) {
    return (
        <div
            className={`filter dark:brightness-75 dark:hover:brightness-100 ${props.className}`}
        >
            <NextImage {...props} />
        </div>
    );
}
