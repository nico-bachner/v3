import styles from './Text.module.css';

type TextProps = {
    type?:
        | 'heading-1'
        | 'heading-2'
        | 'heading-3'
        | 'heading-4'
        | 'paragraph'
        | 'inline'
        | 'strong';

    size?: Scale;
    width?: 'sm' | 'md' | 'lg' | 'xl';
    color?: Color;
    align?: 'left' | 'center' | 'right';
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    className?: string;
    style?: React.CSSProperties;
    id?: string;
};

const Text: React.FC<TextProps> = ({
    children,
    type = 'paragraph',
    width,
    size,
    color,
    align,
    transform,
    className,
    style,
    id,
}) => {
    const props = {
        className: [
            styles[type ?? '_'],
            styles[`size-${size}`],
            styles[`width-${width}`],
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
        case 'paragraph':
            return <p {...props}>{children}</p>;
        case 'heading-1':
            return <h1 {...props}>{children}</h1>;
        case 'heading-2':
            return <h2 {...props}>{children}</h2>;
        case 'heading-3':
            return <h3 {...props}>{children}</h3>;
        case 'heading-4':
            return <h4 {...props}>{children}</h4>;
        case 'inline':
            return <span {...props}>{children}</span>;
        case 'strong':
            return <strong {...props}>{children}</strong>;
    }
};

export default Text;
