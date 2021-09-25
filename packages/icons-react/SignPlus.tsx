import { SVG, Line } from '@nico-bachner/svg-react';

type SignPlusProps = {
    color?: string;
    className?: string;
};

const SignPlus: React.VFC<SignPlusProps> = ({ color, className }) => (
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
                { x: 12, y: 19 },
            ]}
        />
    </SVG>
);

export default SignPlus;
