import styles from './FileTree.module.css';

interface FileTreeProps {
    className?: string;
}

const FileTree: React.FC<FileTreeProps> = ({ className, children }) => (
    <div className={className}>
        <ul className={styles.filetree}>{children}</ul>
    </div>
);

export default FileTree;
