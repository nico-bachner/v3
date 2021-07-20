import classes from './Text.module.css';

type TextProps = {
    type?: 'h1' | 'h2' | 'h3' | 'p';
    color?: Color;
    size?: FontSize;
    weight?: FontWeight;
    space?: 'tight' | 'prose' | 'loose';
    margin?: 'tight' | 'prose' | 'loose';
    align?: 'left' | 'center' | 'right';
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    className?: string;
};

const Text: React.FC<TextProps> = ({
    children,
    type = 'p',
    color,
    size,
    weight,
    space,
    margin,
    align,
    transform,
    className,
}) => {
    const styles: React.CSSProperties = {
        color: color ? `var(--color-${color}) ` : undefined,
        fontSize: size ? `var(--font-size-${size}) ` : undefined,
        // @ts-ignore (csstype expects a number, not a css custom property)
        fontWeight: weight ? `var(--font-weight-${weight}) ` : undefined,
        lineHeight: space ? `var(--line-height-${space}) ` : undefined,
        marginBlock: margin ? `var(--margin-${margin}) ` : undefined,
        textAlign: align,
        textTransform: transform,
    };

    switch (type) {
        case 'h1':
            return (
                <h1
                    style={styles}
                    className={[classes.text, classes.h1, className].join(' ')}
                >
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2
                    style={styles}
                    className={[classes.text, classes.h2, className].join(' ')}
                >
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3
                    style={styles}
                    className={[classes.text, classes.h3, className].join(' ')}
                >
                    {children}
                </h3>
            );
        case 'p':
            return (
                <p
                    style={styles}
                    className={[classes.text, classes.p, className].join(' ')}
                >
                    {children}
                </p>
            );
    }
};

export default Text;
