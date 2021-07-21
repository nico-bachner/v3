import classes from './Text.module.css';

type TextProps = {
    type?: 'h1' | 'h2' | 'h3' | 'strong' | 'p';
    color?: Color;
    size?: FontSize | 'base';
    weight?: FontWeight;
    margin?: 'prose' | 'tight' | 'regular' | 'loose';
    align?: 'left' | 'center' | 'right';
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    className?: string;
    style?: React.CSSProperties;
};

const Text: React.FC<TextProps> = ({
    children,
    type = 'p',
    color,
    size,
    weight,
    margin,
    align,
    transform,
    className,
    style,
}) => {
    type Styling = {
        className: string;
        style: React.CSSProperties;
    };

    const styling: Styling = {
        style: {
            color: color ? `var(--color-${color}) ` : undefined,
            // @ts-ignore
            fontWeight: weight ? `var(--font-weight-${weight}) ` : undefined,
            textAlign: align,
            textTransform: transform,
            ...style,
        },
        className: [
            classes.text,
            classes[`type-${type}`],
            classes[`size-${size}`],
            classes[`weight-${weight}`],
            classes[`margin-${margin}`],
            className,
        ].join(' '),
    };

    switch (type) {
        case 'h1':
            return <h1 {...styling}>{children}</h1>;
        case 'h2':
            return <h2 {...styling}>{children}</h2>;
        case 'h3':
            return <h3 {...styling}>{children}</h3>;
        case 'strong':
            return <strong {...styling}>{children}</strong>;
        case 'p':
            return <p {...styling}>{children}</p>;
    }
};

export default Text;
