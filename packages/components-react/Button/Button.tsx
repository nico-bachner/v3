import classes from './Button.module.css';

type ButtonProps = {
    variant: 'primary' | 'secondary' | 'minimal';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant,
    className,
    type = 'button',
    onClick,
}) => (
    <button
        type={type}
        onClick={onClick}
        className={[classes.button, classes[variant], className].join(' ')}
    >
        {children}
    </button>
);

export default Button;
