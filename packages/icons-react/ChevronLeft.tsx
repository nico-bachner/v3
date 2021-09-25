import { SVG, Line } from '@nico-bachner/svg-react';

type ChevronLeftProps = {
    color?: string;
    className?: string;
};

const ChevronLeft: React.VFC<ChevronLeftProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 15, y: 6 },
                { x: 9, y: 12 },
                { x: 15, y: 18 },
            ]}
        />
    </SVG>
);

export default ChevronLeft;
