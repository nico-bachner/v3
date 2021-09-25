import { SVG, Line } from '@nico-bachner/svg-react';

type ArrowUpRightProps = {
    color?: string;
    className?: string;
};

const ArrowUpRight: React.VFC<ArrowUpRightProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 7, y: 17 },
                { x: 17, y: 7 },
            ]}
        />
        <Line
            points={[
                { x: 7, y: 7 },
                { x: 17, y: 7 },
                { x: 17, y: 17 },
            ]}
        />
    </SVG>
);

export default ArrowUpRight;
