import { SVG, Line } from '@nico-bachner/svg-react';

type ArrowRightProps = {
    color?: string;
    className?: string;
};

const ArrowRight: React.VFC<ArrowRightProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 5, y: 12 },
                { x: 19, y: 12 },
            ]}
        />
        <Line
            points={[
                { x: 12, y: 5 },
                { x: 19, y: 12 },
                { x: 12, y: 19 },
            ]}
        />
    </SVG>
);

export default ArrowRight;
