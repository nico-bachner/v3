import SVG, { Path, Circle } from '../SVG';

import styles from './Logo.module.css';

const Logo: React.VFC = () => (
    <SVG width={60} height={60}>
        <title>Nico Logo</title>
        <desc>A minimalistic rendering of a bike chain</desc>

        <Path
            commands={[
                'M 15 35',
                'A 10 10, 0, 1, 0, 25 45',
                'A 5 5, 0, 0, 1, 30 40',
                'A 10 10, 0, 1, 0, 20 30',
                'A 5 5, 0, 0, 1, 15 35',
            ]}
            strokeWidth={3.5}
            className={styles.majorEdge}
        />
        <Path
            commands={[
                'M 40 30',
                'A 5 5, 0, 0, 1, 45 25',
                'A 10 10, 0, 1, 0, 35 15',
                'A 5 5, 0, 0, 1, 30 20',
            ]}
            strokeWidth={3.5}
            className={styles.minorEdge}
        />
        <Circle
            centre={{ x: 45, y: 15 }}
            radius={3.5}
            strokeWidth={3.5}
            className={styles.centreCircle}
        />
        <Circle
            centre={{ x: 30, y: 30 }}
            radius={3.5}
            strokeWidth={3.5}
            className={styles.centreCircle}
        />
        <Circle
            centre={{ x: 15, y: 45 }}
            radius={3.5}
            strokeWidth={3.5}
            className={styles.centreCircle}
        />
    </SVG>
);

export default Logo;