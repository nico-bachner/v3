import SVG, { Path } from 'components/SVG';

type Coordinate = {
    x: number;
    y: number;
};

const Move = (to: Coordinate) => ['M', to.x, to.y].join(' ');
const Line = (to: Coordinate) => ['L', to.x, to.y].join(' ');

type ArrowProps = {
    variant: 'up' | 'down' | 'right';
};

const Arrow: React.VFC<ArrowProps> = ({ variant }) => {
    switch (variant) {
        case 'up':
            return (
                <SVG width={20} height={20}>
                    <Path
                        commands={[
                            Move({ x: 2, y: 15 }),
                            Line({ x: 10, y: 5 }),
                            Line({ x: 18, y: 15 }),
                        ]}
                    />
                </SVG>
            );
        case 'down':
            return (
                <SVG width={20} height={20}>
                    <Path
                        commands={[
                            Move({ x: 2, y: 5 }),
                            Line({ x: 10, y: 15 }),
                            Line({ x: 18, y: 5 }),
                        ]}
                    />
                </SVG>
            );
        case 'right':
            return (
                <SVG width={20} height={20}>
                    <Path
                        commands={[
                            Move({ x: 5, y: 2 }),
                            Line({ x: 15, y: 10 }),
                            Line({ x: 5, y: 18 }),
                        ]}
                    />
                </SVG>
            );
    }
};

export default Arrow;
