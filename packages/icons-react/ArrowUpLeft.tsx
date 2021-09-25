import { SVG, Line } from '@nico-bachner/svg-react';

type ArrowUpLeftProps = {
    color?: string;
    className?: string;
};

const ArrowUpLeft: React.VFC<ArrowUpLeftProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 7, y: 7 },
                { x: 17, y: 17 },
            ]}
        />
        <Line
            points={[
                { x: 7, y: 17 },
                { x: 7, y: 7 },
                { x: 17, y: 7 },
            ]}
        />
    </SVG>
);

export default ArrowUpLeft;
