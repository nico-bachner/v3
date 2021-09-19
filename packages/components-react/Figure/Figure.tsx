import styles from './Figure.module.css';

import Text from '../Text';

type FigureProps = {
    id: string;
    caption: string;
    className?: string;
};

const Figure: React.FC<FigureProps> = ({
    children,
    id,
    caption,
    className,
}) => (
    <figure id={`fig-${id}`} className={[styles.figure, className].join(' ')}>
        {children}

        <figcaption className={styles.caption}>
            <Text type="strong">Figure {id}:</Text> {caption}
        </figcaption>
    </figure>
);

export default Figure;
