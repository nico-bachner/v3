import { SVG, Line } from '@nico-bachner/svg-react';

type CheckProps = {
    color?: string;
    className?: string;
};

const Check: React.VFC<CheckProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 20, y: 6 },
                { x: 9, y: 17 },
                { x: 4, y: 12 },
            ]}
        />
    </SVG>
);

export default Check;
