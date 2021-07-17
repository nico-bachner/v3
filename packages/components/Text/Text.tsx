import styles from './Text.module.css';

type TextProps = {
    type?: 'h1' | 'h2' | 'h3';
    size?:
        | '3xs'
        | '2xs'
        | 'xs'
        | 'sm'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl';
    space?: 'tight' | 'prose';
    margin?: 'tight' | 'prose';
    weight?: 'bold' | 'bolder' | 'boldest';
    color?:
        | 'highlight'
        | 'primary'
        | 'secondary'
        | 'lightest'
        | 'lighter'
        | 'light'
        | 'strong'
        | 'stronger'
        | 'strongest';
    align?: 'left' | 'center' | 'right';
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    className?: string;
};

const Text: React.FC<TextProps> = ({
    children,
    type,
    size,
    space,
    margin,
    weight,
    color,
    align,
    transform,
    className,
}) => {
    const classNames = [
        styles.text,
        styles[`type-${type}`],
        styles[`size-${size}`],
        styles[`space-${space}`],
        styles[`margin-${margin}`],
        styles[`weight-${weight}`],
        styles[`color-${color}`],
        styles[`align-${align}`],
        styles[`transform-${transform}`],
        className,
    ].join(' ');

    switch (type) {
        case 'h1':
            return <h1 className={classNames}>{children}</h1>;
        case 'h2':
            return <h2 className={classNames}>{children}</h2>;
        case 'h3':
            return <h3 className={classNames}>{children}</h3>;
        default:
            return <p className={classNames}>{children}</p>;
    }
};

export default Text;
