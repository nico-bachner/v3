import { SVG, Line } from '@nico-bachner/svg-react';

type ChevronRightProps = {
    color?: string;
    className?: string;
};

const ChevronRight: React.VFC<ChevronRightProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 9, y: 6 },
                { x: 15, y: 12 },
                { x: 9, y: 18 },
            ]}
        />
    </SVG>
);

export default ChevronRight;
