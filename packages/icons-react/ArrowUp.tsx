import { SVG, Line } from '@nico-bachner/svg-react';

type ArrowUpProps = {
    color?: string;
    className?: string;
};

const ArrowUp: React.VFC<ArrowUpProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 12, y: 19 },
                { x: 12, y: 5 },
            ]}
        />
        <Line
            points={[
                { x: 19, y: 12 },
                { x: 12, y: 5 },
                { x: 5, y: 12 },
            ]}
        />
    </SVG>
);

export default ArrowUp;
