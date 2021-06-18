import NextImage from 'next/image';

import styles from './Image.module.css';

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

const Image: React.VFC<ImageProps> = ({ className, ...image }) => (
    <div className={[styles.image, className].join(' ')}>
        <NextImage {...image} />
    </div>
);

export default Image;
