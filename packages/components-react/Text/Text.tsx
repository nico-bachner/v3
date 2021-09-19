import classes from './Text.module.css';

type TextProps = {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'strong';
    color?: Color;
    size?: Scale;
    align?: 'left' | 'center' | 'right';
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    className?: string;
    style?: React.CSSProperties;
    id?: string;
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
    id,
}) => {
    const props = {
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
        id,
    };

    switch (type) {
        case 'h1':
            return <h1 {...props}>{children}</h1>;
        case 'h2':
            return <h2 {...props}>{children}</h2>;
        case 'h3':
            return <h3 {...props}>{children}</h3>;
        case 'h4':
            return <h4 {...props}>{children}</h4>;
        case 'strong':
            return <strong {...props}>{children}</strong>;
        default:
            return <p {...props}>{children}</p>;
    }
};

export default Text;
