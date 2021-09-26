type SVGProps = {
    width?: number;
    height?: number;
    color?: string;
    thickness?: number;
    className?: string;
};

const SVG: React.FC<SVGProps> = ({
    children,
    width = 24,
    height = 24,
    color = 'currentColor',
    thickness = 1.5,
    className,
}) => (
    <svg
        viewBox={[0, 0, width, height].join(' ')}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {children}
    </svg>
);

export default SVG;
