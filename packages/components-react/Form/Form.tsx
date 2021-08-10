import styles from './Form.module.css';

import Button from '../Button';

type FormProps = {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    className?: string;
};

const Form: React.FC<FormProps> = ({ children, onSubmit, className }) => (
    <form className={[styles.form, className].join(' ')} onSubmit={onSubmit}>
        {children}

        <Button type="submit" variant="primary">
            Sign Up
        </Button>
    </form>
);

export default Form;
