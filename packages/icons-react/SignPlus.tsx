import SVG from '@nico-bachner/svg-react';

type SignPlusProps = {
    className?: string;
};

const SignPlus: React.VFC<SignPlusProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 5, y: 12 },
                { x: 19, y: 12 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 12, y: 5 },
                { x: 12, y: 19 },
            ]}
        />
    </SVG.Root>
);

export default SignPlus;
