import SVG, { Line, Rect } from 'components/SVG';

const Minus = ({ width = 24, height = 24, padding = 8, sign = 4 }) => (
    <SVG width={width} height={height}>
        <Rect
            centre={{ x: width / 2, y: height / 2 }}
            width={width - 2 * padding}
            height={height - 2 * padding}
        />
        <Line
            from={{ x: padding + (1 / 2) * sign, y: height / 2 }}
            to={{ x: padding + (3 / 2) * sign, y: height / 2 }}
        />
    </SVG>
);

export default Minus;
