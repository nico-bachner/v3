import { useState } from 'react';

import { FolderIcon } from '@components/icons';

import styles from './Folder.module.css';

interface FolderProps {
    name: string;
}

const Folder: React.FC<FolderProps> = ({ name, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <li className={styles.folder}>
            <button
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <span>
                    <FolderIcon />
                </span>
                <span>{name}</span>
            </button>
            {open && <ul>{children}</ul>}
        </li>
    );
};

export default Folder;
