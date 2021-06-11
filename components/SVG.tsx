/* ---- svg wrapper ---- */

interface SVGProps {
    width: number;
    height: number;
}

const SVG: React.FC<SVGProps & DefaultProps> = (svg) => (
    <svg
        {...svg}
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
    strokeWidth?: number;
    fill?: string;
}

export const Path: React.VFC<PathProps & DefaultProps> = (path) => (
    <path
        {...path}
        d={path.commands.join(' ')}
        stroke="currentColor"
        fill={path.fill ?? 'none'}
    />
);

interface CircleProps {
    centre: Coordinate;
    radius: number;
    strokeWidth?: number;
    fill?: string;
    clip?: string;
    className?: string;
}

export const Circle: React.VFC<CircleProps & DefaultProps> = (circle) => (
    <circle
        {...circle}
        cx={circle.centre.x}
        cy={circle.centre.y}
        r={circle.radius ?? 1}
        fill={circle.fill ?? 'none'}
        clipPath={`url(#clip-${circle.clip})`}
    />
);
