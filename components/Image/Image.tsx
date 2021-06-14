import NextImage, { ImageProps } from 'next/image';

import styles from './Image.module.css';

const Image: React.VFC<ImageProps> = (image) => (
    <div className={image.className}>
        <NextImage {...image} className={styles.image} />
    </div>
);

export default Image;
