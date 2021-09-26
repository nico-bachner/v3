import { SVG, Line } from '@nico-bachner/svg-react';

type ArrowLeftProps = {
    color?: string;
    className?: string;
};

const ArrowLeft: React.VFC<ArrowLeftProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 19, y: 12 },
                { x: 5, y: 12 },
            ]}
        />
        <Line
            points={[
                { x: 12, y: 19 },
                { x: 5, y: 12 },
                { x: 12, y: 5 },
            ]}
        />
    </SVG>
);

export default ArrowLeft;
