/* ---- svg wrapper ---- */

interface SVGProps {
    width: number;
    height: number;
}

const SVG: React.FC<SVGProps> = (svg) => (
    <svg
        viewBox={`0 0 ${svg.width} ${svg.height}`}
        fill="currentColor"
        stroke="currentColor"
        className="w-full h-full"
    >
        {svg.children}
    </svg>
);

export default SVG;

/* ---- svg elements ---- */

interface Coordinate {
    x: number;
    y: number;
}

interface PathProps {
    commands: string[];
    stroke?: number;
    fill?: string;
}

export const Path: React.VFC<PathProps> = (path) => (
    <path
        d={path.commands.join(' ')}
        stroke="currentColor"
        strokeWidth={path.stroke}
        fill={path.fill ?? 'none'}
    />
);

interface CircleProps {
    centre: Coordinate;
    radius: number;
    stroke?: number;
    fill?: string;
    clip?: string;
    className?: string;
}

export const Circle: React.VFC<CircleProps> = (circle) => (
    <circle
        cx={circle.centre.x}
        cy={circle.centre.y}
        r={circle.radius ?? 1}
        fill={circle.fill ?? 'none'}
        strokeWidth={circle.stroke ?? 1}
        clipPath={`url(#clip-${circle.clip})`}
    />
);
