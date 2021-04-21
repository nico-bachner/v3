interface Coordinate {
    x: number;
    y: number;
}

interface WrapperProps {
    width: number;
    height: number;
}

const Wrapper = ({
    width,
    height,
    children,
}: React.PropsWithChildren<WrapperProps>) => (
    <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="currentColor"
        stroke="currentColor"
        className="w-full h-full"
    >
        {children}
    </svg>
);

interface CircleProps {
    center: Coordinate;
    radius: number;
    stroke?: number;
    fill?: boolean;
    clip?: string;
    className?: string;
}

const Circle = ({ center, radius, stroke, fill, clip }: CircleProps) => (
    <circle
        cx={`${center.x}`}
        cy={`${center.y}`}
        r={`${radius ?? 1}`}
        fill={fill ? 'currentColor' : 'transparent'}
        strokeWidth={`${stroke ?? 1}`}
        clipPath={`url(#clip-${clip})`}
    />
);

const SVG = { Wrapper, Circle };

export default SVG;
