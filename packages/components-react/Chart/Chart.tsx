import styles from './Chart.module.css';

import { useEffect, useRef } from 'react';
import { pie } from './pie';

import type { DataItem } from './types';

type ChartProps = {
    type: 'pie';
    data: DataItem[];
    fontSize?: `${number}px`;
    className?: string;
};

const Chart: React.VFC<ChartProps> = ({
    type,
    data,
    fontSize = '10px',
    className,
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            switch (type) {
                case 'pie':
                    pie({ ref, data, fontSize });
            }
        }
    }, [ref, type, data, fontSize]);

    return <div className={[styles.chart, className].join(' ')} ref={ref} />;
};

export default Chart;
