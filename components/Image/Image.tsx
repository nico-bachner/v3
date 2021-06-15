import NextImage, { ImageProps } from 'next/image';

import styles from './Image.module.css';

const Image: React.VFC<ImageProps> = ({ className, ...image }) => (
    <NextImage {...image} className={styles.image + ' ' + className} />
);

export default Image;
