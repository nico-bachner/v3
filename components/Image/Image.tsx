import NextImage from 'next/image';

import styles from './Image.module.css';

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const Image: React.VFC<ImageProps> = (image) => (
    <div className={styles.image}>
        <NextImage {...image} />
    </div>
);

export default Image;
