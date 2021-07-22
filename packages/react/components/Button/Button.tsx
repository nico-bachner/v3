import styles from './Button.module.css';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button',
    onClick,
}) => (
    <button type={type} onClick={onClick} className={styles.button}>
        {children}
    </button>
);

export default Button;
