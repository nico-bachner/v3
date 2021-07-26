import styles from './CodeBlock.module.css';

const CodeBlock: React.FC = ({ children }) => (
    <pre className={styles.code}>{children}</pre>
);

export default CodeBlock;
