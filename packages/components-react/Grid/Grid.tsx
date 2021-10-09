import styles from './Grid.module.css';

type GridProps = {
    columns: 1 | 2 | 3 | 4;
    gap?: Scale;
    className?: string;
    style?: React.CSSProperties;
};

const Grid: React.FC<GridProps> = ({
    children,
    columns,
    gap,
    className,
    style,
}) => (
    <div
        className={[styles[`columns-${columns}`], className].join(' ')}
        style={{ gap: `var(--space-${gap})`, ...style }}
    >
        {children}
    </div>
);

export default Grid;
