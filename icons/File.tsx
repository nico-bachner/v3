import SVG, { Path } from 'components/SVG';

type Coordinate = {
    x: number;
    y: number;
};

const Move = (to: Coordinate) => ['M', to.x, to.y].join(' ');
const Line = (to: Coordinate) => ['L', to.x, to.y].join(' ');
const Quadratic = (via: Coordinate, to: Coordinate) =>
    ['Q', via.x, via.y, to.x, to.y].join(' ');

const File = ({
    width = 20,
    height = 24,
    padding = 1,
    rounded = 1,
    inset = 5,
}) => (
    <SVG width={width} height={height}>
        <Path
            commands={[
                // start at the bottom right of the fold and go clockwise
                Move({ x: width - padding, y: padding + inset }),
                Line({ x: width - padding, y: height - (padding + rounded) }),
                Quadratic(
                    { x: width - padding, y: height - padding },
                    { x: width - (padding + rounded), y: height - padding }
                ),
                Line({ x: padding + rounded, y: height - padding }),
                Quadratic(
                    { x: padding, y: height - padding },
                    { x: padding, y: height - (padding + rounded) }
                ),
                Line({ x: padding, y: padding + rounded }),
                Quadratic(
                    { x: padding, y: padding },
                    { x: padding + rounded, y: padding }
                ),
                Line({ x: width - (padding + inset), y: padding }),
                'Z',

                // left part of fold
                Move({ x: width - (padding + inset), y: padding + inset }),
                Line({ x: width - (padding + inset), y: padding }),

                // bottom part of fold
                Move({ x: width - (padding + inset), y: padding + inset }),
                Line({ x: width - padding, y: padding + inset }),
            ]}
        />
    </SVG>
);

export default File;
