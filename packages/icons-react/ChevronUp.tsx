import { SVG, Line } from '@nico-bachner/svg-react';

type ChevronUpProps = {
    color?: string;
    className?: string;
};

const ChevronUp: React.VFC<ChevronUpProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 6, y: 15 },
                { x: 12, y: 9 },
                { x: 18, y: 15 },
            ]}
        />
    </SVG>
);

export default ChevronUp;
