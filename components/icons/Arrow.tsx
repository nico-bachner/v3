import SVG, { Path } from '@components/SVG';

interface ArrowProps {
    variant: 'up' | 'down' | 'right';
}

const Arrow: React.VFC<ArrowProps> = ({ variant }) => {
    switch (variant) {
        case 'up':
            return (
                <SVG width={20} height={20}>
                    <Path
                        commands={[
                            { type: 'M', args: [2, 15] },
                            { type: 'L', args: [10, 5] },
                            { type: 'L', args: [18, 15] },
                        ]}
                    />
                </SVG>
            );
        case 'down':
            return (
                <SVG width={20} height={20}>
                    <Path
                        commands={[
                            { type: 'M', args: [2, 5] },
                            { type: 'L', args: [10, 15] },
                            { type: 'L', args: [18, 5] },
                        ]}
                    />
                </SVG>
            );
        case 'right':
            return (
                <SVG width={20} height={20}>
                    <Path
                        commands={[
                            { type: 'M', args: [5, 2] },
                            { type: 'L', args: [15, 10] },
                            { type: 'L', args: [5, 18] },
                        ]}
                    />
                </SVG>
            );
    }
};

export default Arrow;
