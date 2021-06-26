import { File as FileIcon } from '@components/icons';

import styles from './File.module.css';

interface FileProps {
    name: string;
}

const File: React.VFC<FileProps> = ({ name }) => (
    <li className={styles.file}>
        <span>
            <FileIcon />
        </span>
        <span>{name}</span>
    </li>
);

export default File;
