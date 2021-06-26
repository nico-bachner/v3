import SVG, { Path, Circle } from '@components/SVG';

import styles from './Logo.module.css';

type Coordinate = {
    x: number;
    y: number;
};

type Radius = {
    x: number;
    y: number;
};

const Logo = () => {
    const Move = (to: Coordinate) => ['M', to.x, to.y].join(' ');
    const Arc = (
        radius: Radius,
        rotation: number, // from -180 degrees to 180 degrees
        arc: 0 | 1,
        sweep: 0 | 1,
        to: Coordinate
    ) => ['A', radius.x, radius.y, rotation, arc, sweep, to.x, to.y].join(' ');

    return (
        <SVG className={styles.logo}>
            <title>Nico Logo</title>
            <desc>A minimalistic rendering of a bike chain</desc>

            <Path
                commands={[
                    // major arc
                    Move({ x: 4, y: 6 }),
                    Arc({ x: 1, y: 1 }, 0, 0, 1, { x: 3, y: 7 }),
                    Arc({ x: 2, y: 2 }, 0, 1, 0, { x: 5, y: 9 }),
                    Arc({ x: 1, y: 1 }, 0, 0, 1, { x: 6, y: 8 }),
                    Arc({ x: 2, y: 2 }, 0, 1, 0, { x: 4, y: 6 }),

                    // minor arc
                    Move({ x: 8, y: 6 }),
                    Arc({ x: 1, y: 1 }, 0, 0, 1, { x: 9, y: 5 }),
                    Arc({ x: 2, y: 2 }, 0, 1, 0, { x: 7, y: 3 }),
                    Arc({ x: 1, y: 1 }, 0, 0, 1, { x: 6, y: 4 }),
                ]}
            />
            <Circle centre={{ x: 9, y: 3 }} radius={0.75} />
            <Circle centre={{ x: 6, y: 6 }} radius={0.75} />
            <Circle centre={{ x: 3, y: 9 }} radius={0.75} />
        </SVG>
    );
};

export default Logo;
