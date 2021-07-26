import classes from './Button.module.css';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
};

const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button',
    onClick,
    size = 'md',
}) => (
    <button
        type={type}
        onClick={onClick}
        className={[classes.button, classes[size]].join(' ')}
    >
        {children}
    </button>
);

export default Button;
