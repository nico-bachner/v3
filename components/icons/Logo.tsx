import SVG, { Path, Circle } from '@components/SVG';

// import styles from './Logo.module.css';

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
        <SVG>
            <title>Nico Logo</title>
            <desc>A minimalistic rendering of a bike chain</desc>

            {
                // #1
            }
            <Path
                draw={{ duration: 900 }}
                commands={[
                    // bottom left arc
                    Move({ x: 4, y: 6 }),
                    Arc({ x: 1, y: 1 }, 0, 0, 1, { x: 3, y: 7 }),
                    Arc({ x: 2, y: 2 }, 0, 1, 0, { x: 5, y: 9 }),
                    Arc({ x: 1, y: 1 }, 0, 0, 1, { x: 6, y: 8 }),
                    Arc({ x: 2, y: 2 }, 0, 0, 0, { x: 8, y: 6 }),
                ]}
            />
            <Path
                draw={{ duration: 900 }}
                commands={[
                    // top right arc
                    Move({ x: 8, y: 6 }),
                    Arc({ x: 1, y: 1 }, 0, 0, 1, { x: 9, y: 5 }),
                    Arc({ x: 2, y: 2 }, 0, 1, 0, { x: 7, y: 3 }),
                    Arc({ x: 1, y: 1 }, 0, 0, 1, { x: 6, y: 4 }),
                    Arc({ x: 2, y: 2 }, 0, 0, 0, { x: 4, y: 6 }),
                ]}
            />
            {
                // #2
            }
            <Path
                draw={{ duration: 600, delay: 1200 }}
                commands={[
                    // top right circle
                    Move({ x: 9, y: 2.25 }),
                    Arc({ x: 0.75, y: 0.75 }, 0, 0, 0, { x: 9, y: 3.75 }),
                    Arc({ x: 0.75, y: 0.75 }, 0, 0, 0, { x: 9, y: 2.25 }),
                ]}
            />
            <Path
                draw={{ duration: 600, delay: 1200 }}
                commands={[
                    // centre circle
                    Move({ x: 6, y: 5.25 }),
                    Arc({ x: 0.75, y: 0.75 }, 0, 0, 0, { x: 6, y: 6.75 }),
                    Arc({ x: 0.75, y: 0.75 }, 0, 0, 0, { x: 6, y: 5.25 }),
                ]}
            />
            <Path
                draw={{ duration: 600, delay: 1200 }}
                commands={[
                    // bottom left circle
                    Move({ x: 3, y: 8.25 }),
                    Arc({ x: 0.75, y: 0.75 }, 0, 0, 0, { x: 3, y: 9.75 }),
                    Arc({ x: 0.75, y: 0.75 }, 0, 0, 0, { x: 3, y: 8.25 }),
                ]}
            />
            {
                // #3
            }
            <Path
                draw={{ duration: 300, delay: 2100 }}
                commands={[
                    // centre top right connector
                    Move({ x: 8, y: 6 }),
                    Arc({ x: 2, y: 2 }, 0, 0, 0, { x: 6, y: 4 }),
                ]}
            />
        </SVG>
    );
};

export default Logo;
