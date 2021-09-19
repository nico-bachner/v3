import styles from './Image.module.css';

import NextImage from 'next/image';

type ImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
};

const Image: React.VFC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    className,
}) => (
    <div className={[styles.container, className].join(' ')}>
        <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={styles.image}
        />
    </div>
);

export default Image;
