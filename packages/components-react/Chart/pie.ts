import type { DataItem } from './types';

type PieProps = {
    ref: React.RefObject<HTMLAnchorElement>;
    data: DataItem[];
    fontSize: string;
};

const pie = async ({ ref, data, fontSize }: PieProps) => {
    const d3 = await import('d3');

    const element = d3.select(ref.current);

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
        .data(pie(data?.map((item) => item.value)))
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

            return data[index]?.color ?? `hsl(${hue}deg, 80%, 40%)`;
        });

    arcs.append('text')
        .text((_, index) => data[index]!.label!)
        .attr('text-anchor', 'middle')
        .attr('transform', ({ startAngle, endAngle }, index) => {
            const [x, y] = arc.centroid({
                innerRadius: 0,
                outerRadius: Math.min(50 + Math.sqrt(index) * 20, 90),
                startAngle,
                endAngle,
            });

            return `translate(${x}, ${y})`;
        })
        .style('fill', 'var(--color-neutral-1)')
        .style('font-family', 'var(--font-sans)')
        .style('font-size', fontSize);
};

export { pie };
