import { SVG, Line } from '@nico-bachner/svg-react';

type ArrowDownProps = {
    color?: string;
    className?: string;
};

const ArrowDown: React.VFC<ArrowDownProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 12, y: 5 },
                { x: 12, y: 19 },
            ]}
        />
        <Line
            points={[
                { x: 5, y: 12 },
                { x: 12, y: 19 },
                { x: 19, y: 12 },
            ]}
        />
    </SVG>
);

export default ArrowDown;
