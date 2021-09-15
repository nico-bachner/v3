import styles from './CodeBlock.module.css';

type CodeBlockProps = {
    className?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => (
    <pre className={[styles.code, className].join(' ')}>{children}</pre>
);

export default CodeBlock;
