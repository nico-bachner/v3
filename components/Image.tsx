import NextImage, { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps;

const Image: React.VFC<ImageProps> = (image) => {
    return (
        <NextImage
            {...image}
            className={`transition duration-300 filter dark:brightness-75 dark:hover:brightness-100 ${image.className}`}
        />
    );
};

export default Image;
