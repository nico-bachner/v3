import { useState } from 'react';

import { Folder as FolderIcon, Plus, Minus } from '@components/icons';

import styles from './Folder.module.css';

interface FolderProps {
    name: string;
    open?: boolean;
}

const Folder: React.FC<FolderProps> = ({ children, name, open }) => {
    const [isOpen, setIsOpen] = useState(open ?? false);

    return (
        <li className={styles.folder}>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <span>{isOpen ? <Minus /> : <Plus />}</span>
                <span>
                    <FolderIcon />
                </span>
                <span>{name}</span>
            </button>

            <ul className={isOpen ? 'block' : 'hidden'}>{children}</ul>
        </li>
    );
};

export default Folder;
