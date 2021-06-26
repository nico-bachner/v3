import styles from './Tree.module.css';

interface TreeProps {
    className?: string;
}

const Tree: React.FC<TreeProps> = ({ className, children }) => (
    <div className={className}>
        <ul className={styles.filetree}>{children}</ul>
    </div>
);

export default Tree;
