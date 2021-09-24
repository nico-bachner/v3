import styles from './Chart.module.css';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type DataItem = {
    value: number;
    label?: string;
    color?: string;
};

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
            const element = d3.select(ref.current);

            switch (type) {
                case 'pie':
                    const pie = d3.pie();
                    const arc = d3.arc();

                    element.select('svg').remove();

                    const svg = element
                        .append('svg')
                        .attr('viewBox', `0 0 100 100`)
                        .append('g')
                        .attr('transform', `translate(50, 50)`);

                    const arcs = svg
                        .selectAll()
                        .data(pie(data.map((item) => item.value)))
                        .enter();

                    arcs.append('path')
                        .attr('d', ({ startAngle, endAngle }) =>
                            arc({
                                innerRadius: 0,
                                outerRadius: 50,
                                startAngle,
                                endAngle,
                            })
                        )
                        .style('fill', (_, index) => {
                            const hue = index * (360 / data.length);

                            return (
                                data[index]?.color ?? `hsl(${hue}deg, 80%, 40%)`
                            );
                        });

                    arcs.append('text')
                        .text((_, index) => data[index]!.label!)
                        .attr('text-anchor', 'middle')
                        .attr(
                            'transform',
                            ({ startAngle, endAngle }, index) => {
                                const [x, y] = arc.centroid({
                                    innerRadius: 0,
                                    outerRadius: Math.min(
                                        50 + Math.sqrt(index) * 20,
                                        90
                                    ),
                                    startAngle,
                                    endAngle,
                                });

                                return `translate(${x}, ${y})`;
                            }
                        )
                        .style('fill', 'var(--color-neutral-1)')
                        .style('font-family', 'var(--font-sans)')
                        .style('font-size', fontSize);
            }
        }
    }, [ref, type, data, fontSize]);

    return <div className={[styles.chart, className].join(' ')} ref={ref} />;
};

export default Chart;
