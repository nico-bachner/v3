import { SVG, Line } from '@nico-bachner/svg-react';

type ChevronDownProps = {
    color?: string;
    className?: string;
};

const ChevronDown: React.VFC<ChevronDownProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 6, y: 9 },
                { x: 12, y: 15 },
                { x: 18, y: 9 },
            ]}
        />
    </SVG>
);

export default ChevronDown;
