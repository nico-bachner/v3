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

type CommandType = 'M' | 'L' | 'Q' | 'A' | 'Z';

interface Command {
    type: CommandType;
    args: number[];
}

interface PathProps {
    commands: Command[];
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
}

export const Path: React.VFC<PathProps & DefaultProps> = ({
    id,
    className,
    commands,
    stroke,
    strokeWidth,
    fill,
}) => (
    <path
        id={id}
        className={className}
        d={commands
            .map((command) => [command.type, ...command.args].join(' '))
            .join(' ')}
        stroke={stroke ?? 'currentColor'}
        strokeWidth={strokeWidth}
        fill={fill ?? 'none'}
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
