import styles from './FileTree.module.css';

const FileTree: React.FC<DefaultProps> = ({ id, className, children }) => (
    <div id={id} className={className}>
        <ul className={styles.filetree}>{children}</ul>
    </div>
);

export default FileTree;
