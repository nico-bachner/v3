import NextImage, { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps;

export default function Image(props: ImageProps) {
    return (
        // this <div> is important because the Next.js <Image> component adjusts according to its parent element, not itself
        <div
            className={`filter dark:brightness-75 dark:hover:brightness-100 ${props.className}`}
        >
            <NextImage {...props} />
        </div>
    );
}
