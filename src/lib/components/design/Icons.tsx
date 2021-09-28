import styles from '@lib/styles/Design.module.css';

import {
    ArrowDown,
    ArrowUp,
    ArrowLeft,
    ArrowRight,
    ArrowDownLeft,
    ArrowDownRight,
    ArrowUpLeft,
    ArrowUpRight,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    Book,
    BookOpen,
    Bookmark,
    Check,
    Clipboard,
    Code,
    Command,
    Copy,
    Download,
    Upload,
    File,
    FileMinus,
    FilePlus,
    Folder,
    FolderMinus,
    FolderPlus,
    GitHub,
    Globe,
    Headphones,
    Image,
    SignMinus,
    SignPlus,
    Logo,
} from '@nico-bachner/icons-react';
import IconCard from './IconCard';

const Icons = () => (
    <div className={styles.iconsGrid}>
        <IconCard name="Arrow Down" icon={<ArrowDown />} />
        <IconCard name="Arrow Up" icon={<ArrowUp />} />
        <IconCard name="Arrow Left" icon={<ArrowLeft />} />
        <IconCard name="Arrow Right" icon={<ArrowRight />} />

        <IconCard name="Arrow Down Left" icon={<ArrowDownLeft />} />
        <IconCard name="Arrow Down Right" icon={<ArrowDownRight />} />
        <IconCard name="Arrow Up Left" icon={<ArrowUpLeft />} />
        <IconCard name="Arrow Up Right" icon={<ArrowUpRight />} />

        <IconCard name="Chevron Down" icon={<ChevronDown />} />
        <IconCard name="Chevron Up" icon={<ChevronUp />} />
        <IconCard name="Chevron Left" icon={<ChevronLeft />} />
        <IconCard name="Chevron Right" icon={<ChevronRight />} />

        <IconCard name="Book" icon={<Book />} />
        <IconCard name="Book Open" icon={<BookOpen />} />
        <IconCard name="Bookmark" icon={<Bookmark />} />
        <IconCard name="Check" icon={<Check />} />

        <IconCard name="Clipboard" icon={<Clipboard />} />
        <IconCard name="Code" icon={<Code />} />
        <IconCard name="Command" icon={<Command />} />
        <IconCard name="Copy" icon={<Copy />} />

        <IconCard name="Download" icon={<Download />} />
        <IconCard name="Upload" icon={<Upload />} />

        <IconCard name="File" icon={<File />} />
        <IconCard name="File Minus" icon={<FileMinus />} />
        <IconCard name="File Plus" icon={<FilePlus />} />

        <IconCard name="Folder" icon={<Folder />} />
        <IconCard name="Folder Minus" icon={<FolderMinus />} />
        <IconCard name="Folder Plus" icon={<FolderPlus />} />

        <IconCard name="GitHub" icon={<GitHub />} />
        <IconCard name="Globe" icon={<Globe />} />
        <IconCard name="Headphones" icon={<Headphones />} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <IconCard name="Image" icon={<Image />} />

        <IconCard name="Sign Minus" icon={<SignMinus />} />
        <IconCard name="Sign Plus" icon={<SignPlus />} />

        <IconCard name="Logo" icon={<Logo />} />
    </div>
);

export default Icons;
