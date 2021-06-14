interface TextProps {
    as?: 'h1' | 'h2' | 'h3' | 'h4';
    size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    lineHeight?: 'tight' | 'normal' | 'prose';
    weight?: 'lightest' | 'lighter' | 'light' | 'bold' | 'bolder' | 'boldest';
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    align?: 'left' | 'center' | 'right';
    shade?:
        | 'lightest'
        | 'lighter'
        | 'light'
        | 'strong'
        | 'stronger'
        | 'strongest';
    color?: 'gray' | 'azure' | 'cyan';
    className?: string;
}

const Text: React.FC<TextProps> = ({
    children,
    as,
    size,
    lineHeight,
    weight,
    transform,
    align,
    shade,
    color,
    className,
}) => {
    let styles: string[] = [];

    if (className) {
        styles.push(className);
    }

    switch (size) {
        case 'xs':
            styles.push('text-xs');
            break;
        case 'sm':
            styles.push('text-sm');
            break;
        case 'lg':
            styles.push('text-lg');
            break;
        case 'xl':
            styles.push('text-xl');
            break;
        case '2xl':
            styles.push('text-2xl');
            break;
        case '3xl':
            styles.push('text-3xl');
            break;
        case '4xl':
            styles.push('text-4xl');
            break;
        case '5xl':
            styles.push('text-5xl');
            break;
        case undefined:
            styles.push('text-base');
    }

    switch (lineHeight) {
        case 'tight':
            styles.push('leading-tight');
            break;
        case 'normal':
            styles.push('leading-normal');
            break;
        case 'prose':
            styles.push('leading-relaxed');
            break;
        case undefined:
            styles.push('leading-none');
    }

    switch (weight) {
        case 'lightest':
            styles.push('font-thin');
            break;
        case 'lighter':
            styles.push('font-extralight');
            break;
        case 'light':
            styles.push('font-light');
            break;
        case 'bold':
            styles.push('font-bold');
            break;
        case 'bolder':
            styles.push('font-extrabold');
            break;
        case 'boldest':
            styles.push('font-black');
            break;
        case undefined:
            styles.push('font-medium');
    }

    switch (align) {
        case 'left':
            styles.push('text-left');
            break;
        case 'center':
            styles.push('text-center');
            break;
        case 'right':
            styles.push('text-right');
            break;
        case undefined:
            styles.push('text-left');
    }

    switch (transform) {
        case 'capitalize':
            styles.push('capitalize');
            break;
        case 'uppercase':
            styles.push('uppercase');
            break;
        case 'lowercase':
            styles.push('lowercase');
            break;
        case undefined:
            styles.push('normal-case');
    }

    if (color) {
        if (shade) {
            styles.push(`text-${color}-${shade}`);
        } else {
            styles.push(`text-${color}`);
        }
    }

    const classes = styles.join(' ');

    switch (as) {
        case 'h1':
            return <h1 className={classes}>{children}</h1>;
        case 'h2':
            return <h2 className={classes}>{children}</h2>;
        case 'h3':
            return <h3 className={classes}>{children}</h3>;
        case 'h4':
            return <h4 className={classes}>{children}</h4>;
        case undefined:
            return <p className={classes}>{children}</p>;
    }
};

export default Text;
