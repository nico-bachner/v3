import styles from './SVG.module.css';

type SVGProps = {
    width?: number;
    height?: number;
    thickness?: number;
    className?: string;
};

const SVG: React.FC<SVGProps> = ({
    children,
    width = 12,
    height = 12,
    thickness = 0.75,
    className,
}) => (
    <svg
        width={width}
        height={height}
        viewBox={[0, 0, width, height].join(' ')}
        className={[styles.svg, className].join(' ')}
        strokeWidth={thickness}
    >
        {children}
    </svg>
);

export default SVG;
