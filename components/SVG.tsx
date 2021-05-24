import React from 'react';

interface Coordinate {
    x: number;
    y: number;
}

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

interface CircleProps {
    center: Coordinate;
    radius: number;
    stroke?: number;
    fill?: boolean;
    clip?: string;
    className?: string;
}

export const Circle: React.VFC<CircleProps> = (circle) => (
    <circle
        cx={`${circle.center.x}`}
        cy={`${circle.center.y}`}
        r={`${circle.radius ?? 1}`}
        fill={circle.fill ? 'currentColor' : 'transparent'}
        strokeWidth={`${circle.stroke ?? 1}`}
        clipPath={`url(#clip-${circle.clip})`}
    />
);

export default SVG;
