import { SVG, Line } from '@nico-bachner/svg-react';

type ArrowDownRightProps = {
    color?: string;
    className?: string;
};

const ArrowDownRight: React.VFC<ArrowDownRightProps> = ({
    color,
    className,
}) => (
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
                { x: 17, y: 17 },
                { x: 17, y: 7 },
            ]}
        />
    </SVG>
);

export default ArrowDownRight;
