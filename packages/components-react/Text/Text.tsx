import classes from './Text.module.css';

type TextProps = {
    type?: 'h1' | 'h2' | 'h3' | 'strong';
    color?: Color;
    size?: Scale;
    align?: 'left' | 'center' | 'right';
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    className?: string;
    style?: React.CSSProperties;
};

const Text: React.FC<TextProps> = ({
    children,
    type,
    color,
    size,
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
        className: [
            classes.text,
            classes[`type-${type}`],
            classes[`size-${size}`],
            className,
        ].join(' '),
        style: {
            color: color ? `var(--color-${color})` : undefined,
            textAlign: align,
            textTransform: transform,
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
        default:
            return <p {...styling}>{children}</p>;
    }
};

export default Text;
