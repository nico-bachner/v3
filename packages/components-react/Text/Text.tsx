import classes from './Text.module.css';

type TextProps = {
    type?: 'h1' | 'h2' | 'h3' | 'strong' | 'p';
    color?: Color;
    size?: FontSize;
    weight?: FontWeight;
    align?: 'left' | 'center' | 'right';
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    margin?: [Space, Space] | Space;
    className?: string;
    style?: React.CSSProperties;
};

const Text: React.FC<TextProps> = ({
    children,
    type = 'p',
    color,
    size,
    weight,
    align,
    transform,
    margin,
    className,
    style,
}) => {
    type Styling = {
        className: string;
        style: React.CSSProperties;
    };

    const styling: Styling = {
        className: [
            classes.text,
            classes[`type-${type}`],
            classes[`size-${size}`],
            classes[`weight-${weight}`],
            className,
        ].join(' '),
        style: {
            color: color ? `var(--color-${color}) ` : undefined,
            textAlign: align,
            textTransform: transform,
            marginBlock: margin
                ? Array.isArray(margin)
                    ? margin.map((x) => `var(--space-${x})`).join(' ')
                    : `var(--space-${margin})`
                : undefined,
            ...style,
        },
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
