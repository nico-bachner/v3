import styles from './Code.module.css';

const Code: React.FC = ({ children }) => (
    <code className={styles.code}>{children}</code>
);

export default Code;
