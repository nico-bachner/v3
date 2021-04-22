interface Coordinate {
    x: number;
    y: number;
}

interface WrapperProps {
    width: number;
    height: number;
}

const Wrapper = (props: React.PropsWithChildren<WrapperProps>) => (
    <svg
        viewBox={`0 0 ${props.width} ${props.height}`}
        fill="currentColor"
        stroke="currentColor"
        className="w-full h-full"
    >
        {props.children}
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

const Circle = (props: CircleProps) => (
    <circle
        cx={`${props.center.x}`}
        cy={`${props.center.y}`}
        r={`${props.radius ?? 1}`}
        fill={props.fill ? 'currentColor' : 'transparent'}
        strokeWidth={`${props.stroke ?? 1}`}
        clipPath={`url(#clip-${props.clip})`}
    />
);

const SVG = { Wrapper, Circle };

export default SVG;
