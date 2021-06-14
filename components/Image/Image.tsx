import NextImage, { ImageProps } from 'next/image';

import styles from './Image.module.css';

const Image: React.VFC<ImageProps & DefaultProps> = (image) => (
    <div id={image.id} className={image.className}>
        <NextImage {...image} className={styles.image} />
    </div>
);

export default Image;
