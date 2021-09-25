import { SVG, Line } from '@nico-bachner/svg-react';

type SignMinusProps = {
    color?: string;
    className?: string;
};

const SignMinus: React.VFC<SignMinusProps> = ({ color, className }) => (
    <SVG color={color} className={className}>
        <Line
            points={[
                { x: 5, y: 12 },
                { x: 19, y: 12 },
            ]}
        />
    </SVG>
);

export default SignMinus;
