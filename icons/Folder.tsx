import SVG, { Path } from 'components/SVG';

type Coordinate = {
    x: number;
    y: number;
};

const Move = (to: Coordinate) => ['M', to.x, to.y].join(' ');
const Line = (to: Coordinate) => ['L', to.x, to.y].join(' ');

const Folder = ({ width = 24, height = 20, padding = 1, inset = 0.5 }) => (
    <SVG width={width} height={height}>
        <Path
            commands={[
                // front cover of folder
                Move({ x: padding, y: padding + height / 8 }),
                Line({ x: width - padding, y: padding + height / 8 }),
                Line({ x: width - (padding + inset), y: height - padding }),
                Line({ x: padding + inset, y: height - padding }),
                'Z',

                // preview of files
                Move({ x: padding + width / 24, y: padding + height / 8 }),
                Line({ x: padding + width / 24, y: padding }),
                Line({ x: width / 2 - padding, y: padding }),
                Line({ x: width / 2, y: padding + height / 16 }),
                Line({
                    x: width - (padding + width / 24),
                    y: padding + height / 16,
                }),
                Line({
                    x: width - (padding + width / 24),
                    y: padding + height / 8,
                }),
            ]}
        />
    </SVG>
);

export default Folder;
