import styles from './Blockquote.module.css';

const Code: React.FC = ({ children }) => (
    <blockquote className={styles.blockquote}>{children}</blockquote>
);

export default Code;
