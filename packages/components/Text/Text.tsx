import classes from './Text.module.css';

type TextProps = {
    type?: 'h1' | 'h2' | 'h3' | 'strong' | 'p';
    color?: Color;
    size?: FontSize | 'base';
    weight?: FontWeight;
    margin?: TextMargin;
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
    const styles: React.CSSProperties = {
        color: color ? `var(--color-${color}) ` : undefined,
        // @ts-ignore (csstype expects a number, not a css custom property)
        fontWeight: weight ? `var(--font-weight-${weight}) ` : undefined,
        margin: margin ? `var(--text-margin-${margin}) ` : undefined,
        textAlign: align,
        textTransform: transform,
        ...style,
    };

    switch (type) {
        case 'h1':
            return (
                <h1
                    style={styles}
                    className={[
                        classes.text,
                        classes.h1,
                        classes[`size-${size}`],
                        className,
                    ].join(' ')}
                >
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2
                    style={styles}
                    className={[
                        classes.text,
                        classes.h2,
                        classes[`size-${size}`],
                        className,
                    ].join(' ')}
                >
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3
                    style={styles}
                    className={[
                        classes.text,
                        classes.h3,
                        classes[`size-${size}`],
                        className,
                    ].join(' ')}
                >
                    {children}
                </h3>
            );
        case 'strong':
            return (
                <strong
                    style={styles}
                    className={[
                        classes.text,
                        classes.strong,
                        classes[`size-${size}`],
                        className,
                    ].join(' ')}
                >
                    {children}
                </strong>
            );
        case 'p':
            return (
                <p
                    style={styles}
                    className={[
                        classes.text,
                        classes.p,
                        classes[`size-${size}`],
                        className,
                    ].join(' ')}
                >
                    {children}
                </p>
            );
    }
};

export default Text;
